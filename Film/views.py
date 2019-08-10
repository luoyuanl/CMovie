from django.core.paginator import Paginator
from django.shortcuts import render

from Film.models import Films, FilmsDetail, Filmpf


# 首页
def index(request):
    # 正在热映
    films_showing = Films.objects.filter(film_status=0).all()[0:8]
    showing_count = Films.objects.filter(film_status=0).all().count()
    # 即将上映
    films_coming = Films.objects.filter(film_status=1).all()[0:8]
    coming_count = Films.objects.filter(film_status=1).all().count()
    # 热播电影
    films_hot1 = Films.objects.filter().order_by('-filmpf__total_pf').all()[:1]
    films_hot = Films.objects.filter().order_by('-filmpf__total_pf').all()[1:7]
    # 今日票房
    films_pf1 = Films.objects.filter(film_status=0).order_by('-filmpf__daily_pf').all()[1]
    films_pf = Films.objects.filter(film_status=0).order_by('-filmpf__daily_pf').all()[1:9]
    # 最受期待
    films_want1 = Films.objects.filter(film_status=1).order_by('-filmpf__film_want').all()[0:1]
    films_want23 = Films.objects.filter(film_status=1).order_by('-filmpf__film_want').all()[1:3]
    films_want = Films.objects.filter(film_status=1).order_by('-filmpf__film_want').all()[3:9]
    # top100
    films_rank1 = Films.objects.all().order_by('-filmpf__film_rating').all()[:1]
    films_rank = Films.objects.all().order_by('-filmpf__film_rating').all()[1:9]
    # session
    username = request.session.get('username')
    return render(request, 'index.html', context={
        'title': '首页',
        'films_showing': films_showing,
        'showing_count': showing_count,
        'films_coming': films_coming,
        'coming_count': coming_count,
        'films_hot1': films_hot1,
        'films_hot': films_hot,
        'films_pf1': films_pf1,
        'films_pf': films_pf,
        'films_wangt1': films_want1,
        'films_wangt23': films_want23,
        'films_want': films_want,
        'films_rank1': films_rank1,
        'films_rank': films_rank,
        'username': username,
    })


# 榜单
def ranking(request):
    # 热映口碑榜
    films_hot = Films.objects.filter(film_status=0).order_by('-filmpf__total_pf').all()[0:9]
    # 最受期待榜
    films_want = Films.objects.filter(film_status=1).order_by('-filmpf__film_want').all()[0:11]
    # 票房榜
    films_pf = Films.objects.filter().order_by('-filmpf__total_pf').all()[0:9]
    # top100榜
    films_rank = Films.objects.all().order_by('-filmpf__film_rating').all()
    return render(request, 'index.html', context={
        'title': '榜单',
        'films_hot': films_hot,
        'films_want': films_want,
        'films_pf': films_pf,
        'films_rank': films_rank,
    })


# 影片列表
def filmlist(request):
    pass


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
    return render(request, 'index.html', context={'films': films})


# 搜索
def search(request):
    pass


# 分页
def list_page(request, page='1'):
    paginator = Paginator(user, COUNTOFPAGE)
    pager = paginator.page(int(page))
    pager.page_range = paginator.page_range
    return render(request, '', {'pager': pager})
