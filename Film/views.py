from django.core.paginator import Paginator
from django.shortcuts import render

from Film.models import Films, FilmsDetail


# 首页


def index(request):
    # 正在热映
    films_showing = Films.objects.filter(film_status=0).all()[0:9]
    # 即将上映
    films_coming = Films.objects.filter(film_status=1).all()[0:9]
    # 热播电影
    films_hot = Films.objects.filter(film_status=1).order_by('film_rating').all()[0:9]
    # top100
    films_rank = Films.objects.all().order_by('film_rating')[0:11]
    # 票房排名
    return render(request, 'index.html', context={
        'title': '首页',
        'films_showing': films_showing,
        'films_coming': films_coming,
        'films_hot': films_hot,
        'films_rank': films_rank,
    })


# 影片列表
def filmlist(request):
    return render(request, '')


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


# 分页
def list_page(request, page='1'):
    paginator = Paginator(user, COUNTOFPAGE)
    pager = paginator.page(int(page))
    pager.page_range = paginator.page_range
    return render(request, '', {'pager': pager})
