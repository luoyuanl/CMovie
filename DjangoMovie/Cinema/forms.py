from django import forms


# 登录管理员账号密码
class UserForm(forms.Form):
    username = forms.CharField(label='用户名',
                               max_length=20,
                               min_length=3,
                               error_messages={
                                   'required': '必须输入用户名',
                                   'max_length': '用户名最大20字符',
                                   'min_length': '用户名最小3个字符',
                               }
                               )
    password = forms.CharField(label='密码',
                               max_length=20,
                               min_length=3,
                               widget=forms.PasswordInput(
                                   attrs={
                                       'placehold': '请输入密码',
                                       'class': 'password'
                                   }
                               ),
                               error_messages={
                                   'placehold': '必须输入密码',
                                   'max_length': '密码最大20字符',
                                   'min_length': '密码最小3个字符',
                               }
                               )

class Poster(forms.Form):
    poster = forms.ImageField(label='海报',
                              error_messages={
                                  'required':'海报必须上传'
                              }
                              )
