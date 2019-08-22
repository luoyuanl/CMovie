# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2019-08-19 12:17
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cinema', '0003_auto_20190812_2022'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='order_status',
            field=models.IntegerField(choices=[(0, '未支付'), (1, '已取消'), (2, '已完成')], null=True),
        ),
    ]
