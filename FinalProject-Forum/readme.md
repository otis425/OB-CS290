HI!

This is my Final Project for CS290. I wanted to showcase a better example of server-side scripting throughout this project than I did in the last assignment. So I decided to make a forum. I knew that would involve pulling posts and comments from a harddrive somewhere, and populating pages based on those results. As well as sending form data to the server to create new posts/comments. I think I succeeded in most ways that I wanted to! Here is an image of the front of my Forum.
![image](https://github.com/otis425/OB-CS290/assets/71042122/a0f7eca0-d2d0-4c58-9651-822a66a8a1e8)
The page makes a web request through javascript to a python script. I used Flask to receive get and post requests in Python. This front page is dynamically created through those requests, and the client javascript populates the page. You can either click on a post title on this page to go to that post and read comments, or you can make a post by clicking the create post button on the top right.
![image](https://github.com/otis425/OB-CS290/assets/71042122/b920fa8d-587b-4182-849b-2813f91f1169)
This menu slides down when clicked. In it you choose an image (these are requested from the server, so the input live updates when new images are added to the drive) and fill out your posts content. When finished, you can post it.
![image](https://github.com/otis425/OB-CS290/assets/71042122/61301ce8-9041-463b-b75f-cc5cf92ea5a7)
In a post, you can create comments through the same method. These comments are tied to each post, and are called using URL queries to determine the targetted post. This lets each post have unique comments from eachother!
![image](https://github.com/otis425/OB-CS290/assets/71042122/ce80fe62-e820-49d0-9f5f-d9d6ac296adb)
Posts and comments are timestamped using Javascript, and that information is also saved to the server harddrive.

I added a few edge case checks to make sure the user was not left in the dark when things went wrong. Here are a few examples :
missing post fields
![image](https://github.com/otis425/OB-CS290/assets/71042122/8e970d00-4efd-4876-ba4f-40ac521bbe98)
server retrieval errors
![image](https://github.com/otis425/OB-CS290/assets/71042122/33713c11-62d5-4b25-abb0-9d8926107765)

To run this project, you will need the module flask, flask_cors, and json. Simply make sure the python script is running, and then load the html front_page using some kind of live-server. You may need to change some ports if your Live-server doesn't run on 5500. The python port must be different from the live-server. line 135 changes the python target port, and line 16 should be where you can pick the port to expect requests from (the live server)

I thought this was a really fun project! Once I got the hang of things, it started becoming pretty fun to figure out how to retrieve the data, and populate the pages. I had never used URL queries before, so I find it neat that the project only contains two html files, but could potentially have many thousands of different unique posts. 
