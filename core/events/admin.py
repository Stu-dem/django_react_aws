from django.contrib import admin

# Register your models here.
from core.events.models import Tag, Event

# Register your models here.

admin.site.register(Tag)
admin.site.register(Event)
