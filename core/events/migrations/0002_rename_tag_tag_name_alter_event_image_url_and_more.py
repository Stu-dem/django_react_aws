# Generated by Django 4.0.1 on 2023-04-05 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_events', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tag',
            old_name='tag',
            new_name='name',
        ),
        migrations.AlterField(
            model_name='event',
            name='image_url',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='tag',
            name='description',
            field=models.TextField(blank=True),
        ),
    ]
