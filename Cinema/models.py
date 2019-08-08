from django.db import models


# 影院表
# 影院id，影院名，地址，电话，照片，营业状态
class Cinemas(models.Model):
    cinema_id = models.AutoField(primary_key=True)
    cinema_name = models.CharField(max_length=128)
    cinema_addr = models.CharField(max_length=128)
    cinema_phone = models.CharField(max_length=20)
    cinema_photo = models.ImageField(max_length=256, blank=True)  # 影院照片，路径
    cinema_isopen = models.BooleanField(default=True)

    # cinema_service = models.CharField(256)  # 影院服务，暂时不用
    # cinema_areaid = models.CharField(128)   # 所属区县号，对应城市表，暂时不用


# 影厅表
# 影厅id，影厅类型，所属影院，总座位数，所属影院id
class Halls(models.Model):
    hall_id = models.AutoField(primary_key=True)
    hall_name = models.CharField(max_length=60)
    hall_type = models.CharField(max_length=128)
    hall_seatscount = models.IntegerField
    hall_cinemaid = models.IntegerField  # 所属影院，关联影院表


# 排片表
# 场次id，日期，开始时间，结束时间，影厅id，影片id，语言版本，票价
class Schedule(models.Model):
    skd_id = models.AutoField(primary_key=True)
    skd_date = models.DateField
    skd_starttime = models.TimeField
    skd_endtime = models.TimeField
    skd_hallid = models.IntegerField
    skd_filmid = models.IntegerField
    skd_language = models.CharField(max_length=20)
    skd_price = models.IntegerField


# 座位锁定表
# 预定id，场次id，订单id，座位号，锁定开始时间，座位状态
class Seatlock(models.Model):
    # 座位锁定状态，15分钟未支付取消锁定
    lktype = ((0, '可选'), (1, '锁定未支付'), (2, '已支付'))

    lock_id = models.AutoField(primary_key=True)
    lock_skdid = models.IntegerField  # 排片id
    lock_orderid = models.IntegerField
    lock_seatnum = models.IntegerField
    lock_time = models.TimeField(auto_now_add=True)
    lock_type = models.IntegerField(choices=lktype, default=0)


# 订单表
# 订单id，订单号，订单用户id，场次id，座位号（最多5个）,订单总价，支付状态
class Order(models.Model):
    # 订单状态：未支付，已取消，已支付
    status = ((0, '未支付'), (1, '已取消'), (2, '已支付'))

    order_id = models.AutoField(primary_key=True)  # 场次号+下单时间+用户id
    order_num = models.CharField(max_length=20)
    order_datetime = models.DateTimeField(auto_now_add=True)
    order_userid = models.IntegerField
    order_skdid = models.IntegerField
    order_seat1 = models.IntegerField
    order_seat2 = models.IntegerField(blank=True)
    order_seat3 = models.IntegerField(blank=True)
    order_seat4 = models.IntegerField(blank=True)
    order_seat5 = models.IntegerField(blank=True)
    order_prices = models.IntegerField
    order_status = models.IntegerField


# 影院管理员，手机号或邮箱登录
# 管理员id，密码，手机号，邮箱，姓名，所属影院，权限类型
class CinemaAdmin(models.Model):
    # 自定义管理员类型
    admtype = ((0, '超级管理员'), (1, '普通管理员'))

    Admin_id = models.AutoField(primary_key=True)
    Admin_password = models.CharField(max_length=128)
    Admin_phone = models.CharField(max_length=20)
    Admin_email = models.CharField(max_length=100,blank=True)
    Admin_name = models.CharField(max_length=60,blank=True)
    Admin_cinemaid = models.IntegerField
    Admin_type = models.IntegerField(choices=admtype, default=0)
