from django.contrib.auth.hashers import make_password, check_password
from django.db import models


# 用户表
class Users(models.Model):
    # 自定义性别
    gender = ((1, '保密'), (2, '男'), (3, '女'))
    # 用户id，手机号(账号),密码，昵称，性别，生日，个性签名，头像，邮箱，注册日期
    user_id = models.AutoField(primary_key=True)
    user_phone = models.CharField(max_length=20, unique=True)
    user_password = models.CharField(max_length=128)
    user_nickname = models.CharField(max_length=60, blank=True)
    user_gender = models.IntegerField(choices=gender, default=1)
    user_birthday = models.DateField(blank=True, null=True)
    user_signature = models.CharField(max_length=200, blank=True)
    user_photo = models.ImageField(max_length=256, null=True)
    user_email = models.CharField(max_length=100, blank=True)
    user_regtime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{}----{}'.format(Users.user_phone, Users.user_password)

    # 密码存成hash
    @property
    def password(self):
        return self.user_password

    @password.setter
    def password(self, value):
        self.user_password = make_password(value)

    # 注册，写入数据库
    @staticmethod
    def register(request):
        user = Users(use_phone=request.POST.get('mobile'),
                     user_password=make_password(request.POST.get('password')))
        user.save()

    # 登录验证
    @classmethod
    def checklogin(cls, phone, password):
        # 按用户名查询
        user = cls.objects.filter(user_phone=phone).first()
        # if not user:
        #     # 没注册
        #     return False
        # if not check_password(password,user.user_password):
        #     # 密码错误
        #     return False
        # # 验证通过
        # return True
        return user and check_password(password, user.user_password)

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