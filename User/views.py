import os
import random
from datetime import datetime

from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt

from Cinema.models import Orders, Seatlocks, Schedules, Halls, Cinemas, Seats
from Film.models import Films
from User.sms import send_sms
from django.core.mail import send_mail
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse

from User.models import Users


# 注册
def register(request):
    if request.method == 'POST':
        phone = request.POST['phone']
        user = Users.objects.filter(user_phone=phone).first()
        if user:
            # return render(request, '注册 _ 猫眼电影.html', context={'title': '注册', 'msg': '账号已注册，请直接登录'})
            return render(request, '登录 1.html', context={'title': '登录'})
        else:
            phonecode = int(request.POST['phonecode'])
            print(phonecode)
            if phonecode == request.session['code']:
                Users.register(request)
                request.session['username'] = phone
                user = Users.objects.filter(user_phone=phone).first()
                request.session['user_id'] = user.user_id
                return redirect(reverse('film:index'))
            else:
                return render(request, '注册 _ 猫眼电影.html', context={'title': '注册', 'msg': '验证码有误，请重新输入'})
    else:
        return render(request, '注册 _ 猫眼电影.html', context={'title': '注册'})


# 发送验证码
def sendsms(request):
    code = random.randint(100001, 1000000)
    send_sms(request.POST['phone'], {'code': code})
    print(code)
    request.session['code'] = code
    return HttpResponse('验证码发送成功！')


# 账号密码登录
def login(request):
    if request.method == 'POST':
        phone = request.POST['phone']
        password = request.POST['password']
        if Users.checklogin(phone, password):
            request.session['username'] = phone
            return redirect(reverse('film:index'))
        else:
            request.session['username'] = phone
            return render(request, '登录 1.html', context={'title': '登录'})
    else:
        return render(request, '登录 1.html', context={'title': '登录'})


# 手机验证码登录
def phonelogin(request):
    pass


# 退出登录
def logout(request):
    response = redirect(reverse('film:index'))
    request.session.flush()
    return response


# 修改个人信息
def myinfo(request):
    user = Users.objects.filter(user_phone=request.session['username']).first()
    if request.method == 'POST':
        user.user_nickname = request.POST['nickname']
        user.user_gender = request.POST['gender']
        user.user_signature = request.POST['signature']
        user.user_birthday = request.POST['birthday']
        user.save()
    return render(request, '个人信息.html', context={'title': '个人信息', 'user': user})


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
    user = Users.objects.filter(user_phone=request.session['username']).first()
    print(user.user_gender)
    orders = Users.objects.raw(
        "SELECT user_id,user_phone,order_num,order_datetime,order_status,order_seat1,order_seat2,order_seat3,order_seat4,order_prices,skd_date,skd_starttime,hall_name,film_namech,cinema_name,film_photo FROM User_users INNER JOIN Cinema_orders ON user_phone = order_userphone INNER JOIN Cinema_schedules ON order_skdid = skd_id INNER JOIN Cinema_halls ON skd_hallid = hall_id INNER JOIN Cinema_cinemas ON hall_cinemaid = cinema_id INNER JOIN Film_films ON skd_filmid = film_id WHERE user_id={}".format(
            user.user_id))

    return render(request, '订单.html', context={'title': '我的订单', 'orders': orders})


# 订单详情
def orderdetail(request, order_num):
    orders = Orders.objects.raw(
        "SELECT order_id,order_num,order_seat1,order_seat2,order_seat3,order_seat4,order_seat5,order_prices,order_status,skd_date,skd_starttime,hall_name,cinema_name,cinema_phone,cinema_addr,film_namech FROM Cinema_orders INNER JOIN Cinema_schedules ON order_skdid = skd_id INNER JOIN Cinema_halls ON Cinema_schedules.skd_hallid = Cinema_schedules.skd_hallid INNER JOIN Cinema_cinemas ON Cinema_halls.hall_cinemaid = Cinema_cinemas.cinema_id INNER JOIN Film_films ON skd_filmid = film_id WHERE order_num ={}".format(
            order_num))
    return render(request, '订单详情.html', context={'title': '订单详情', 'orders': orders})


# 订票
def orderticket(request):
    if request.method == 'GET':
        return render(request, '选座1.html')
    else:
        pass


# 支付
@csrf_exempt
# def payment(request):
#     print(request.method)
#     if request.method == 'POST':
#         orderseats = request.POST.getlist('arr')
#         skdid = request.POST.get('skd')
#         skd = Schedules.objects.filter(skd_id=skdid).first()
#         film = Films.objects.filter(film_id=skd.skd_filmid).first()
#         userphone = request.session['username']
#         seatlocks = [int(i.strip('seat')) for i in orderseats]
#         seat = Seatlocks.objects.filter(lock_seatnum__in=seatlocks).all()
#         hall = Halls.objects.filter(hall_id=skd.skd_hallid).first()
#         cinema = Cinemas.objects.filter(cinema_id=1).first()
#         if seat:
#             return redirect(reverse('film:seat'))
#         else:
#             order_num = str(skdid) + datetime.now().strftime('%Y%m%d%H%M%S')
#             order_price = len(orderseats) * skd.skd_price
#             while len(seatlocks) < 5:
#                 seatlocks.append(0)
#             order = Orders(order_num=order_num, order_userphone=userphone, order_skdid=skdid, order_status=0,
#                            order_seat1=seatlocks[0], order_seat2=seatlocks[1], order_seat3=seatlocks[2],
#                            order_seat4=seatlocks[3], order_seat5=seatlocks[4], order_prices=order_price)
#             order.save()
#             for i in seatlocks:
#                 if i != 0:
#                     lockseat = Seatlocks(lock_type=1, lock_seatnum=i, lock_skdid=skdid, lock_orderid=order_num)
#                     lockseat.save()
#         return render(request, '支付.html',
#                       context={'film': film, 'skd': skd, 'seats': seat, 'hall': hall, 'cinema': cinema, 'order': order})
#     else:
#         return render(request, '支付.html',
#                       context={'title': '支付'})

def payment(request):
    if request.method == 'POST':
        orderseats = request.POST['seats']
        orderseats = orderseats.split(',')
        skdid = request.POST.get('skd')
        skd = Schedules.objects.filter(skd_id=skdid).first()
        film = Films.objects.filter(film_id=skd.skd_filmid).first()
        userphone = request.session['username']
        seatlocks = [int(i.strip('seat')) for i in orderseats]
        print(seatlocks, type(seatlocks))
        seats = Seatlocks.objects.filter(lock_seatnum__in=seatlocks).all()
        hall = Halls.objects.filter(hall_id=skd.skd_hallid).first()
        cinema = Cinemas.objects.filter(cinema_id=1).first()
        if seats:
            return redirect(reverse('film:seat', args=(skd.skd_id,)))
        else:
            order_num = str(skdid) + datetime.now().strftime('%Y%m%d%H%M%S')
            order_price = len(orderseats) * skd.skd_price
            while len(seatlocks) < 5:
                seatlocks.append(0)
            order = Orders(order_num=order_num, order_userphone=userphone, order_skdid=skdid, order_status=0,
                           order_seat1=seatlocks[0], order_seat2=seatlocks[1], order_seat3=seatlocks[2],
                           order_seat4=seatlocks[3], order_seat5=seatlocks[4], order_prices=order_price)
            order.save()
            orderseats = []
            for seat in seatlocks:
                if seat != 0:
                    lockseat = Seatlocks(lock_type=1, lock_seatnum=seat, lock_skdid=skdid, lock_orderid=order_num)
                    lockseat.save()
                    seatordered = Seats.objects.filter(seat_num=lockseat.lock_seatnum).first()
                    orderseats.append(seatordered)
            return render(request, '支付.html',
                          context={'film': film, 'skd': skd, 'seats': orderseats, 'hall': hall, 'cinema': cinema, 'order': order})
    else:
        return render(request, '支付.html',
                      context={'title': '支付'})


def test(request):
    user = Users.objects.filter(user_phone='122').first()
    print(user.user_gender)
    return HttpResponse('ok')


# 找回密码
def sendmail(request):
    send_mail('标题', '内容', settings.EMAIL_FROM, [])
