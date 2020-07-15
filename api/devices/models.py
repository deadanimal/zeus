from __future__ import unicode_literals 
import uuid 
from django.db import models
from django.utils.formats import get_format

from django.contrib.gis.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from zeusapi.helpers import PathAndRename

from accounts.models import Account
from users.models import CustomUser

class Device(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(null=True, max_length=255)
    label = models.CharField(null=True, max_length=255)

    account = models.ForeignKey(Account, on_delete=models.CASCADE, null=True)

    TYPE = [
        ('01', 'Bolt v1.0'), 

        ('NA', 'Not Available'),   
    ] 

    device_type = models.CharField(
        max_length=2,
        choices=TYPE,
        default='NA',
    )    

    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class DeviceReading(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    device = models.ForeignKey(Device, on_delete=models.CASCADE, null=True)
    
    aggregated_power = models.FloatField(null=True)
    phase_1_power = models.FloatField(null=True)
    phase_2_power = models.FloatField(null=True)
    phase_3_power = models.FloatField(null=True)

    aggregated_current = models.FloatField(null=True)
    phase_1_current = models.FloatField(null=True)
    phase_2_current = models.FloatField(null=True)
    phase_3_current = models.FloatField(null=True)    
    
    timestamp = models.DateTimeField(null=True)

    def __str__(self):
        return self.device.name


class DeviceWork(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    device = models.ForeignKey(Device, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    account = models.ForeignKey(Account, on_delete=models.CASCADE, null=True)

    TYPE = [
        ('01', 'Maintenance'), 
        ('02', 'Install'), 

        ('NA', 'Not Available'),   
    ] 

    work_type = models.CharField(
        max_length=2,
        choices=TYPE,
        default='NA',
    )    

    proposed_datetime = models.DateTimeField(null=True)
    executed_datetime = models.DateTimeField(null=True)

    remarks = models.CharField(null=True, max_length=255)

    def __str__(self):
        return self.device.name
