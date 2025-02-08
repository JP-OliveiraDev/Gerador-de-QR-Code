from rest_framework.views import APIView
from rest_framework.response import Response 
import qrcode
from io import BytesIO
from django.http import HttpResponse

class GenerateQrCode(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data.get('text', '')
        
        if not data:
            return Response({'error': 'Texto ou URL é necessário'}, status=400)

        # Gerando QR Code
        img = qrcode.make(data)
        buffer = BytesIO()
        img.save(buffer)
        buffer.seek(0)

        # Retorna o QR Code como imagem PNG
        return HttpResponse(buffer, content_type="image/png")
