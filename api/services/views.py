
from django.shortcuts import render
from django.db.models import Q
import datetime

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin

from django_filters.rest_framework import DjangoFilterBackend

from .models import (
    Service, 
)

from .serializers import (
    ServiceSerializer, 
)

class ServiceViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny] #permission_classes = [IsAuthenticated]
        """
        if self.action == 'list':
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAuthenticated]
        """
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = Service.objects.all()
        """
        if user.user_type == 'SU':
            queryset = Service.objects.all()
        elif user.user_type == 'LV':
            queryset = Service.objects.all()
        elif user.user_type == 'HT':
            queryset = Service.objects.all()
        elif user.user_type == 'UT':
            queryset = Service.objects.all()                
        else:
            queryset = Service.objects.none()  
        """      
        return queryset  
          


    @action(methods=['GET'], detail=False)
    def dashboard_basic_stats(self, request, *args, **kwargs):
        json_ = {
            'total_appliance_base': 100,
            'total_device': 100,
            'total_work': 100,
            'total_appliance': 100
        }
        return JsonResponse(json_)             

    @action(methods=['GET'], detail=False)
    def dashboard_power_consumption(self, request, *args, **kwargs):
        json_ = {
            'power_consumption': 100.00,
            'time': datetime.datetime.now()
        }
        return JsonResponse(json_)      

    @action(methods=['GET'], detail=False)
    def dashboard_appliance_base_groups(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'group': 'Fridge',
                'quantity': 4
            }],
        }
        return JsonResponse(json_)                         


    @action(methods=['GET'], detail=False)
    def dashboard_estimated_power_consumption(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'group': 'Fridge',
                'power': 12.21
            }],
        }
        return JsonResponse(json_)      

    @action(methods=['GET'], detail=False)
    def dashboard_estimated_work(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'group': 'Install',
                'power': 321,
                'month': 'June'
            }, {
                'group': 'Maintain',
                'power': 32,
                'month': 'June'       
            }],
        }
        return JsonResponse(json_)        

    @action(methods=['GET'], detail=False)
    def dashboard_bubble_estimated_power_consumption(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'latitude': 0.0,
                'longitude': 0.0,
                'power': 12.21
            }],
        }
        return JsonResponse(json_)          

    @action(methods=['GET'], detail=False)
    def dashboard_bubble_work(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'work_type': 'install',
                'latitude': 0.0,
                'longitude': 0.0,
                'power': 1.23
            }],
        }
        return JsonResponse(json_)              

    @action(methods=['GET'], detail=False)
    def dashboard_bubble_devices(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'latitude': 0.0,
                'longitude': 0.0,
                'quantity': 321
            }],
        }
        return JsonResponse(json_)        

    @action(methods=['GET'], detail=False)
    def dashboard_bubble_appliances(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'latitude': 0.0,
                'longitude': 0.0,
                'quantity': 32100
            }]
        }
        return JsonResponse(json_)                          