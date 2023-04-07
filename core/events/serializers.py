from rest_framework import serializers

from core.events.models import Event


class EventSerializer(serializers.ModelSerializer):
    """
        Registration serializer fore requests and user creation
    """

    tag = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='name'
    )

    class Meta:
        model = Event
        # List all the fields that can be included in a request or response
        fields = ['name', 'description', 'date_time', 'tag', 'image_url']
