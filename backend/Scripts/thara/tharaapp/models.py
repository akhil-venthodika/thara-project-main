from django.db import models

from django.db import models

class Company(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    email = models.CharField(max_length=255)
    description = models.TextField()
    website_link = models.URLField()
    phone_numbers = models.TextField(help_text='Enter each phone number on a new line, separating them with line breaks.')
    image = models.ImageField(upload_to='Company/img', null=True, default=None)

    def __str__(self):
        return self.name

class Brand(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True)
    email = models.CharField(max_length=255)
    description = models.TextField()
    website_link = models.URLField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    phone_numbers = models.TextField(max_length=255 ,help_text='Enter each use on a new line, separating them with line breaks.')
    image = models.ImageField(upload_to='Brand/img', null=True, default=None)

    def __str__(self):
        return self.name


# Create your models here.
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

    
class Item(models.Model):
    id = models.AutoField(primary_key=True)

    name = models.CharField(max_length=100)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    uses = models.TextField(help_text='Enter each use on a new line, separating them with line breaks.')
    Ingredients = models.TextField()
    product_link = models.URLField( default=None)


    def get_uses_list(self):
        return [use.strip() for use in self.uses.splitlines() if use.strip()]

    image = models.ImageField(upload_to='products/img', null=True, default=None)

    def __str__(self):
        return self.name
    
class DMContact(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class CVUpload(models.Model):
    
    cv_file = models.FileField(upload_to='cv_uploads/')
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
