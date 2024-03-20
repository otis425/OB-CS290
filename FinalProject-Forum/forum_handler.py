import os
import json
from flask import Flask, jsonify, request
from flask_cors import CORS


# load all posts from the server into python memory before running
try:
    with open("posts.json", "r") as f:
        posts = json.load(f)
except FileNotFoundError:
    posts = []


app = Flask(__name__)
CORS(app, origins=["http://127.0.0.1:5500"])

# get forum details
@app.route("/front_page/forum_details", methods=["GET"])
def forum_details():
    total_posts = len(posts)
    comment_counts = 0
    for post in posts:
        post_id = post["id"]
        comments = retrieve_comments(post_id)
        if comments is not None:
            comment_counts += len(comments)
    post_to_comments = (total_posts, comment_counts)
    return jsonify(post_to_comments) 


# call for all front-page posts
@app.route("/front_page/front_page", methods=["GET"])
def retrieve_frontpage_posts():
    # return all the posts as JSON
    print("Retrieving posts for client")
    return jsonify(posts)


# call for all available profile pictures
@app.route("/front_page/profile_pictures", methods=["GET"])
def get_profile_pictures():
    image_files = os.listdir("profile_pictures")
    return jsonify(image_files)


# save a new post to server
@app.route("/front_page/save_post", methods=["POST"])
def save_post():
    data = request.get_json()
    # process the received data
    print("Saving post")
    post = {
        "id": len(posts),
        "username": data["username"],
        "icon": data["icon"],
        "date": data["date"],
        "time": data["time"],
        "title": data["title"],
        "content": data["content"],
        "comments": 0,
    }
    posts.append(post)
    save_posts()
    return jsonify({"message": "Post saved successfully"})


# save all posts to server
def save_posts():
    with open("posts.json", "w") as f:
        json.dump(posts, f)


# retrieve a post by id
@app.route("/post_page/<int:post_id>", methods=["GET"])
def retrieve_post(post_id):
    print("Retrieving post with id:", post_id)
    retrieved_post = posts[post_id]
    post_and_comm = [retrieved_post]
    comments = retrieve_comments(post_id)
    if comments is not None:
        for comment in comments:
            post_and_comm.append(comment)
    if retrieved_post["id"] == post_id:
        return jsonify(post_and_comm)
    return jsonify({"message": "Post not found"})

# retrieve a posts comments by id
def retrieve_comments(post_id):
    directory = f"post_page/post_comments/{post_id}"
    if os.path.isfile(directory):
        with open(f"post_page/post_comments/{post_id}", "r") as f:
            comments = json.load(f)
            return comments #list
    else:
        return None

# save a new comment to server
@app.route("/post_page/save_comment", methods=["POST"])
def save_comment():
    data = request.get_json()
    # process the received comment
    print("Saving comment")
    targetted_post = data["postid"]
    comment = {
        "username": data["username"],
        "icon": data["icon"],
        "date": data["date"],
        "time": data["time"],
        "content": data["content"],
    }

    directory = f"post_page/post_comments/{targetted_post}"
    if os.path.isfile(directory): #if the directory exists
        # retrieve the comments and write-over with the new comment
        with open(f"post_page/post_comments/{targetted_post}", "r") as f:
            comments = json.load(f)
            comments.append(comment)
        with open(f"post_page/post_comments/{targetted_post}", "w") as f:
            json.dump(comments, f)
            update_comment_count(targetted_post, len(comments))
    else:
        # create a new directory and save the comment
        with open(f"post_page/post_comments/{targetted_post}", "w") as f:
            comments = [comment]
            json.dump(comments, f)
            update_comment_count(targetted_post, len(comments))
    return jsonify({"message": "Comment saved successfully"})

def update_comment_count(post_id:int, comment_count:int):
    posts[int(post_id)]["comments"] = comment_count
    save_posts()

if __name__ == "__main__":
    app.run(port=5000)
