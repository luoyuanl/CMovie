# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2019-08-21 15:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cinema', '0004_auto_20190819_1217'),
    ]

    operations = [
        migrations.AddField(
            model_name='halls',
            name='hall_cols',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='halls',
            name='hall_rows',
            field=models.IntegerField(null=True),
        ),
    ]
