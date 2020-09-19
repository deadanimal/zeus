import jwt
from django.http import JsonResponse
import datetime

from django.shortcuts import render
from django.db.models import Q

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin

from django_filters.rest_framework import DjangoFilterBackend

#from notifications.helpers import send_message_to_specific

from .models import (
    Appliance, 
    ApplianceBase,
    ApplianceTransaction,
    ApplianceTransactionMode,
    ApplianceActivity
)

from .serializers import (
    ApplianceSerializer, 
    ApplianceBaseSerializer,
    ApplianceTransactionSerializer,
    ApplianceTransactionModeSerializer,
    ApplianceActivitySerializer
)

from accounts.models import (
    Account
)

from organisations.models import (
    Organisation
)

from users.models import (
    CustomUser
)


class ApplianceViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Appliance.objects.all()
    serializer_class = ApplianceSerializer
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
        queryset = Appliance.objects.all()
        """
        if user.user_type == 'SU':
            queryset = Appliance.objects.all()
        elif user.user_type == 'LV':
            queryset = Appliance.objects.all()
        elif user.user_type == 'HT':
            queryset = Appliance.objects.all()
        elif user.user_type == 'UT':
            queryset = Appliance.objects.all()                
        else:
            queryset = Appliance.objects.none()
        """
        return queryset  
          


    @action(methods=['GET'], detail=True)
    def activate(self, request, *args, **kwargs):
        appliance = self.get_object()
        appliance.active = True

        serializer =  ApplianceSerializer(appliance)
        return Response(serializer.data)   

    @action(methods=['GET'], detail=True)
    def deactivate(self, request, *args, **kwargs):
        appliance = self.get_object()
        appliance.active = False

        serializer =  ApplianceSerializer(appliance)
        return Response(serializer.data)    

    @action(methods=['GET'], detail=False)
    def chart_1(self, request, *args, **kwargs):
        json_ = {
            'active': 123,
            'inactive': 21
        }
        return JsonResponse(json_)         

    @action(methods=['GET'], detail=False)
    def chart_2(self, request, *args, **kwargs):
        import datetime
        json_ = {
            'timestamp': datetime.datetime.now(),
            'quantity': 21
        }
        return JsonResponse(json_)              

    @action(methods=['GET'], detail=True)
    def on(self, request, *args, **kwargs):
        appliance = self.get_object()
        appliance.at_state = 'ON'

        # send_message_to_specific(appliance.)

        serializer =  ApplianceSerializer(appliance)
        return Response(serializer.data)  
    
    @action(methods=['GET'], detail=True)
    def off(self, request, *args, **kwargs):
        appliance = self.get_object()
        appliance.at_state = 'OF'

        serializer =  ApplianceSerializer(appliance)
        return Response(serializer.data)  
    

class ApplianceBaseViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = ApplianceBase.objects.all()
    serializer_class = ApplianceBaseSerializer
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
        queryset = ApplianceBase.objects.all()
        """
        if user.user_type == 'SU':
            queryset = ApplianceBase.objects.all()
        elif user.user_type == 'LV':
            queryset = ApplianceBase.objects.all()
        elif user.user_type == 'HT':
            queryset = ApplianceBase.objects.all()
        elif user.user_type == 'UT':
            queryset = ApplianceBase.objects.all()                
        else:
            queryset = ApplianceBase.objects.none()
        """
        return queryset  


    @action(methods=['GET'], detail=True)
    def activate(self, request, *args, **kwargs):
        appliance = self.get_object()
        appliance.active = True

        serializer =  ApplianceBaseSerializer(appliance)
        return Response(serializer.data)   

    @action(methods=['GET'], detail=True)
    def deactivate(self, request, *args, **kwargs):
        appliance = self.get_object()
        appliance.active = False

        serializer =  ApplianceBaseSerializer(appliance)
        return Response(serializer.data)       

    @action(methods=['GET'], detail=False)
    def chart_1(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'brand': 'Brand',
                'quantity': 32100
            }],
        }
        return JsonResponse(json_)         

    @action(methods=['GET'], detail=False)
    def chart_2(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'group': 'Group',
                'quantity': 32100
            }],
        }
        return JsonResponse(json_)                



class ApplianceTransactionViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = ApplianceTransaction.objects.all()
    serializer_class = ApplianceTransactionSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny]  #[IsAuthenticated]
        """
        if self.action == 'list':
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsAuthenticated]
        """
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = ApplianceBase.objects.all()

        # if user.user_type == 'SU':
        #     queryset = ApplianceTransaction.objects.all()
        # elif user.user_type == 'LV':
        #     pass
        # elif user.user_type == 'HT':
        #     pass
        # elif user.user_type == 'UT':
        #     pass                
        # else:
        #     queryset = ApplianceTransaction.objects.none()        
        return queryset          


    @action(methods=['GET'], detail=False)
    def latest(self, request, *args, **kwargs):
        appliance = self.get_object()

        serializer =  ApplianceSerializer(appliance)
        return Response(serializer.data)        

        
    @action(methods=['GET'], detail=False)
    def chart_1(self, request, *args, **kwargs):
        import datetime
        json_ = {
            'list_': [{
                'timestamp': datetime.datetime.now(),
                'quantity': 231,
                'state': 'ON',
                'group': 'G1'
            }],
        }
        return JsonResponse(json_)         

    @action(methods=['GET'], detail=False)
    def chart_2(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'quantity': 231,
                'state': 'ON',
            }],
        }
        return JsonResponse(json_)
    
    # @action(methods=['GET'], detail=False)
    # def toaster_on(self, request, *args, **kwargs):
    #     ApplianceTransaction.objects.create(
    #         at_datetime = datetime.datetime.now(),
    #         appliance = '7c368d67-f95a-4671-b3f8-959ecd843749',
    #         at_state = 'ON'
    #     )
    #     return super().toaster_on(request)



class ApplianceTransactionModeViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = ApplianceTransactionMode.objects.all()
    serializer_class = ApplianceTransactionModeSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user

        if user.user_type == 'SU':
            queryset = ApplianceTransaction.objects.all()
        elif user.user_type == 'LV':
            pass
        elif user.user_type == 'HT':
            pass
        elif user.user_type == 'UT':
            pass                
        else:
            queryset = ApplianceTransaction.objects.none()        
        return queryset          

    @action(methods=['GET'], detail=False)
    def chart_1(self, request, *args, **kwargs):
        json_ = {
            'list_': [{
                'quantity': 0,
                'tak': 'faham',
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



class ApplianceActivityViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = ApplianceActivity.objects.all()
    serializer_class = ApplianceActivitySerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [AllowAny]
        else:
            permission_classes = [AllowAny]

        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        queryset = ApplianceActivity.objects.all()
        return queryset