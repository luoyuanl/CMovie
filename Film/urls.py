from django.conf.urls import url
from Film import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^filmlist/$', views.filmlist, name='filmlist'),
    url(r'^flimlist/(?P<cid>\d+)/$', views.filmlist, name='filmlist'),
    url(r'^filmlist/(?P<cid>\d+)/(?P<ftype>\d+)/(?P<area>\d+)/(?P<year>\d+)/(?P<sort>\d+)/', views.filmlist,
        name='filmlist'),
    url(r'^filmdetail/(\d+)/$', views.filmdetail, name='filmdetail'),
    url(r'^cinemalist/$', views.cinemalist, name='cinemalist'),
    # url(r'^schedule/$', views.schedule, name='schedule'),
    url(r'^schedule/(?P<filmid>\d+)/$', views.schedule, name='schedule'),
    # url(r'^chooseskd/(\d+)/$',views.chooseskd,name='chooseskd'),
    url(r'^seat/(\d+)/$', views.seat, name='seat'),
    url(r'^search/$', views.search, name='search'),
    url(r'^ranking/$', views.ranking, name='ranking'),
    url(r'^ranking/(\d+)/$', views.ranking, name='ranking'),
    url(r'^test/$', views.test, name='test'),
]
