import requests
import os

class ProductApiClient:
    def __init__(self):
        self.base_url = os.getenv("API_BASE_URL", "http://localhost:3001")

    def get_products(self):
        response = requests.get(f"{self.base_url}/api/products")
        return response.json()