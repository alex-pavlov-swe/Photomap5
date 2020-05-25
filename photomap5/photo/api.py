from .models import Photo
from rest_framework import viewsets, permissions
from .serializers import PhotoSerializer

# Photo viewset


class PhotoViewSet(viewsets.ModelViewSet):
    #queryset = Photo.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = PhotoSerializer

    def get_queryset(self):
        return Photo.objects.all()

    def perform_create(self, serializer):
        PhotoSerializer.save(user=self.request.user)
