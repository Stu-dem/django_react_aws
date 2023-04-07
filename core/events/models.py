from django.db import models

# Create your models here.


class Tag(models.Model):
    name = models.CharField(max_length=255, blank=False)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name}"


class Event(models.Model):
    name = models.CharField(max_length=255, blank=False)
    description = models.TextField(blank=False)
    date_time = models.DateTimeField(blank=False)
    tag = models.ManyToManyField(Tag, blank=False)
    image_url = models.URLField(blank=True)

    def __str__(self):
        return f"{self.name} - {self.date_time}"
