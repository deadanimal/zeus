from datetime import datetime
from calendar import timegm
import json

from django.contrib.auth.forms import PasswordResetForm
from django.conf import settings
from django.utils.translation import gettext as _
from rest_framework import serializers


from django.utils.timezone import now


from .models import (
    Device,
    DeviceReading
)


class DeviceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Device
        fields = '__all__'


class DeviceReadingSerializer(serializers.ModelSerializer):

    class Meta:
        model = DeviceReading
        fields = '__all__'