from rest_framework import routers
from core.user.viewsets import userViewSet
from core.auth.viewsets import RegisterViewSet, LoginViewSet, RefreshTokenViewSet
from core.events.viewsets import EventViewSet

router = routers.SimpleRouter()

router.register(r'user', userViewSet, basename='user')
router.register(r'auth/register', RegisterViewSet, basename='auth-register')
router.register(r'auth/login', LoginViewSet, basename='auth-login')
router.register(r'auth/refresh', RefreshTokenViewSet, basename='auth-refresh')
router.register(r'events', EventViewSet, basename='event')


urlpatterns = [
    *router.urls
]
