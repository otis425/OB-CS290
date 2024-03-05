from flask import Flask, request
import random

app = Flask(__name__)

depth_milestones = [0,-50,-100,-200]

@app.route("/call_python", methods=["POST"])
def call_python():
    data = request.get_json()
    depth = int(data)
    fish = retrieve_fish_caught(depth)
    return fish


@app.after_request
def after_request(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "Content-Type,Authorization")
    response.headers.add("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
    return response


def retrieve_fish_caught(deepest_point) -> str:
    # this sets our depth to the last milestone
    for milestone in depth_milestones:
        if deepest_point > milestone: # if milestone is greater, end loop
            print(f"{deepest_point} is less than {milestone}")
            break
        deep_mile = milestone # sets depth to milestone
        print(f"Deepest point: {deepest_point}")
    # get fish dict
    with open("depths_to_fish.txt", "r") as file:
        fish_dict = eval(file.read())
    
    fish = random.choice(fish_dict[deep_mile])
    return fish


if __name__ == "__main__":
    app.run(port=5000)
