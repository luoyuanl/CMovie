from django.shortcuts import render
from User.models import Users


def index(request):
    return render(request, 'common/base.html')


# 注册
def register(request):
    if request.method == 'GET':
        return render(request, '注册 _ 猫眼电影.html')
    else:
        user = Users.objects.filter(user_phone=request.GET.get('mobile'))
        if user:
            return render(request, 'index.html', context={'msg': '用户已注册'})
        else:
            Users.register(request)

# 登录
def login(request):
    if request.method == 'GET':
        return render(request,'登录 _ 猫眼电影.html')
    else:
        user = Users.objects.filter(user_phone=request.GET.get('mobile'))
        if user:
            if user.login(request):
                return render(request, '正在热映 - 猫眼电影 - 一网打尽好电影【films】.html')
            else:
                return render(request, 'index.html', context={'msg': '密码错误'})
        else:
            return render(request, 'index.html', context={'msg': '用户未注册'})

# 订票
def orderticket(request):
    if request.method=='GET':
        return render(request,'选座 - 猫眼电影 - 一网打尽好电影.html')
    else:
        pass