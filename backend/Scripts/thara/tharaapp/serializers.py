from rest_framework import serializers
from .models import Item,Company, Brand,DMContact,CVUpload


class CompanySerial(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['name']

    def to_representation(self, instance):
        return instance.name

class BrandSerial(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['name']

    def to_representation(self, instance):
        return instance.name

class TharaSerializer(serializers.ModelSerializer):
 brand = BrandSerial()
 company = CompanySerial()
    
 class Meta:
        model = Item
        fields = '__all__'


class CompanySerializer(serializers.ModelSerializer):
 
 class Meta:
        model = Company
        fields = '__all__'
    

class BrandSerializer(serializers.ModelSerializer):
 company = CompanySerial()
 class Meta:
        model = Brand
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
  class Meta:
      model = DMContact
      fields='__all__'

class CVSerializer(serializers.ModelSerializer):
  class Meta:
      model = CVUpload
      fields='__all__'