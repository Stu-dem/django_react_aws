from rest_framework import routers
from core.user.viewsets import userViewSet
from core.auth.viewsets import RegisterViewSet, LoginViewSet, RefreshTokenViewSet

router = routers.SimpleRouter()

router.register(r'user', userViewSet, basename='user')
router.register(r'auth/register', RegisterViewSet, basename='auth-register')
router.register(r'auth/login', LoginViewSet, basename='auth-login')
router.register(r'auth/refresh', RefreshTokenViewSet, basename='auth-refresh')


urlpatterns = [
    *router.urls
]
