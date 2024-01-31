# Generated by Django 4.1.7 on 2023-12-19 07:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tharaapp', '0010_company_email_alter_brand_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='brand',
            name='email',
            field=models.CharField(default=None, max_length=255),
        ),
        migrations.AlterField(
            model_name='brand',
            name='name',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]