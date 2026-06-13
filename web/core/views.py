from django.shortcuts import render
from .services.catalog_service import ProductService

def product_list(request):
    service = ProductService()
    products = service.get_all()
    return render(request, "index.html", {"products": products})