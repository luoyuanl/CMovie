from django import forms


class Films(forms.Form):
    film_namech = forms.CharField(label='中文名', required=True)
    film_nameen = forms.CharField(label='英文名'),
    film_releasdate = forms.DateField()
