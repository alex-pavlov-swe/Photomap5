from django.db import models
from django.contrib.auth.models import User


class Photo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    url = models.CharField(max_length=200, null=False)
    userName = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    camera = models.CharField(max_length=50)
    focalLength = models.CharField(max_length=50)
    shutterSpeed = models.CharField(max_length=50)
    ISO = models.CharField(max_length=50)


class PhotoComment(models.Model):
    photo = models.ForeignKey(Photo, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=500)
    avatar = models.CharField(max_length=100)
    userName = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now_add=True)


class PhotoLike(models.Model):
    photo = models.ForeignKey(Photo, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
