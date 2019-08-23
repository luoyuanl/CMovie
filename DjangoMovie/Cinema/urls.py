from django.conf.urls import url

from Cinema import views


urlpatterns = [
    # 管理员登录
    url(r'^login/$',views.login,name='login'),

    #　首页
    url(r'^index/$',views.index,name='index'),
    #　修改密码
    url(r'^pwd/$',views.pwd,name='pwd'),
    # 退出
    url(r'^out/$',views.out,name='out'),
    # 添加电影
    url(r'^movie_add/$',views.movie_add,name='movie_add'),
    # 排片
    url(r'^paipian/$',views.paipian,name='paipian'),
    # 电影展示
    url(r'^movie_list/$',views.movie_list,name='movie_list'),
    url(r'^movie_list/(\d+)/$',views.movie_list,name='movie_list1'),
    url(r'^movie_de/(\d+)/$',views.de,name='movie_de'),
    # 影厅展示
    url(r'^yingting_list/$',views.yingting_list,name='yingting_list'),
    url(r'^yingting_list/(\d+)/$',views.yingting_list,name='yingting_list1'),
    url(r'^yingting_de/(\d+)/$',views.yingting_de,name='yingting_de'),

    # 会员列表
    url(r'^user_list/$',views.user_list,name='user_list'),
    url(r'^user_list/(\d+)$',views.user_listde,name='user_list1'),
    url(r'^user_list/(\d+)$',views.user_listde,name='user_listde'),


    # 会员详细信息
    url(r'^user_view/$',views.user_view,name='user_view'),
    url(r'^user_view/(\d+)/$',views.user_view,name='user_view1'),


    # 订单管理
    url(r'^moviecol_list/$',views.moviecol_list,name='moviecol_list'),
    url(r'^moviecol_list/(\d+)/$',views.moviecol_list,name='moviecol_list1'),
    url(r'^moviecol_listde/(\d+)/$',views.moviecol_listde,name='moviecol_listde'),


    url(r'^preview_add/$',views.preview_add,name='preview_add'),
    url(r'^preview_list/$',views.preview_list,name='preview_list'),


]