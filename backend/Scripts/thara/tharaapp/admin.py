from django.contrib import admin
from .models import Item
from .models import Company  
from .models import   Brand
from .models import DMContact
from .models import CVUpload



# Register your models here.
class TharaAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand','uses','Ingredients', 'image','product_link')
admin.site.register(Item,TharaAdmin)


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'website_link', 'phone_numbers')
    search_fields = ('name', 'website_link', 'phone_numbers')
@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('name', 'website_link', 'phone_numbers')
    search_fields = ('name', 'website_link', 'phone_numbers')

@admin.register(DMContact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message','created_at') 
    search_fields = ('name', 'email')
    def has_add_permission(self, request):
        return False
    
@admin.register(CVUpload)
class CVAdmin(admin.ModelAdmin):
    list_display = ('cv_file','upload_date') 
    search_fields = ('cv_file', 'cv_file')
    def has_add_permission(self, request):
        return False