import hashlib
from django.db import models


# 用户表
# 用户id，用户名，密码，昵称，性别，生日，个性签名，头像，手机号，邮箱，注册日期
class Users(models.Model):
    # 自定义性别
    gender = ((1, '保密'), (2, '男'), (3, '女'))
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=60)
    user_password = models.CharField(max_length=128)
    user_nickname = models.CharField(max_length=60, blank=True)
    user_gender = models.IntegerField(choices=gender, default=1)
    user_birthday = models.DateField(null=True)
    user_signature = models.CharField(max_length=200, blank=True)
    user_photo = models.ImageField(max_length=256, blank=True)
    user_phone = models.CharField(max_length=20, unique=True)
    user_email = models.CharField(max_length=100, unique=True)
    user_regtime = models.DateTimeField(auto_now_add=True)

    # user_hobby = models.CharField(max_length=200)
    # user_type = models.CharField(max_length=30)
    # user_job1 = models.CharField(max_length=30)    # 大行业
    # user_job2 = models.CharField(max_length=30)  # 细分行业

    @property
    def password(self):
        return self.user_password

    @password.setter
    def password(self, value):
        self.user_password = hashlib.sha1(value.encode('utf8')).hexdigest()


# 评论表
# 评论id，影片id，评论内容，评论人id，评论日期,点赞数,是否显示
class FilmComments(models.Model):
    comment_id = models.CharField(max_length=20)  # 影片id+评论时间
    comment_filmid = models.IntegerField(null=False)  # 影片名，对应影片表
    comment_content = models.CharField(max_length=3000)
    comment_userid = models.IntegerField  # 评论人，对应用户表
    comment_datetime = models.DateTimeField
    comment_likenum = models.IntegerField
    comment_isdel = models.IntegerField
