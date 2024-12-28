import http.client
import json

# Fetch data using http.client
conn = http.client.HTTPSConnection("dummyjson.com")
conn.request("GET", "/products")
response = conn.getresponse()

if response.status == 200:
    data = json.loads(response.read().decode())
    # Extracting all unique brands
    product_brands = set()  # Set to store unique brands
    for product in data.get("products", []):
        brand = product.get("brand")  # Assuming 'brand' is the field for product brand
        if brand:
            product_brands.add(brand)  # Add brand to the set if it exists
    
    product_brands_list = sorted(product_brands)  # Sorting the brands
    print("Product Brands:", product_brands_list)
else:
    print(f"Error: Unable to fetch data. Status code {response.status}")
