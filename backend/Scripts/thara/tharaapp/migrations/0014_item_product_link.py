# Generated by Django 4.1.7 on 2024-01-10 21:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tharaapp', '0013_alter_brand_email_alter_company_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='product_link',
            field=models.URLField(default=None),
        ),
    ]