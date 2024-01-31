from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from tharaapp import views 
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'item', views.TharaView, 'item'),
router.register(r'item/<int:pk>', views.ItemViewSet,'item-detail'),
router.register(r'brand', views.BrandView, 'brand'),
router.register(r'company', views.CompanyView, 'company')
router.register(r'contact', views.ContactView, 'contact') 

router.register(r'CV', views.CVView, 'CVUpload')  



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)