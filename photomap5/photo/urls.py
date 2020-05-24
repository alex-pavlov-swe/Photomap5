from rest_framework import routers
from .api import PhotoViewSet

router = routers.DefaultRouter()

router.register('api/photo', PhotoViewSet, 'photo')

urlpatterns = router.urls
