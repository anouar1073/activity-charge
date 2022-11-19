import requests
import json

#https://developers.google.com/maps/documentation/directions/get-directions#mode

apiKey = "AIzaSyBYcHDCj5i_pP2M5s37MbiQRMHNdRyJy6U"

latitude = "48.137154" 
longitude = "11.576124"
origin = latitude + "%2C" + longitude

latitude = "40.137154" 
longitude = "10.576124"
dest = latitude + "%2C" + longitude

url = "https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=" + apiKey + "&mode=walking"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

responsedict = json.loads(response.text)
print(responsedict["routes"][0]["legs"][0]["duration"]["value"])

import json
with open('backend/tests/times.json', 'w') as f:
    json.dump(json.loads(response.text), f, indent=4)

