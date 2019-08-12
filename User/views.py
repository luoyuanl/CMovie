import os
import random
from datetime import datetime

from Cinema.models import Orders
from Film.models import Films
from User.tools import send_sms
from django.core.mail import send_mail
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse

from User.models import Users


# 主页

def index(request):
    # 右上角用户登陆位置显示request.session['username'],为手机号
    username = request.session.get('username')
    return render(request, 'common/base.html', context={'username': username})


# 注册
def register(request):
    if request.method == 'POST':
        phone = request.POST.get('mobile')
        user = Users.objects.filter(user_phone=phone).first()
        if user:
            return HttpResponse('用户已存在')
        else:
            verifycode = request.POST.get('verifycode')
            if verifycode == request.session['code']:
                Users.register(request)
                request.session['username'] = phone
            else:
                return HttpResponse('验证码输入有误')
            return render(request, 'index.html')
    else:
        return render(request, 'index.html')


# 发送验证码
def sendsms(request, phone):
    code = random.randint(100001, 1000000)
    send_sms(phone, {'number': '{}'.format(code)})
    request.session['code'] = code


# 账号密码登录
def normallogin(request):
    if request.method == 'POST':
        phone = request.POST.get('mobile')
        password = request.POST.get('password')
        if Users.checklogin(phone, password):
            request.session['username'] = phone
            return render(request, 'index.html')
        else:
            return render(request, 'index.html')
    else:
        return render(request, 'index.html')


# 手机验证码登录
def phonelogin(request):
    pass


# 退出登录
def logout(request):
    response = redirect(reverse('user:index'))
    # 清除cookie
    # response.delete_cookie('user_phone')

    # 清除session
    request.session.flush()
    return response


# 修改个人信息
def myinfo(request):
    pass


# 防止文件重名
def get_unique_filename(filename):
    ext = os.path.splitext(filename)
    destfilename = ext[0] + '' + datetime.now().strftime('%Y%m%d%H%M%S')
    return destfilename


# 上传头像
def upload(request):
    if request.method == 'POST':
        photo = request.FILES.get('photo')
        if not Users.check_file_type(photo.name) and Users.check_file_size(photo.size):
            return HttpResponse('文件不合法')
        user = Users()
        user.user_phone = photo
        user.save()
        return HttpResponse('上传成功')
    return render(request, 'index.html')


# 查看个人订单
def myorder(request):
    # return 订单号order_num，订单日期order_datetime，片名film_name，影院cinema_name，厅hall_name，座位seat_num，放映日期skd_date，时间skd_starttime，周几，海报film_phoho，总票价order_price
    user = Users.objects.filter(user_phone=123).first()
    orders = Users.objects.raw(
        "SELECT user_id,user_phone,order_num,order_datetime,order_status,order_seat1,order_seat2,order_seat3,order_seat4,order_prices,skd_date,skd_starttime,hall_name,film_namech,cinema_name,film_photo FROM User_users INNER JOIN Cinema_orders ON user_id = order_userid INNER JOIN Cinema_schedules ON order_skdid = skd_id INNER JOIN Cinema_halls ON skd_hallid = hall_id INNER JOIN Cinema_cinemas ON hall_cinemaid = cinema_id INNER JOIN Film_films ON skd_filmid = film_id WHERE user_id={}".format(
            user.user_id))
    return render(request, 'index.html', context={'title': '我的订单',
                                                  'orders': orders})


# 订单详情
def orderdetail(request):
    # retunr 订单号order.order_num,
    # order_num = request.GET.get('order_num')
    order_num = 44443
    orders = Orders.objects.raw(
        "SELECT order_id,order_num,order_seat1,order_seat2,order_seat3,order_seat4,order_seat5,order_prices,skd_date,skd_starttime,hall_name,cinema_name,cinema_phone,cinema_addr,film_namech FROM Cinema_orders INNER JOIN Cinema_schedules ON order_skdid = skd_id INNER JOIN Cinema_halls ON Cinema_schedules.skd_hallid = Cinema_schedules.skd_hallid INNER JOIN Cinema_cinemas ON Cinema_halls.hall_cinemaid = Cinema_cinemas.cinema_id INNER JOIN Film_films ON skd_filmid = film_id WHERE order_num ={}".format(order_num))
    return render(request, 'index.html', context={'title': '订单详情', 'orders': orders})


# 订票
def orderticket(request):
    if request.method == 'GET':
        return render(request, '选座1.html')
    else:
        pass


# 支付
def payment(request):
    pass


# 找回密码
def sendmail(request):
    send_mail('标题', '内容', settings.EMAIL_FROM, [])
