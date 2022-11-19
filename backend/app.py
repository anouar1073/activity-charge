from flask import Flask
import requests
import json

from AttractionAPI import get_attractions

app = Flask(__name__)

# Flask run

def get_attractions(latitude: int, longitude: int):
    apiKey = "AIzaSyBYcHDCj5i_pP2M5s37MbiQRMHNdRyJy6U"
    latitude = "48.137154" 
    longitude = "11.576124"
    location = latitude + "%2C" + longitude

    searchRadius = "50000" # in meters / max 50 000
    attractionType = "tourist_attraction" # gym / amusement_park / supermarket /   #https://developers.google.com/maps/documentation/places/web-service/supported_types
    keyword = "" # like google search

    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + location + "&radius=" + searchRadius + "&type="+ attractionType + "&keyword=" + keyword + "&key=" + apiKey

    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)


    responseDict = json.loads(response.text)
    with open('backend/attractions.json', 'w') as f:
        json.dump(responseDict, f, indent=4)
    
    print(responseDict)
    
    attractionList = []
    for dict in responseDict["results"]:
        attraction = {
            "AttractionName": "test",
            "AttractionLocation": "test",
            "AttractionDescription": "test",
            "ChargerLocation": "test"
            
            # attractionImageURL
            # proposedCharingTime
            # chargePercentAfterCharing
            # moneySavedFromDoNotGetPenalty  
        }
        attractionList.append(attraction)

    print(attractionList)


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
    # returns a list 
    # "AttractionName": "test",
    # "AttractionLocation": "test",
    # "AttractionDescription": "test",
    # "ChargerLocation": "test"
    attractionList = get_attractions(latitude=latitude, longitude=longitude)
    #fetchChargingStation(attractionList[])


    return '<h1>Hello from Flask & Docker</h2>'



if __name__ == "__main__":
    app.run(debug=True)