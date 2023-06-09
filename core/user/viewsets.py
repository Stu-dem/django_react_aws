from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets

from core.user.serializers import UserSerializer
from core.user.models import User


class userViewSet(viewsets.ModelViewSet):
    http_method_names = ('patch', 'get')
    permission_classes = (IsAuthenticated, )
    serializer_class = UserSerializer

    def get_queryset(self):
        if self.request.user.is_superuser:
            return User.objects.all()
        return User.objects.exclude(is_superuser=True)
    pass

    def get_object(self):
        obj = User.objects.get_objects_by_public_id(self.kwargs['pk'])
        self.check_object_permissions(self.request, obj)
        return obj
    pass
