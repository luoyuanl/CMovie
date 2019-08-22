from datetime import date
from django.core.paginator import Paginator
from django.db.models import Q
from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from Cinema.models import Cinemas, Schedules, Halls, Seatlocks, Seats
from Film.models import Films

# 首页
from User.models import Users


def index(request):
    # 正在热映
    films_showing = Films.objects.filter(film_status=0).all()[0:8]
    showing_count = Films.objects.filter(film_status=0).all().count()
    # 即将上映
    films_coming = Films.objects.filter(film_status=1).all()[0:8]
    coming_count = Films.objects.filter(film_status=1).all().count()
    # 热播电影
    films_hot1 = Films.objects.filter().order_by('-filmpf__total_pf').first()
    films_hot = Films.objects.filter().order_by('-filmpf__total_pf').all()[1:7]
    # 今日票房
    films_pf1 = Films.objects.filter(film_status=0).order_by('-filmpf__daily_pf').first()
    films_pf = Films.objects.filter(film_status=0).order_by('-filmpf__daily_pf').all()[1:10]
    # 最受期待
    films_want1 = Films.objects.filter(film_status=1).order_by('-filmpf__film_want').first()
    films_want23 = Films.objects.filter(film_status=1).order_by('-filmpf__film_want').all()[1:3]
    films_want = Films.objects.filter(film_status=1).order_by('-filmpf__film_want').all()[3:10]
    # top100
    films_rank1 = Films.objects.all().order_by('-filmpf__film_rating').first()
    films_rank = Films.objects.all().order_by('-filmpf__film_rating').all()[1:10]
    # session
    username = request.session.get('username')
    return render(request, '首页1.html', context={
        'title': '首页',
        'films_showing': films_showing,
        'showing_count': showing_count,
        'films_coming': films_coming,
        'coming_count': coming_count,
        'films_hot1': films_hot1,
        'films_hot': films_hot,
        'films_pf1': films_pf1,
        'films_pf': films_pf,
        'films_want1': films_want1,
        'films_want23': films_want23,
        'films_want': films_want,
        'films_rank1': films_rank1,
        'films_rank': films_rank,
        'username': username,
    })


# 榜单
def ranking(request, cid=1):
    cid = int(cid)
    global films
    navs = ['热映口碑榜', '最受期待榜', '国内票房榜', 'TOP100榜']
    if cid == 1:
        films = Films.objects.filter(film_status=0).order_by('-filmpf__total_pf').all()[0:10]
    elif cid == 2:
        films = Films.objects.filter(film_status=1).order_by('-filmpf__film_want').all()[0:11]
    elif cid == 3:
        films = Films.objects.filter().order_by('-filmpf__total_pf').all()[0:10]
    elif cid == 4:
        films = Films.objects.all().order_by('-filmpf__film_rating').all()
    return render(request, '榜单-热映口碑榜1.html', context={
        'title': '榜单',
        'films': films,
        'date': date.today(),
        'cid': cid,
        'navs': navs,
    })


# 影片列表
def filmlist(request, cid=0, ftype=0, area=0, year=0, sort=1):
    cid = int(cid)
    ftype = int(ftype)
    area = int(area)
    year = int(year)
    sort = int(sort)
    global films
    navs = ['正在热映', '即将上映', '经典影片']
    types = ['全部', '爱情', '喜剧', '动画', '剧情', '恐怖', '惊悚', '科幻', '动作', '悬疑', '犯罪', '冒险', '战争', '奇幻', '运动', '家庭', '古装', '武侠',
             '西部', '历史', '传记', '歌舞', '黑色电影', '短片', '纪录片', '其他']
    areas = ['全部', '大陆', '中国香港', '中国台湾', '泰国', '印度', '法国', '英国', '俄罗斯', '意大利', '西班牙', '德国', '波兰', '澳大利亚', '伊朗', '其他']
    years = ['全部', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '更早']

    # 按上映状态筛选
    if cid == 2:
        films = Films.objects.all()
    else:
        films = Films.objects.filter(film_status=cid).all()
    # 按影片类型筛选
    if ftype != 0:
        films = films.filter(
            Q(filmdetail__film_type1=ftype) | Q(filmdetail__film_type2=ftype) | Q(filmdetail__film_type3=ftype) | Q(
                filmdetail__film_type4=ftype)).all()
    # 按拍摄国家筛选
    if area != 0:
        films = films.filter(filmdetail__film_country=areas[area]).all()
    # 按上映年份筛选
    if year != 0:
        films = films.filter(film_releasdate__year=years[year]).all()
    # 按想看数筛选
    if sort == 1:
        films = films.order_by('-filmpf__film_want').all()
    # 按上映日期筛选
    elif sort == 2:
        films = films.order_by('-film_releasdate').all()
    # 按评分筛选
    else:
        films = films.order_by('-filmpf__film_rating').all()
    return render(request, '电影-正在热映1.html', context={
        'title': '电影',
        'navs': navs, 'cid': cid,
        'types': types, 'ftype': ftype,
        'areas': areas, 'area': area,
        'years': years, 'year': year,
        'sort': sort, 'films': films
    })
    # return render(request, '电影-正在热映1.html', locals())


# 影片详情
def filmdetail(request, filmid):
    film = Films.objects.filter(film_id=filmid).first()
    return render(request, '电影详情1.html', context={'title': '影片详情',
                                                  'film': film})


# 影院列表
def cinemalist(request):
    pass


@csrf_exempt
# 展示场次
def schedule(request, filmid):
    filmid = int(filmid)
    cinema = Cinemas.objects.filter(cinema_id=1).first()
    film1 = Films.objects.filter(film_id=filmid).first()
    films = Films.objects.filter(film_status=0).all()
    skds = Schedules.objects.filter(skd_filmid=filmid).all()
    return render(request, '场次选择1.html',
                  context={'title': '选座', 'film1': film1, 'cinema': cinema, 'films': films, 'skds': skds,
                           'filmid': filmid})


@csrf_exempt
# 选座位
def seat(request, skd_id):
    skd = Schedules.objects.filter(skd_id=skd_id).first()
    film = Films.objects.filter(film_id=skd.skd_filmid).first()
    hall = Halls.objects.filter(hall_id=skd.skd_hallid).first()
    cinema = Cinemas.objects.filter(cinema_id=1).first()
    hall_rows = [i for i in range(1, hall.hall_rows + 1)]
    hall_cols = [i for i in range(1, hall.hall_cols + 1)]
    seats = Seats.objects.filter(seat_ofhallid=hall.hall_id).all()
    unlocks = Seatlocks.objects.filter(lock_type=0).all()
    locks = Seatlocks.objects.filter(~Q(lock_type=0)).all()
    locksarr = [i.lock_seatnum for i in locks]
    user = Users.objects.filter(user_phone=request.session['username']).first()
    # request.session['filmname'] = film.film_namech
    # request.session['hall'] = hall.hall_name
    # request.session['cinema'] = cinema.cinema_name
    # date = str(skd.skd_date)
    # request.session['date'] = date
    # time = str(skd.skd_starttime)
    # request.session['time'] = time
    # 提交座位，验证是否被锁定
    if request.method == "POST":
        orderseats = request.POST.getlist('arr')
        for i in orderseats:
            i = int(i.strip('seat'))
            seat = Seatlocks.objects.filter(lock_type=0, lock_seatnum=i).first()
            lockids = []
            # 选座中途，有别的数据插入数据库
            if seat:
                render(request, '选座1.html', locals())
            # 正常提交，在锁定表插入数据
            else:
                seatlocks = []
                for i in orderseats:
                    i = int(i.strip('seat'))
                    lockseat = Seatlocks(lock_type=1, lock_seatnum=i, lock_skdid=skd.skd_id)
                    lockseat.save()
                    seatid = Seats.objects.filter(seat_num=i).first()
                    seatlocks.append(seatid)
                # print(len(orderseats))
                # prices = skd.skd_price * len(orderseats)
                # print(prices)
                # request.session['prices'] = prices
            return render(request, '支付.html', locals())
    return render(request, '选座1.html', locals())


# 搜索
def search(request):
    pass


def test(request):
    hall = Halls.objects.filter(hall_id=1).first()
    seatnum = 0
    for r in range(1, hall.hall_rows):
        for c in range(1, hall.hall_cols):
            seatnum += 1
            seat = Seats(seat_colid=c, seat_rowid=r, seat_ofhallid=hall.hall_id, seat_num=seatnum)
            seat.save()
    return HttpResponse('ok')


# 分页
def list_page(request, page='1'):
    paginator = Paginator(user, COUNTOFPAGE)
    pager = paginator.page(int(page))
    pager.page_range = paginator.page_range
    return render(request, '', {'pager': pager})
