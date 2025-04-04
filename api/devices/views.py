import json
import time
import datetime

import boto3
import requests

from django.http import JsonResponse
from django.shortcuts import render
from django.db.models import Q

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin

from django_filters.rest_framework import DjangoFilterBackend

from .models import *

from .models import (
    Device,
    DeviceReading
)

from .serializers import (
    DeviceSerializer,
    DeviceReadingSerializer
)

from .helpers import (
    device_reading
)


AWS_ACCESS_KEY_ID = '6BOODC7OGS27MFQX2Q5C'
AWS_SECRET_ACCESS_KEY = 'J01iOvZxY7V9ZMOw346lbp4QrSQPAf4JUQ4jsEBEjmQ'
AWS_STORAGE_BUCKET_NAME = 'pipeline-project'
AWS_S3_REGION_NAME = 'sgp1'
AWS_S3_ENDPOINT_URL = 'https://sgp1.digitaloceanspaces.com'

# SB start

# session = boto3.session.Session()
s3 = boto3.resource('s3',
        region_name=AWS_S3_REGION_NAME,
        endpoint_url=AWS_S3_ENDPOINT_URL,
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY)

class DeviceViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Device.objects.all()
    serializer_class = DeviceSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny]#[IsAuthenticated]
        """
        if self.action == 'list':
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAuthenticated]
        """
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = Device.objects.all()
        """
        if user.user_type == 'SU':
            queryset = Device.objects.all()
        elif user.user_type == 'LV':
            queryset = Device.objects.all()
        elif user.user_type == 'HT':
            queryset = Device.objects.all()
        elif user.user_type == 'UT':
            queryset = Device.objects.all()                
        else:
            queryset = Device.objects.none()
        """
        return queryset  

    @action(methods=['GET'], detail=False)
    def malas(self, request, *args, **kwargs):


        url = "https://pipeline-project.sgp1.digitaloceanspaces.com/zeus/mqtt/" + str(int(time.time())) + '.json' #+ "-" + uuid.uuid4().hex + 
        print(url)
        req = requests.get(url)
        lol = req.content.decode('utf-8')
        print(json.dumps(lol))

        #itemname = "zeus/mqtt/" + datetime.datetime.utcnow().strftime("%s") + '.csv'

        # obj = s3.Object('pipeline-project', itemname)
        # body = obj.get()['Body'].read()
        # print(body)        

        json_data = {
            'test': time.time(),
            'body': lol,
            'url': url
        }

        delta = 0
        appliance_type = ''
        appliance_condition = ''

        # if delta > 2600:
        #     appliance_type = 'AC Cassette'
        #     appliance_condition = 'ON'
        # elif delta > 1900 && delta < 2600:
        #     appliance_type = 'AC York'
        #     appliance_condition = 'ON'
        # elif delta > 1500 && delta < 1900:
        #     appliance_type = 'Vacuum'
        #     appliance_condition = 'ON'
        # elif delta > 1300 && delta < 1500:
        #     appliance_type = 'Dryer'
        #     appliance_condition = 'ON'
        # elif delta > 1000 && delta < 1300:
        #     appliance_type = 'Induction Cooker'
        #     appliance_condition = 'ON'
        # elif delta > 700 && delta < 1000:
        #     appliance_type = 'Deep Fryer'
        #     appliance_condition = 'ON'
        # elif delta > 400 && delta < 700:
        #     appliance_type = 'Microwave'
        #     appliance_condition = 'ON'
        # elif delta > 200 && delta < 400:
        #     appliance_type = 'Toaster'
        #     appliance_condition = 'ON'
        # elif delta > 160 && delta < 200:
        #     appliance_type = 'Blender'
        #     appliance_condition = 'ON'
        # elif delta > 5 && delta < 20:
        #     appliance_type = 'Dryer'
        #     appliance_condition = 'OFF'
        # elif delta > 4 && delta < 5:
        #     appliance_type = 'Blender'
        #     appliance_condition = 'OFF'
        # elif delta > -3 && delta < 4:
        #     appliance_type = 'AC York'
        #     appliance_condition = 'OFF'
        # elif delta > -6 && delta < -3:
        #     appliance_type = 'AC Cassette'
        #     appliance_condition = 'OFF'
        # elif delta > -600 && delta < -6:
        #     appliance_type = 'Toaster'
        #     appliance_condition = 'OFF'
        # elif delta > -1000 && delta < -600:
        #     appliance_type = 'Vacuum'
        #     appliance_condition = 'OFF'
        # elif delta > -1400 && delta < -1000:
        #     appliance_type = 'Microwave'
        #     appliance_condition = 'OFF'
        # elif delta > -1900 && delta < -1400:
        #     appliance_type = 'Deep Fryer'
        #     appliance_condition = 'OFF'

    
        return JsonResponse(json_data)

    @action(methods=['GET'], detail=True)
    def reading(self, request, *args, **kwargs):
        device = self.get_object()

        frequency = request.GET.get('frequency', '') # minute, hour, day
        end_date = request.GET.get('end', '') # time in seconds since epoch(Unix)

        if frequency and end_date:

            if int(end_date) > int(time.time()):
                end_date = int(time.time())

            message = device_reading(
                device.id,
                frequency, 
                end_date)
        else:
            default_end_date = int(time.time())
            default_start_date = default_end_date - 86400
            message = device_reading(
                device.id,
                'second', 
                default_end_date)
        
        return JsonResponse(message)


    @action(methods=['GET'], detail=False)
    def lol(self, request, *args, **kwargs):
        """
        from django.core.files.storage import default_storage
        file = default_storage.open('storage_test', 'w')
        file.write('storage contents')
        file.close()
        print(default_storage.exists('storage_test'))
        file = default_storage.open('storage_test', 'r')
        print(file.read())
        file.close()
        """

        return 'lol'
        #target_user = int(kwargs['target_id'])
        #Follow.objects.create(user=user, target=target_user)
        #return Response(status=status.HTTP_204_NO_CONTENT)        
        #

    @action(methods=['GET'], detail=False)
    def chart_1(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'quantity': 10,
                'state': 'Active',
            },{
                'quantity': 20,
                'state': 'Inactive',
            }],
        }
        return JsonResponse(json_)         

    @action(methods=['GET'], detail=False)
    def chart_2(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'quantity': 0,
                'tak': 'faham',
            }],
        }
        return JsonResponse(json_)          

class DeviceReadingViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = DeviceReading.objects.all()
    serializer_class = DeviceReadingSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny]#[IsAuthenticated]
        """
        if self.action == 'list':
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAuthenticated]
        """
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = DeviceReading.objects.all()
        """
        if user.user_type == 'SU':
            queryset = Device.objects.all()
        elif user.user_type == 'LV':
            queryset = Device.objects.all()
        elif user.user_type == 'HT':
            queryset = Device.objects.all()
        elif user.user_type == 'UT':
            queryset = Device.objects.all()                
        else:
            queryset = Device.objects.none()
        """
        return queryset 

    def depickling():
        # Get new added data
        # Compare the new data with pickle
        # If return true, change appliance to is_active to true?
        return 'depickled'


    @action(methods=['GET'], detail=False)
    def chart_1(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'quantity': 0,
                'tak': 'faham',
            }],
        }
        return JsonResponse(json_)  

