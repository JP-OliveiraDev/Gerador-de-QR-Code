from django.db import models

class QRCode(models.Model):
    data = models.TextField()  
    created_at = models.DateTimeField(auto_now_add=True)  