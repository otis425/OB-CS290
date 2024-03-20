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

To run this project, you will need the modules; flask, flask_cors, and json. Simply make sure the python script is running, and then load the html front_page using some kind of live-server. You may need to change some ports if your Live-server doesn't run on 5500. The python port must be different from the live-server. line 135 changes the python target port, and line 16 should be where you can pick the port to expect requests from (the live server)

I thought this was a really fun project! Once I got the hang of things, it started becoming pretty fun to figure out how to retrieve the data, and populate the pages. I had never used URL queries before, so I find it neat that the project only contains two html files, but could potentially have many thousands of different unique posts. 



Final Questions :

1. https://github.com/otis425/OB-CS290/tree/main/FinalProject-Forum

2. Here are the sites I chose on assignment 0 and my updated opinions.

a. otisvis.com

Putting my own site up for review is a double edged sword. While I am proud of my site I made long ago, it hurts to know how much cooler I could make it now. I know with JavaScript and smarter CSS I could do some really interesting things. Perhaps I need to go back and update this thing now that I have so much more experience. It could really use the once-over.

b. wikipedia.com

My opinions on Wikipedia mostly stay the same! It is still a really nice site to look at, and now I can see how responsive it is as well! I think wikipedia is laid out neatly. I also now can see how search terms are held in url queries too which is pretty cool.

c. https://www.yahoo.com/

Yahoo's site actually had a minor overhaul during this term, but my gripes stay pretty consistent. They went for a more modern design around the UI, generally softening the edges around elements and laying things out more smoothly. While it doesn't hurt my eyes as bad, it still feels like a magazine front cover when I look at it. Way too much going on in a small area. Also just to be picky, when you search something, your URL is blown way out of control, and is not human readable at all. I think it's nice to have human readable URLS. That's more user friendly when it comes to linking a page.

d. https://www.netflix.com/

Netflix is really cool when you look at it from a technical perspective. Love or hate the design, the fact that this page is built with the same tools that I built my pages with is really impressive. When you pull it apart some, its crazy to see it break down from something so modern and sleek into regular old ugly HTML. Very impressive, and to maintain the responsive design across so many devices is top notch.

e. https://play.date/

Playdate is still a very pretty website. Much smaller pieces of interactive content than something like Netflix, but it is still so well designed that even though it could be as drab as an article, I am really pleased to see the extra care put in. It maintains responsive design, and generally has very well done style choices outside of technical aspects. 

3. Here are my opinions on my previous projects based on my feedback at the start of class. I am scared of this part because I was mostly harsh on design aspects rather than technical aspects.

a. Assignment 1 : Portfolio/Blog

This website is flat out ugly. I appreciate some finer details, but it feels like little was gotten right. I can only give myself slack because we weren't supposed to use much CSS. I like having the header buttons of course, and the side columns, but that's about all I can come to appreciate.

b. Assignment 2 : Wiki Page

After seeing assignment 1, I am very pleased. This was inspired by Wikipedia, and I managed to hit a couple marks. I think centering the middle text was a terrible decision for readability, but there are things that save it. CSS was not bad here. Inconsistent bordering, but the buttons are much nicer here, and having inline elements like a page directory and a wiki image is a nice touch. The header image was spaced a little odd though. Not bad, but not great either.

c. Assignment 3 : Site Map Family

I like this project! I think there are lots that was done well, and I think it's very inoffensive to use fewer elements in better ways. The largest gripe I have with the main site, and the individual sites to a degree, is the image size. Especially across different devices. There is a lot of space being taken up by images that could probably be 50% smaller. I remember also failing to implement the 'breadcrumbs' that I wanted to. I possible could figure that out now, with use of more JavaScript page collection and URL queries to hold previous sites. The inline elements are done well here, and the sticky header works well on this site I think.

d. Assignment 4: JavaScript Form DEMO

This site is cool! A good use of JavaScript to showcase basic functionality. It is something simple that would be impossible in strictly CSS, and it gets the point across simply. I think the design here is pretty nice, and the elements inside each box are spaced well. Especially the elements within the interior scrollbar on the second box. Things look consistent on this site, and the colors work well to illustrate to the user more about what's going on. 

e. Assignment 5: Server-Side Scripting Boat Diver

This site is pretty ugly for something that could be so cute. I think I was too caught up in learning Flask and get request to spend much time on user interface. This site doesn't explain well to the user anything about what is happening or how it all works. I also realized after the fact that not only is the server-side use case pretty minimal, but the site hardly illustrates how much it took to make it work. Unfortunately this project could have been done in entirely JavaScript. So it missed the marks on design and functionality.



Thanks for the class! I learned so much, and I feel so much more confident making sites now than I did when I started! It takes practice to learn layout and CSS. I also never knew anything about JavaScript or server-side scripting, and that was COOL!!! I want to make some more web-apps! It gives me all sorts of cool ideas like sending packets to raspberry pi's on my local network through a website! The possibilities are endless!
