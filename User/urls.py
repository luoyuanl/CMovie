from django.conf.urls import url
from User import views

urlpatterns = [
    # 注册
    url(r'^register/$', views.register, name='register'),
    # 发送手机验证码
    url(r'^sendsms/$', views.sendsms, name='sendsms'),
    # 密码登录
    url(r'^login/$', views.login, name='login'),
    # 手机验证码登录
    url(r'^phonelogin/$', views.phonelogin, name='phonelogin'),
    # 退出登录
    url(r'^logout/$', views.logout, name='logout'),
    # 修改个人信息
    url(r'^myinfo/$', views.myinfo, name='myinfo'),
    # 上传头像
    url(r'^upload/$', views.upload, name='upload'),
    # 查看我的订单
    url(r'^myorder/$', views.myorder, name='myorder'),
    # 查看单笔订单详情
    url(r'^orderdetail/(\d+)/$', views.orderdetail, name='orderdetail'),
    # 订票
    url(r'^orderticket/$', views.orderticket, name='orderticket'),
    # 支付
    url(r'^payment/$', views.payment, name='payment'),
    # test
    url(r'^test/$', views.test, name='test'),
]
r'show/(?P<name>[a-z]+)/(?P<age>\d+)/$'
