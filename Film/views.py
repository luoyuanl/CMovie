from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'index.html')


def top100(request):
    return render(request, 'index.html')
