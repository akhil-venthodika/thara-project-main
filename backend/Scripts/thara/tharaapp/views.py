from rest_framework import viewsets
from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.pagination import PageNumberPagination
from .serializers import TharaSerializer,CompanySerializer, BrandSerializer,ContactSerializer,CVSerializer
from .models import Item,Company, Brand,DMContact,CVUpload
from django.shortcuts import render

def front(request):
    context = { }
    return render(request, "index.html", context)

class TharaPagination(PageNumberPagination):
    page_size = 10  

class TharaView(viewsets.ModelViewSet):
    serializer_class = TharaSerializer
    queryset = Item.objects.all()
    pagination_class = TharaPagination  

class CompanyView(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class BrandView(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class ItemListView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = TharaSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = TharaSerializer

class ContactView(viewsets.ModelViewSet):
    queryset = DMContact.objects.all()
    serializer_class = ContactSerializer
    
class CVView(viewsets.ModelViewSet):
    queryset = CVUpload.objects.all()
    serializer_class = CVSerializer
    parser_classes = [MultiPartParser, FormParser]  

    def perform_create(self, serializer):
        serializer.save(cv_file=self.request.data.get('cv_file'))