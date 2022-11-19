import requests

# https://developers.google.com/maps/documentation/places/web-service/search-nearby#maps_http_places_nearbysearch-py


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

print(response.text)

import json
with open('backend/tests/attractions.json', 'w') as f:
    json.dump(json.loads(response.text), f, indent=4)



"""
rankby

Specifies the order in which results are listed. Possible values are:

    - prominence (default). 
        This option sorts results based on their importance. Ranking will favor prominent
        places within the set radius over nearby places that match but that are less prominent.
        Prominence can be affected by a place's ranking in Google's index, global popularity, 
        and other factors. When prominence is specified, the radius parameter is required.

    - distance. 
        This option biases search results in ascending order by their distance from the specified location.
         When distance is specified, one or more of keyword, name, or type is required and radius is disallowed.
"""