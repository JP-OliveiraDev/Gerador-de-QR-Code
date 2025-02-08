from django.urls import path
from .views import GenerateQrCode

urlpatterns = [
    path('generate/', GenerateQrCode.as_view(), name='generate-qr-code'),
]
