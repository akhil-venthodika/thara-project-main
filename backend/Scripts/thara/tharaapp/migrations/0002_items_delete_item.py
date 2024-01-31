# Generated by Django 4.2.7 on 2023-11-13 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tharaapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('brand', models.CharField(max_length=100)),
                ('uses', models.TextField(help_text='Enter each use on a new line, separating them with line breaks.')),
                ('Ingredients', models.TextField()),
                ('image', models.ImageField(default=None, null=True, upload_to='products/img')),
            ],
        ),
        migrations.DeleteModel(
            name='Item',
        ),
    ]