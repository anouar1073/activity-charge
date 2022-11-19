import requests
import json

#https://developers.google.com/maps/documentation/directions/get-directions#mode

apiKey = "AIzaSyBYcHDCj5i_pP2M5s37MbiQRMHNdRyJy6U"

latitude = "48.14127879999999" 
longitude = "11.565233"
attraction = latitude + "%2C" + longitude

latitude = "48.249174" 
longitude = "11.653291"
charger = latitude + "%2C" + longitude

url = "https://maps.googleapis.com/maps/api/directions/json?origin="+ attraction +"&destination="+ charger +"&key=" + apiKey + "&mode=walking"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

responsedict = json.loads(response.text)
print(responsedict["routes"][0]["legs"][0]["duration"]["value"])

import json
with open('tests/times.json', 'w') as f:
    json.dump(json.loads(response.text), f, indent=4)

