# Generated by Django 2.2.6 on 2020-07-15 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appliances', '0002_auto_20200715_1212'),
    ]

    operations = [
        migrations.AddField(
            model_name='appliance',
            name='at_state',
            field=models.CharField(choices=[('ON', 'On'), ('OF', 'Off'), ('NA', 'Not Available')], default='OF', max_length=2),
        ),
    ]
