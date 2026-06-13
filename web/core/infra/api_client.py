<<<<<<< HEAD
import requests
import os

class ProductApiClient:
    def __init__(self):
        self.base_url = os.getenv("API_BASE_URL", "http://localhost:3001")

    def get_products(self):
        response = requests.get(f"{self.base_url}/api/products")
=======
import requests
import os

class ProductApiClient:
    def __init__(self):
        self.base_url = os.getenv("API_BASE_URL", "http://localhost:3001")

    def get_products(self):
        response = requests.get(f"{self.base_url}/api/products")
>>>>>>> 21b8c25215af40d5fb9ac3e7d7312aed9301b74b
        return response.json()