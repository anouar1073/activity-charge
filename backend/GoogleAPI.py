import json
import requests


def get_attractions(latitude: int, longitude: int):
    apiKey = "AIzaSyBYcHDCj5i_pP2M5s37MbiQRMHNdRyJy6U"
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
    
    attractionList = []
    for dict in responseDict["results"]:
        if "photos" in dict:
            attraction = {
                "AttractionName": dict["name"],
                "AttractionLocationLat": dict["geometry"]["location"]["lat"],
                "AttractionLocationLng": dict["geometry"]["location"]["lng"],
                "AttractionDescription": "Ein super Ort zum Laden und spass haben, hihi!!",
                "ChargerLocationLat": "10.000000",
                "ChargerLocationLng": "10.000000",
                "AttractionImageURL": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" + dict["photos"][0]["photo_reference"] + "&key=" + apiKey,
                "place_id": dict["place_id"]
                
                # attractionImageURL
                # proposedCharingTime
                # chargePercentAfterCharing
                # moneySavedFromDoNotGetPenalty  
            }
        else:
            attraction = {
                "AttractionName": dict["name"],
                "AttractionLocationLat": dict["geometry"]["location"]["lat"],
                "AttractionLocationLng": dict["geometry"]["location"]["lng"],
                "AttractionDescription": "Ein super Ort zum Laden und spass haben, hihi!!",
                "ChargerLocationLat": "10.000000",
                "ChargerLocationLng": "10.000000",
                "AttractionImageURL": "No Image",
                "place_id": dict["place_id"]
            }

        attractionList.append(attraction)

    return attractionList


def getWalkTime(attractionList: list, chargingDict: dict):
    maxWalkTime = 1000
    for k,v in chargingDict.items():
        final = []
        for idx,attraction in enumerate(attractionList):
            #print(v[0],v[1])

            attraction["ChargerLocationLat"] = v[0]
            attraction["ChargerLocationLng"] = v[1]
            apiKey = "AIzaSyBYcHDCj5i_pP2M5s37MbiQRMHNdRyJy6U"

            origin = str(attraction["AttractionLocationLat"]) + "%2C" + str(attraction["AttractionLocationLng"])
            dest = str(v[0])  + "%2C" + str(v[1])

            url = "https://maps.googleapis.com/maps/api/directions/json?origin="+ origin +"&destination="+ dest +"&key=" + apiKey + "&mode=walking"

            payload={}
            headers = {}
            response = requests.request("GET", url, headers=headers, data=payload)
            responseDict = json.loads(response.text)
            walkTime = int(responseDict["routes"][0]["legs"][0]["duration"]["value"])
            #print(walkTime)
            if(maxWalkTime > walkTime ):
                attraction["WalkTimeSeconds"] = str(responseDict["routes"][0]["legs"][0]["duration"]["value"])
            else:
                #attractionList.remove(attraction)
                pass
    
    return attractionList



def getDescription(attractionList: list):
    for attraction in attractionList:
        key = "AIzaSyBYcHDCj5i_pP2M5s37MbiQRMHNdRyJy6U"
        place_id = attraction["place_id"]

        url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + place_id + "&fields=formatted_address,name,geometry,editorial_summary&key=" + key

        payload={}
        headers = {}
        response = requests.request("GET", url, headers=headers, data=payload)
        responseDict = json.loads(response.text)

        #print(responseDict["result"])

        if "editorial_summary" in responseDict["result"]:
            attraction["AttractionDescription"] = str(responseDict["result"]["editorial_summary"]["overview"])
        else:
            attraction["AttractionDescription"] = "No description"
    
    return attractionList


if __name__ == "__main__":
    latitude = "48.137154" 
    longitude = "11.576124"
    get_attractions(latitude=latitude, longitude=longitude)
