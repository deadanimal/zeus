from __future__ import absolute_import
import os

from celery import Celery
from celery.schedules import crontab

from django.conf import settings


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'zeusapi.settings')

app = Celery('zeusapi')
app.config_from_object('django.conf:settings')
#app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)

