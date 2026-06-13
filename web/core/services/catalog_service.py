<<<<<<< HEAD
from ..infra.api_client import ProductApiClient
from ..domain.catalog_item import ProductItem

class ProductService:
    def __init__(self):
        self.client = ProductApiClient()

    def get_all(self):
        data = self.client.get_products()
=======
from ..infra.api_client import ProductApiClient
from ..domain.catalog_item import ProductItem

class ProductService:
    def __init__(self):
        self.client = ProductApiClient()

    def get_all(self):
        data = self.client.get_products()
>>>>>>> 21b8c25215af40d5fb9ac3e7d7312aed9301b74b
        return [ProductItem(**item) for item in data]