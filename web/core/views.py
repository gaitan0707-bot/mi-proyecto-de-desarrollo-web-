<<<<<<< HEAD
from django.shortcuts import render
from .services.catalog_service import ProductService

def product_list(request):
    service = ProductService()
    products = service.get_all()
=======
from django.shortcuts import render
from .services.catalog_service import ProductService

def product_list(request):
    service = ProductService()
    products = service.get_all()
>>>>>>> 21b8c25215af40d5fb9ac3e7d7312aed9301b74b
    return render(request, "index.html", {"products": products})