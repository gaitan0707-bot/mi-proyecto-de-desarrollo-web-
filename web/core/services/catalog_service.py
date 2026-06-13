from ..infra.api_client import ProductApiClient
from ..domain.catalog_item import ProductItem

class ProductService:
    def __init__(self):
        self.client = ProductApiClient()

    def get_all(self):
        data = self.client.get_products()
        return [ProductItem(**item) for item in data]