from django.db import models


# 影片概况
# 影片id，中文片名,上映日期，上映状态，主演123，海报路径，评分，导演
class Films(models.Model):
    fstatus = ((0, '正在热映'), (1, '即将上映'), (2, '未上映'))

    film_id = models.AutoField(primary_key=True)
    film_namech = models.CharField(max_length=300)
    film_releasdate = models.DateField(blank=True, null=True)  # 上映日期
    film_status = models.IntegerField(choices=fstatus, default=2)
    film_actor1 = models.CharField(max_length=60, blank=True, null=True)  # 与演员表对应
    film_actor2 = models.CharField(max_length=60, blank=True, null=True)
    film_actor3 = models.CharField(max_length=60, blank=True, null=True)
    film_photo = models.ImageField(upload_to='filmphoto', blank=True, null=True)  # 海报路径，与图集对应
    film_director = models.CharField(max_length=60, blank=True, null=True)  # 导演

    # 展示影片概况
    def __str__(self):
        return '{},{}'.format(self.film_id, self.film_namech)


# 影片详情
# 英文片名，影片简介，影片类型1234，影片时长，拍摄国家，语言版本12
class FilmsDetail(models.Model):
    # 定义类型
    ftype = (
        (1, '爱情'), (2, '喜剧'), (3, '动画'), (4, '剧情'), (5, '恐怖'),
        (6, '惊悚'), (7, '科幻'), (8, '动作'), (9, '悬疑'), (10, '犯罪'),
        (11, '冒险'), (12, '战争'), (13, '奇幻'), (14, '运动'), (15, '家庭'),
        (16, '古装'), (17, '武侠'), (18, '西部'), (19, '历史'), (20, '传记'),
        (21, '歌舞'), (22, '黑色电影'), (23, '短片'), (24, '纪录片'), (25, '其他')
    )

    filmdetail_id = models.AutoField(primary_key=True)
    film_nameen = models.CharField(max_length=300, blank=True, null=True)
    film_intro = models.CharField(max_length=3000, blank=True, null=True)
    film_type1 = models.IntegerField(choices=ftype, blank=True, null=True)
    film_type2 = models.IntegerField(choices=ftype, blank=True, null=True)
    film_type3 = models.IntegerField(choices=ftype, blank=True, null=True)
    film_type4 = models.IntegerField(choices=ftype, blank=True, null=True)
    film_duration = models.IntegerField(blank=True, null=True)  # 时长
    film_country = models.CharField(max_length=200, blank=True, null=True)
    film_language1 = models.CharField(max_length=20, blank=True, null=True)
    film_language2 = models.CharField(max_length=20, blank=True, null=True)
    film = models.OneToOneField(to=Films, on_delete=models.CASCADE,db_column='film_id',related_name='filmdetail')
    # 函数

    # 展示影片详细信息


# 票房表
class Filmpf(models.Model):
    # 票房id，所属电影id，总票房，今日票房，电影评分，评分人数，想看数
    filmpf_id = models.AutoField(primary_key=True)
    total_pf = models.IntegerField(blank=True, null=True)
    daily_pf = models.IntegerField(blank=True, null=True)
    film_rating = models.FloatField(blank=True)  # 电影评分
    film_ratingcount = models.IntegerField(blank=True)  # 评分人数
    film_want = models.IntegerField(default=0,blank=True)
    film = models.OneToOneField(to=Films, on_delete=models.CASCADE,db_column='film_id',related_name='filmpf')


class Category(models.Model):
    cgy_id = models.AutoField(primary_key=True)
    cgy_pid = models.IntegerField(default=0)
    cgy_name = models.CharField(max_length=30)

# 评论表
class FilmComments(models.Model):
    # 评论id，影片id，评论内容，评论人id，评论日期,点赞数,是否显示
    comment_id = models.CharField(max_length=20)  # 影片id+评论时间
    filmid = models.IntegerField(null=False)  # 影片名，对应影片表
    comment_content = models.CharField(max_length=3000)
    comment_userid = models.IntegerField(null=True)  # 评论人，对应用户表
    comment_datetime = models.DateTimeField(auto_now_add=True)
    comment_likenum = models.IntegerField(default=0)
    comment_isdel = models.IntegerField(default=0)

# 演员表

# 海报表
