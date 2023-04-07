from rest_framework.permissions import AllowAny
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from core.events.serializers import EventSerializer
from core.events.models import Event

from datetime import datetime


class EventViewSet(viewsets.ModelViewSet):
    http_method_names = ('get')
    permission_classes = (AllowAny, )
    serializer_class = EventSerializer

    def get_queryset(self):
        return Event.objects.all().order_by('-date_time')
    pass

    def get_object(self):
        obj = Event.objects.get_objects_by_public_id(self.kwargs['pk'])
        self.check_object_permissions(self.request, obj)
        return obj
    pass

    @action(detail=False, methods=['GET'], url_path='upcoming')
    def get_upcoming_events(self, request):
        current_date = datetime.now()
        obj = Event.objects.filter(
            date_time__gt=current_date).order_by('date_time')[:4]
        serializer = EventSerializer(obj, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['GET'], url_path='past')
    def get_past_events(self, request):
        current_date = datetime.now()
        obj = Event.objects.filter(
            date_time__lt=current_date).order_by('date_time')
        serializer = EventSerializer(obj, many=True)
        return Response(serializer.data)
