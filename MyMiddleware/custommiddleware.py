import sys
from django.shortcuts import redirect
from django.urls import reverse
from django.http import HttpResponse, JsonResponse
from django.utils.deprecation import MiddlewareMixin
from django.views.debug import technical_500_response


class CustomeMiddleware(MiddlewareMixin):
    def process_request(selfs, request):
        print('CustomeMiddleware')

    def process_response(self, request, response):
        if isinstance(response, (list, dict)):
            return JsonResponse(response)
        elif isinstance(response, HttpResponse):
            return response

    def process_exception(self, request, exception):
        ip = request.META.get('REMOTE_ADDR')
        if ip == '127.0.0.1':
            return technical_500_response(request, *sys.exc_info())
        return redirect(reverse('film:index'))
