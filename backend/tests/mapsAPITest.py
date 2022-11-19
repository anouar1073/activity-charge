import requests
apiKey = "AIzaSyBYcHDCj5i_pP2M5s37MbiQRMHNdRyJy6U"

latitude = "48.137154" 
longitude = "11.576124"
origin = latitude + "%2C" + longitude

latitude = "48.137154" 
longitude = "10.576124"
dest = latitude + "%2C" + longitude

url = "https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=" + apiKey

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

import json
with open('backend/tests/times.json', 'w') as f:
    json.dump(json.loads(response.text), f, indent=4)

