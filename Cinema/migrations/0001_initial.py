# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2019-08-08 01:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CinemaAdmin',
            fields=[
                ('Admin_id', models.AutoField(primary_key=True, serialize=False)),
                ('Admin_password', models.CharField(max_length=128)),
                ('Admin_phone', models.CharField(max_length=20)),
                ('Admin_email', models.CharField(blank=True, max_length=100)),
                ('Admin_name', models.CharField(blank=True, max_length=60)),
                ('Admin_type', models.IntegerField(choices=[(0, '超级管理员'), (1, '普通管理员')], default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Cinemas',
            fields=[
                ('cinema_id', models.AutoField(primary_key=True, serialize=False)),
                ('cinema_name', models.CharField(max_length=128)),
                ('cinema_addr', models.CharField(max_length=128)),
                ('cinema_phone', models.CharField(max_length=20)),
                ('cinema_photo', models.ImageField(blank=True, max_length=256, upload_to='')),
                ('cinema_isopen', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Halls',
            fields=[
                ('hall_id', models.AutoField(primary_key=True, serialize=False)),
                ('hall_name', models.CharField(max_length=60)),
                ('hall_type', models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('order_id', models.AutoField(primary_key=True, serialize=False)),
                ('order_num', models.CharField(max_length=20)),
                ('order_datetime', models.DateTimeField(auto_now_add=True)),
                ('order_seat2', models.IntegerField(blank=True)),
                ('order_seat3', models.IntegerField(blank=True)),
                ('order_seat4', models.IntegerField(blank=True)),
                ('order_seat5', models.IntegerField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('skd_id', models.AutoField(primary_key=True, serialize=False)),
                ('skd_language', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Seatlock',
            fields=[
                ('lock_id', models.AutoField(primary_key=True, serialize=False)),
                ('lock_time', models.TimeField(auto_now_add=True)),
                ('lock_type', models.IntegerField(choices=[(0, '可选'), (1, '锁定未支付'), (2, '已支付')], default=0)),
            ],
        ),
    ]
