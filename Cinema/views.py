import os

from django.http import HttpResponse
from django.shortcuts import render
from CMovie.settings import BASE_DIR

# 主页,营收情况
def index(request):
    pass


# 登录
def login(request):
    pass


# 修改影院信息
def cinemainfo(request):
    pass


# 查看影厅
def halls(request):
    pass


# 排片
def schedule(request):
    pass


# 查看订单
def orderlist(request):
    pass


# 订单详情
def orderdetail(request):
    pass

# 上传图片
def upload(request):
    path = request.path.split('/')
    path = os.path.join(BASE_DIR,path)
    with open(path) as fp:
        data = fp.read()
    return HttpResponse(data)