from datetime import datetime
import hashlib
import os

from django.core.paginator import Paginator
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect

# Create your views here.

from django.urls import reverse
from Cinema.forms import UserForm, Poster
from Cinema.models import CinemaAdmins, Schedules, Orders, Halls
from DjangoMovie.settings import MDEIA_ROOT, COUNTOFPAGE, PAGERANGE
from Film.models import Films, FilmsDetail, Filmpf


from User.models import Users

# 管理员登录界面
def login(request):
    form = UserForm()
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            name = request.POST.get("username")
            pd = request.POST.get("password")
            pd = hashlib.sha1(pd.encode('utf8')).hexdigest()
            users = CinemaAdmins.objects.all()
            for user in users:
                if user.Admin_name == name and pd == user.Admin_password:
                    request.session['usernameone'] = name
                    return render(request, 'admin/index.html', {'form': form})
                else:
                    error = '账号或者密码输入错误请重新输入'
                return render(request, 'admin/login.html', {'form': form, 'error': error})
    return render(request, 'admin/login.html', {'form': form})

# 父模板
def admin(request):
    username = request.session.get('username')
    print(username)
    return render(request, 'admin/admin1.html', {'username':username})


# 修改密码
def pwd(request):
    form = UserForm
    if request.method == "POST":
        form = UserForm(request.POST)
        oldpassword = request.POST.get("oldpassword")
        oldpassword = hashlib.sha1(oldpassword.encode('utf8')).hexdigest()
        users = CinemaAdmins.objects.all()
        for user in users:
            if oldpassword == user.Admin_password:
                newpassword = request.POST.get("password")
                newpassword = hashlib.sha1(newpassword.encode('utf8')).hexdigest()

                name = request.session.get('usernameone')
                u2 = CinemaAdmins.objects.get(Admin_name=name)  # 获取数据库中的数值 缓存中存储的名字
                if oldpassword == newpassword:
                    error1 = '原密码不能和新密码一致，请重新输入'
                    return render(request, 'admin/pwd.html', {'error1': error1})
                u2.Admin_password = newpassword
                u2.save()
                error2 = '修改成功'
                return render(request, 'admin/pwd.html', {'error2': error2})
            else:
                error = '原密码输入错误,请重新输入'
                return render(request, 'admin/pwd.html', {'error': error})
    return render(request, 'admin/pwd.html')


# 退出
def out(request):
    del request.session['usernameone']
    return redirect(reverse('cinema:login'))


# 营收 空
def index(request):
    return render(request, 'admin/index.html')


# 添加电影

def movie_add(request):
    # pos = Poster()
    if request.method == "POST":
        # 影片概况表 Films 中文片名,上映日期，上映状态，主演123，海报路径，评分，导演
        # 中文名称
        zwmc = request.POST.get('zwmc')
        # 上映时间
        sysj = request.POST.get('sysj')
        # 　上映状态
        syzt = request.POST.get('syzt')
        # 　主演
        zhuyan1 = request.POST.get('syzt')
        zhuyan2 = request.POST.get('zhuyan2')
        zhuyan3 = request.POST.get('zhuyan3')
        # 导演
        daoyan = request.POST.get('daoyan')
        # 　评分
        pingfen = request.POST.get('pingfen')

        # 文件上传
        file = request.FILES.get('poster')
        # 重写文件名
        filee = datetime.now().strftime("%Y_%m_%d_%H_%M_%S") + '.jpg'
        savePath = os.path.join(MDEIA_ROOT, filee)
        with open(savePath, 'wb') as f:
            f.write(file.read())

        # 写入数据库
        Films.objects.create(film_namech=zwmc,
                             film_releasdate=sysj,

                             film_status=syzt,

                             film_actor1=zhuyan1,
                             film_actor2=zhuyan2,
                             film_actor3=zhuyan3,
                             film_director=daoyan,
                             film_photo=file,
                             )

        # 影片详情 FilmsDetail 影片简介，影片类型1234，影片时长，拍摄国家，语言版本12

        # 影片简介
        ypjj = request.POST.get('ypjj')
        # 影片类型
        yplx1 = request.POST.get('yplx')
        yplx2 = request.POST.get('yplx')
        yplx3 = request.POST.get('yplx')
        yplx4 = request.POST.get('yplx')
        # 语言版本
        yylx1 = request.POST.get('yylx1')
        yylx2 = request.POST.get('yylx2')
        # 拍摄国家
        psgj = request.POST.get('psgj')
        # 影片时长
        ypsc = request.POST.get('ypsc')
        ypsc = int(ypsc)
        # 获取传入电影的id
        ids = Films.objects.filter(film_namech=zwmc).all()
        for id in ids:
            movie_id = id.film_id
        FilmsDetail.objects.create(
            film_intro=ypjj,
            film_type1=yplx1,
            film_type2=yplx2,
            film_type3=yplx3,
            film_type4=yplx4,
            film_language1=yylx1,
            film_language2=yylx2,
            film_country=psgj,
            film_duration=ypsc,
            film_id=movie_id,
        )
        # 票房表 Filmpf
        # 总票房
        zpf = request.POST.get('zpf')
        # 今日票房
        jrpf = request.POST.get('jrpf')
        if Filmpf.objects.create(film_id=movie_id,
                                 film_rating=pingfen,
                                 film_ratingcount=1,
                                 total_pf=zpf,
                                 daily_pf=jrpf,
                                 ):
            error = '添加成功'
            return render(request, 'admin/movie_add.html', {'error': error})
        else:
            error1 = '添加失败请重新添加'
            return render(request, 'admin/movie_add.html', {'error': error1})
    error2 = '添加失败请重新添加'
    return render(request, 'admin/movie_add.html', {'error': error2})


# 电影展示 分页
def movie_list(request, page=1):
    films = Films.objects.all()
    filmsdetails = FilmsDetail.objects.all()
    paginator = Paginator(films,COUNTOFPAGE)
    page = int(page)
    # 参数是当前的页码
    pager = paginator.page(page)
    # 自定义页码范围
    if paginator.num_pages > PAGERANGE:
        if page - 5 <= 0:
            my_page_range = range(1, 11)
        elif page + 4 > paginator.num_pages:
            my_page_range = range(paginator.num_pages - 9, paginator.num_pages + 1)
        else:
            my_page_range = range(page - 5, page + 5)
    else:  # 总页数小于PAGERANGE
        my_page_range = paginator.page_range
    # 页码序列
    pager.page_range = my_page_range
    return render(request, 'admin/movie_list .html', {'pager': pager, 'films': films, 'filmsdetails': filmsdetails})


# 电影展示删除
def de(request, id):
    if request.method == 'GET':
        # 取出同id相同的表里的数据 并删除
        flms = Films.objects.filter(film_id=id).all()
        fds = FilmsDetail.objects.filter(film_id=id).all()
        filmpfs = Filmpf.objects.filter(film_id=id).all()
        flms.delete()
        fds.delete()
        filmpfs.delete()
        return HttpResponseRedirect(reverse('cinema:movie_list'))
    return HttpResponseRedirect(reverse('cinema:movie_list'))


# 排电影
def paipian(request):
    if request.method == "POST":
        skd_date = request.POST.get('xzriqi')
        skd_starttime = request.POST.get('kssj')
        skd_endtime = request.POST.get('jsshijian')
        skd_hallid = request.POST.get('yingting')
        skd_price = request.POST.get('piaojia')
        ypm = request.POST.get('pianming')
        film = Films.objects.filter(film_namech=ypm).first()
        if film:
            id = film.film_id
            Schedules.objects.create(skd_filmid=id,
                                     skd_date=skd_date,
                                     skd_starttime=skd_starttime,
                                     skd_endtime=skd_endtime,
                                     skd_hallid=skd_hallid,
                                     skd_price=skd_price,
                                     )
            error1 = '完成'
            return render(request, 'admin/movie_paip.html', {'error1': error1})
        else:
            error = '没有该电影，请核实'
            return render(request, 'admin/movie_paip.html', {'error': error})
    return render(request, 'admin/movie_paip.html')


# 　影厅列表
def yingting_list(request, page=1):
    schedules = Schedules.objects.all()
    fi = Films.objects.all()
    halls = Halls.objects.all()
    paginator = Paginator(schedules,COUNTOFPAGE)
    page = int(page)
    # 参数是当前的页码
    pager = paginator.page(page)
    # 自定义页码范围
    if paginator.num_pages > PAGERANGE:
        if page - 5 <= 0:
            my_page_range = range(1, 11)
        elif page + 4 > paginator.num_pages:
            my_page_range = range(paginator.num_pages - 9, paginator.num_pages + 1)
        else:
            my_page_range = range(page - 5, page + 5)
    else:  # 总页数小于PAGERANGE
        my_page_range = paginator.page_range
    # 页码序列
    pager.page_range = my_page_range
    return render(request, 'admin/yingting_list.html', {'pager': pager, 'schedules': schedules, 'fi': fi ,'halls':halls})


# 排片展示删除
def yingting_de(request, id):
    if request.method == 'GET':
        # 取出同id相同的表里的数据 并删除
        schedules = Schedules.objects.filter(skd_id=id).all()
        schedules.delete()
        return HttpResponseRedirect(reverse('cinema:yingting_list'))
    return HttpResponseRedirect(reverse('cinema:yingting_list'))


# 会员列表
def user_list(request,page=1):
    users = Users.objects.all()
    paginator = Paginator(users, COUNTOFPAGE)
    page = int(page)
    # 参数是当前的页码
    pager = paginator.page(page)
    # 自定义页码范围
    if paginator.num_pages > PAGERANGE:
        if page - 5 <= 0:
            my_page_range = range(1, 11)
        elif page + 4 > paginator.num_pages:
            my_page_range = range(paginator.num_pages - 9, paginator.num_pages + 1)
        else:
            my_page_range = range(page - 5, page + 5)
    else:  # 总页数小于PAGERANGE
        my_page_range = paginator.page_range
    # 页码序列
    pager.page_range = my_page_range

    return render(request, 'admin/user_list.html', {'users': users,'pager':pager})




# 会员列表删除
def user_listde(request,id):
    if request.method == 'GET':
        users = Users.objects.filter(user_id=id).all()
        users.delete()
        error = '删除成功'
        return HttpResponseRedirect(reverse('cinema:user_list'),{'error':error})
    error1 = '删除失败'
    return HttpResponseRedirect(reverse('cinema:user_list'),{'error':error1})


# 会员详情
def user_view(request,id):
    if request.method =='GET':
        users = Users.objects.filter(user_id=id).all()
        for user in users:
            id = user.user_id
            name = user.user_nickname
            email = user.user_email
            phone = user.user_phone
            regtime = user.user_regtime
            signature = user.user_signature
            return render(request,'admin/user_view.html',
                          {'users':users,
                           'id':id,
                           'name':name,
                           'email':email,
                           'phone':phone,
                           'regtime':regtime,
                           'signature':signature,
                           })





# 　全部订单展示
def moviecol_list(request,page=1):
    orders = Orders.objects.all()
    schedules = Schedules.objects.all()
    films = Films.objects.all()
    halls = Halls.objects.all()

    paginator = Paginator(orders, COUNTOFPAGE)
    page = int(page)
    # 参数是当前的页码
    pager = paginator.page(page)
    # 自定义页码范围
    if paginator.num_pages > PAGERANGE:
        if page - 5 <= 0:
            my_page_range = range(1, 11)
        elif page + 4 > paginator.num_pages:
            my_page_range = range(paginator.num_pages - 9, paginator.num_pages + 1)
        else:
            my_page_range = range(page - 5, page + 5)
    else:  # 总页数小于PAGERANGE
        my_page_range = paginator.page_range
    # 页码序列
    pager.page_range = my_page_range

    return render(request, 'admin/moviecol_list.html', locals())


# 订单删除
def moviecol_listde(request,id):
    if request.method == 'GET':
        users = Users.objects.filter(user_id=id).all()
        users.delete()
        error = '删除成功'
        return HttpResponseRedirect(reverse('cinema:user_list'),{'error':error})
    error1 = '删除失败'
    return HttpResponseRedirect(reverse('cinema:user_list'),{'error':error1})






def preview_add(request):
    return render(request, 'admin/preview_add.html')


def preview_list(request):
    return render(request, 'admin/preview_list.html')


