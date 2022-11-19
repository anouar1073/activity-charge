import requests
import json

# https://developers.google.com/maps/documentation/places/web-service/photos

apiKey = "AIzaSyBYcHDCj5i_pP2M5s37MbiQRMHNdRyJy6U"
photo_reference = "AW30NDyhKqoi9M9DKpGwteyiY29HXeC4RlAmSWcgijDnpJn5EduPcg6kBDDMqxE75mD9O9DES4U-xifN1itlaV_7GhIsMC84iWDhk181cgAjm2DWTeyJ7Z2HkyKJwr5N22cWbt-OF-2XsI6BOCQPlnG3i_flTGK_HxwTl5-q86mjmAJB4KX8"

url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" + photo_reference + "&key=" + apiKey


print(url)
# URL liefert Foto!!
