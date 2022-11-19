import requests

key = "AIzaSyBYcHDCj5i_pP2M5s37MbiQRMHNdRyJy6U"
place_id = "ChIJi-G-yfB1nkcRYzXiSdcGXKk"

url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" +place_id + "&fields=formatted_address,name,geometry,editorial_summary&key=" + key

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

"""
{
   "html_attributions" : [],
   "result" : {
      "editorial_summary" : {
         "language" : "en",
         "overview" : "Built in 1937, this fountain features a statue of the Roman god Neptune & a horse with a fish tail."
      },
"""