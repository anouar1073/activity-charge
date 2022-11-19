from flask import Flask
import requests
import json

from backend.attractionAPI import get_attractions

app = Flask(__name__)

# Flask run

def fetchChargingStation(latitude: float, longitude: float):
    params = {"latitude": 48.252954, "longitude": 11.656477, "countrycode": "DE", 
    "output": "json", "compact": True, "verbose": False, "maxresults": 20, "key": "38178c7e-c375-4b54-9a18-a82f088b03e3"}
    f = r'https://api.openchargemap.io/v3/poi/?'
    data = requests.get(f, params = params)
    a = data.text
    jsonData = json.loads(a)
    for i in jsonData:
        try:
            #print(i)
            print(i["AddressInfo"]["StateOrProvince"])
            print(i["AddressInfo"]["Title"])
            print(i["AddressInfo"]["AddressLine1"])
            print(i["AddressInfo"]["Town"])
            print(i["AddressInfo"]["Postcode"])
            print(i["AddressInfo"]["StateOrProvince"], "\n")
        except Exception:
            pass


@app.route('/')
def get_feed(latitude: float, longitude: float):

    # 1. Get Location --> Get attractions 
    # 2. Get Chargers next to attraction
    # 3. Check if Charger is < 5 Min form attraction
    # 4. return feed

    latitude = "48.137154" 
    longitude = "11.576124"
    attractionList = get_attractions(latitude=latitude, longitude=longitude)
    # dsf

    # list cleaner 


    return '<h1>Hello from Flask & Docker</h2>'



if __name__ == "__main__":
    app.run(debug=True)