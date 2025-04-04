from datetime import datetime
from calendar import timegm
import json

from django.contrib.auth.forms import PasswordResetForm
from django.conf import settings
from django.utils.translation import gettext as _
from rest_framework import serializers


from django.utils.timezone import now


from .models import (
    Appliance,
    ApplianceBase,
    ApplianceTransaction,
    ApplianceTransactionMode,
    ApplianceActivity
)


class ApplianceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appliance
        fields = '__all__'


class ApplianceBaseSerializer(serializers.ModelSerializer):

    class Meta:
        model = ApplianceBase
        fields = '__all__'

class ApplianceTransactionSerializer(serializers.ModelSerializer):

    class Meta:
        model = ApplianceTransaction
        fields = '__all__'         

class ApplianceTransactionModeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ApplianceTransactionMode
        fields = '__all__'                   

class ApplianceActivitySerializer(serializers.ModelSerializer):

    class Meta:
        model = ApplianceActivity
        fields = '__all__'                   