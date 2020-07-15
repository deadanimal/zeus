from __future__ import unicode_literals 
import uuid 
from django.db import models
from django.utils.formats import get_format

from django.contrib.gis.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from zeusapi.helpers import PathAndRename

from accounts.models import (Account)
from buildings.models import (Building)

class ApplianceBase(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    active = models.BooleanField(default=True)
    
    brand = models.CharField(null=True, max_length=255)
    model = models.CharField(null=True, max_length=255)
    year = models.CharField(null=True, max_length=255)
    manufacturer = models.CharField(null=True, max_length=255)
    batch_number = models.CharField(null=True, max_length=255)

    GROUP = [
        ('NA', 'Not Available'),   
    ] 

    group = models.CharField(
        max_length=2,
        choices=GROUP,
        default='NA',
    )    

    def __str__(self):
        name_string = self.brand + '-' + self.model + '-' + self.year
        return name_string

class Appliance(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)

    active = models.BooleanField(default=True)

    account = models.ForeignKey(Account, on_delete=models.CASCADE, null=True)
    building = models.ForeignKey(Building, on_delete=models.CASCADE, null=True)

    purchase_date = models.DateTimeField(null=True) 
    install_date = models.DateTimeField(null=True) 

    serial_number = models.CharField(null=True, max_length=255)

    appliance_base = models.ForeignKey(ApplianceBase, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name    

class ApplianceTransactionMode(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    
    appliance_base = models.ForeignKey(ApplianceBase, on_delete=models.CASCADE, null=True)

    STATE = [
        ('ON', 'On'),  
        ('OF', 'Off'),  

        ('NA', 'Not Available'),   
    ] 

    at_state = models.CharField(
        max_length=2,
        choices=STATE,
        default='NA',
    )        

    MODE = [
        ('ON', 'On'),  
        ('OF', 'Off'),  

        ('NA', 'Not Available'),   
    ] 

    at_mode = models.CharField(
        max_length=2,
        choices=MODE,
        default='NA',
    )    

    estimated_delta_start_range = models.FloatField(null=True)
    estimated_delta_end_range = models.FloatField(null=True)
    estimated_cumulative_delta_start_range = models.FloatField(null=True)
    estimated_cumulative_delta_end_range = models.FloatField(null=True)    

    def __str__(self):
        return self.at_datetime          


class ApplianceTransaction(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    at_datetime = models.DateTimeField(null=True)
    
    appliance = models.ForeignKey(Appliance, on_delete=models.CASCADE, null=True)
    appliance_transaction_mode = models.ForeignKey(ApplianceTransactionMode, on_delete=models.CASCADE, null=True)

    real_delta_start_range = models.FloatField(null=True)
    real_delta_end_range = models.FloatField(null=True)
    real_cumulative_delta_start_range = models.FloatField(null=True)
    real_cumulative_delta_end_range = models.FloatField(null=True)        


    def __str__(self):
        return self.at_datetime    