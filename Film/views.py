from django.shortcuts import render


# 首页
def index(request):
    return render(request, '正在热映 - 猫眼电影 - 一网打尽好电影【films】.html')


# 影片列表
def filmlist(request):
    return render(request,'')


# 影片详情
def filmdetail(request):
    pass


# 影院列表
def cinemalist(request):
    pass


# 选日期场次
def schedule(request):
    pass


# 选座位
def seat(request):
    pass

# 搜索
def search(request):
    pass
