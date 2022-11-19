import json
import requests


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
    #with open('backend/attractions.json', 'w') as f:
    #    json.dump(responseDict, f, indent=4)
    
    print(responseDict)
    
    attractionList = []
    for dict in responseDict["results"]:
        attraction = {
            "AttractionName": dict["name"],
            "AttractionLocationLat": dict["geometry"]["location"]["lat"],
            "AttractionLocationLng": dict["geometry"]["location"]["lng"],
            "AttractionDescription": "Ein super Ort zum Laden und spaß haben, hihi!!",
            "ChargerLocationLat": "None",
            "ChargerLocationLng": "None"
            
            # attractionImageURL
            # proposedCharingTime
            # chargePercentAfterCharing
            # moneySavedFromDoNotGetPenalty  
        }
        attractionList.append(attraction)

    print(attractionList)
    return attractionList


def CalculateDistanceAndDrop(attractionList: list):
    pass





if __name__ == "__main__":
    latitude = "48.137154" 
    longitude = "11.576124"
    get_attractions(latitude=latitude, longitude=longitude)
