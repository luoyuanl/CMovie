from django.shortcuts import render, redirect
from django.urls import reverse

from User.models import Users


# 主页
def index(request):
    # 右上角用户登陆位置显示request.session['username'],为手机号
    username = request.session.get('username')
    return render(request, 'common/new_file.html', context={'data': username})


# 注册
def register(request):
    if request.method == 'GET':
        return render(request, 'index.html')
    else:
        phone = request.POST.get('mobile')
        user = Users.objects.filter(Users.user_phone == phone).first()
        if user:
            return render(request, 'common/new_file.html', context={'msg': '用户已存在'})
        else:
            Users.register(request)
            request.session['username'] = phone
            return render(request, 'index.html')


# 登录
def login(request):
    if request.method == 'POST':
        phone = request.POST.get('mobile')
        password = request.POST.get('password')
        if Users.checklogin(phone, password):
            # 写入cookie
            # response = redirect(reverse('user:index'))
            # response.set_cookie('username', phone, max_age=MAXAGE)
            # 写入session
            request.session['username'] = phone
            return render(request, '影片列表.html')
        else:
            return render(request, 'index.html', context={'msg': '用户名或密码错误'})
    else:
        return render(request, '登录.html')


# 退出登录
def logout(request):
    response = redirect(reverse('user:index'))
    # 清除cookie
    # response.delete_cookie('user_phone')

    # 清除session
    request.session.flush()
    return response


# 修改个人信息
def userinfo(request):
    pass


# 查看个人订单
def userorder(request):
    pass


# 订票
def orderticket(request):
    if request.method == 'GET':
        return render(request, '选座.html')
    else:
        pass


# 支付
def payment(request):
    pass
