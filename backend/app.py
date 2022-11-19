from flask import Flask
app = Flask(__name__)

# Flask run

class FeedEntry(): 
    def __init__(self, attractionName: str, attractionLocation: tuple, attractionDescription: str, chargerLocation: tuple):
        self.attractionName = attractionName
        self.attractionLocation = attractionLocation
        self.attractionDescription = attractionDescription
        self.chargerLocation = chargerLocation

        # attractionImageURL
        # proposedCharingTime
        # chargePercentAfterCharing
        # moneySavedFromDoNotGetPenalty  


@app.route('/')
def get_feed(latitude: int, longitude: int):

    # 1. Get Location --> Get attractions 
    # 2. Get Chargers next to attraction
    # 3. Check if Charger is < 5 Min form attraction
    # 4. return feed

    return '<h1>Hello from Flask & Docker</h2>'


if __name__ == "__main__":
    app.run(debug=True)