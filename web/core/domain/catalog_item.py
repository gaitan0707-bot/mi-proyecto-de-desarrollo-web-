from dataclasses import dataclass

@dataclass
class ProductItem:
    id: int
    name: str
    description: str
    price: float