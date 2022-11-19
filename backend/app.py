from flask import Flask, jsonify, request
import requests
import json

from GoogleAPI import get_attractions, getDescription, getWalkTime

app = Flask(__name__)


# !!! Flask run im APP.py VERZEICHNIS AUSFÜHREN!!!!

@app.route("/", methods=['GET']) # http://127.0.0.1:5000/?lat=48.137154&lng=11.576124
def postDataPara():

    ### How it Works: 
    # 1. Get Location --> Get attractions 
    # 2. Get Chargers next to attraction
    # 3. Check if Charger is < 5 Min form attraction
    # 4. return feed

    latitude = request.args.get('lat', default="48.137154")
    longitude = request.args.get('lng', default="11.576124")

    attractionList = get_attractions(latitude=latitude, longitude=longitude)
    chargingDict = fetchChargingStation(attractionList[2]["AttractionLocationLat"],attractionList[2]["AttractionLocationLng"],)
    attractionList = getWalkTime(attractionList, chargingDict)
    attractionList = getDescription(attractionList)
    
    return jsonify(attractionList)


def fetchChargingStation(latitude: float, longitude: float):
    params = {"latitude": latitude, "longitude": longitude, "countrycode": "DE", 
    "output": "json", "compact": True, "verbose": False, "maxresults": 1, "key": "38178c7e-c375-4b54-9a18-a82f088b03e3"}
    f = r'https://api.openchargemap.io/v3/poi/?'
    data = requests.get(f, params = params)
    a = data.text
    jsonData = json.loads(a)
    closeLocations = {}
    for i in jsonData:
        try:
            #print(i)
            closeLocations[i["AddressInfo"]["Title"]] = (i["AddressInfo"]["Latitude"],i["AddressInfo"]["Longitude"])
            #print(i["AddressInfo"]["Latitude"])
            #print(i["AddressInfo"]["Longitude"])

        except Exception:
            pass
    
    return closeLocations

"""
@app.route("/dataPara", methods=['POST']) # http://127.0.0.1:5000/dataPara?name=asdfg&time=1345
def postDataPara():
    # request.args liefert: The parsed URL parameters (the part in the URL after the question mark).
    name = request.args.get('name')
    time = request.args.get('address')
"""



if __name__ == "__main__":
    app.run(debug=True)
