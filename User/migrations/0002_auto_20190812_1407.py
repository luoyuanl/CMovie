# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2019-08-12 14:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='user_photo',
            field=models.ImageField(null=True, upload_to='userphoto'),
        ),
    ]