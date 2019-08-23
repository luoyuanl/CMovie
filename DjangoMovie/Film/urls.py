from django.conf.urls import url
from Film import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^filmlist/$', views.filmlist, name='filmlist'),
    url(r'^filmdetail/$', views.filmdetail, name='filmdetail'),
    url(r'^cinemalist/$', views.cinemalist, name='cinemalist'),
    url(r'^schedule/$', views.schedule, name='schedule'),
    url(r'^seat/$', views.seat, name='seat'),
    url(r'^search/$', views.search, name='search'),
    url(r'^zzz/$',views.zzz,name='zzz')

]
