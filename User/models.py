import hashlib

from django.db import models


# 用户表
# 用户id，用户名，密码，昵称，性别，生日，个性签名，头像，手机号，邮箱，注册日期
class Users(models.Model):
    # 自定义性别
    gender = ((1, '保密'), (2, '男'), (3, '女'))

    user_id = models.AutoField(primary_key=True)
    # user_name = models.CharField(max_length=60,unique=True)
    user_password = models.CharField(max_length=128)
    user_nickname = models.CharField(max_length=60, blank=True)
    user_gender = models.IntegerField(choices=gender, default=1)
    user_birthday = models.DateField(blank=True)
    user_signature = models.CharField(max_length=200, blank=True)
    user_photo = models.ImageField(max_length=256, blank=True)
    user_phone = models.CharField(max_length=20, unique=True)
    user_email = models.CharField(max_length=100, blank=True)
    user_regtime = models.DateTimeField(auto_now_add=True)

    # 函数

    # 密码存成hash
    @property
    def password(self):
        return self.user_password

    @password.setter
    def password(self, value):
        self.user_password = hashlib.sha1(value.encode('utf8')).hexdigest()

    # 注册
    @classmethod
    def register(cls, request):
        user = Users.objects.create()
        user.user_phone = request.Get.get('mobile')
        user.password = request.Get.get('password')
        user.save()

    # 登录
    def login(self, request):
        if self.user_password == hashlib.sha1(request.Get.get('password').encode('utf8')).hexdigest():
            return True
        else:
            return False

    # 修改个人信息
    def changeinfo(self):
        pass

    # 订票
    def orderticket(self):
        pass

    # 支付
    def payorder(self):
        pass

    # 发表评论
    def comment(self):
        pass

    # 给评论点赞
    def point(self):
        pass

    # 给电影评分
    def mark(self):
        pass


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
