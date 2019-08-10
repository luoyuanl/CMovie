from django.core.paginator import Paginator
from django.shortcuts import render

from Film.models import Films, FilmsDetail, Filmpf


# 首页

def index(request):
    # 正在热映
    films_showing = Films.objects.filter(film_status=0).all()[0:9]
    # 即将上映
    films_coming = Films.objects.filter(film_status=1).all()[0:9]
    # 热播电影
    films_hot = Films.objects.filter(film_status=1).order_by('film_rating').all()[0:9]
    # top100
    films_rank = Filmpf.objects.all().order_by()[0:11]
    # 票房排名
    films_pf = Films.objects
    return render(request, 'index.html', context={
        'title': '首页',
        'films_showing': films_showing,
        'films_coming': films_coming,
        'films_hot': films_hot,
        'films_rank': films_rank,
    })

# 榜单
def ranking(request):
    # 热映口碑榜
    rank_hot = Films.objects.filter(film_status=0).all()[0:11]
    # 票房榜
    rank_pf = Films.objects.filter(film_status=0).all()
    rank_pf_li = []
    for film in rank_pf:
        film_pf = Filmpf.objects.order_by('total_pf').all()[0:11]
        rank_pf_li.append([film,film_pf])
    rank_top = Films
    return render(request, 'index.html', context={
        'title': '榜单',
        'rank_hot': rank_hot,
        'rank_pf': rank_pf,

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
    films = Films.objects.filter(film_status=1).all()
    # 票房排名
    # for film in films:
    #     intro = film.detail.film_intro
    #     print(intro)
    return render(request, 'index.html', context={'films':films})



# 搜索
def search(request):
    pass


# 分页
def list_page(request, page='1'):
    paginator = Paginator(user, COUNTOFPAGE)
    pager = paginator.page(int(page))
    pager.page_range = paginator.page_range
    return render(request, '', {'pager': pager})
