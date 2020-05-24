from rest_framework import serializers
from .models import Photo

# Photo Serializer


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'
