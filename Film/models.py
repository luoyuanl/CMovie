from django.db import models


# 影片概况
# 影片id，中文片名,上映日期，上映状态，主演123，海报路径，评分，评分人数，导演
class Films(models.Model):
    fstatus = ((0, '正在热映'), (1, '即将上映'), (2, '未上映'))

    film_id = models.AutoField(primary_key=True)
    film_namech = models.CharField(max_length=300)
    film_releasdate = models.DateField(blank=True)  # 上映日期
    film_status = models.IntegerField(choices=fstatus)
    film_actor1 = models.CharField(max_length=60, blank=True)  # 与演员表对应
    film_actor2 = models.CharField(max_length=60, blank=True)
    film_actor3 = models.CharField(max_length=60, blank=True)
    film_photo = models.CharField(max_length=256)  # 海报路径，与图集对应
    film_diretor = models.CharField(max_length=60)  # 导演


# 影片详情,继承Films
# 英文片名，影片简介，影片类型1234，影片时长，拍摄国家，语言版本12
class FilmsDetail(Films):
    film_nameen = models.CharField(max_length=300, blank=True)
    film_intro = models.CharField(max_length=3000, blank=True)
    film_type1 = models.CharField(max_length=30)  # 与类型表对应
    film_type2 = models.CharField(max_length=30, blank=True)
    film_type3 = models.CharField(max_length=30, blank=True)
    film_type4 = models.CharField(max_length=30, blank=True)
    film_duration = models.IntegerField  # 时长
    film_country = models.CharField(max_length=200)
    film_language1 = models.CharField(max_length=20)
    film_language2 = models.CharField(max_length=20, blank=True)

    # 函数

    # 展示影片概况

    # 展示影片详细信息


# 演员表

# 海报表

# 票房表
class filmpf(models.Model):
    total_pf = models.IntegerField
    daily_pf = models.IntegerField
    film_rating = models.IntegerField(blank=True)  # 电影评分
    film_ratingcount = models.IntegerField(blank=True)  # 评分人数


class Category(models.Model):
    cgy_id = models.AutoField(primary_key=True)
    cgy_pid = models.IntegerField
    cgy_name = models.CharField(max_length=30)
