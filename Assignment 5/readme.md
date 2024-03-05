HI !
[ SUMMARY ]
This assignment was fun! It was very difficult to think of a project that could utilize server-side scripting, because so many things can just use javascript. I made a diving game however, and it felt like it was so much more work that it looks on the surface. I used Python with Flask as my serverside scripting solution. The entire diving game is handled in JavaScript, however when you get back to the boat, a packet is sent to the Python script that holds your max depth reached. Then i use some python to match your max depth with a depth milestone. A txt file holds all the milestones and their fish available. Then the python script sends back the fish to the game on javascript to add to your list of fish caught. When you run out of oxygen your list gets cleared! Make it back to the boat in time!!

[ IMAGES ]
![catching](https://github.com/otis425/OB-CS290/assets/71042122/6224d4ff-acd3-42ed-b569-e60c0184c70e)
![diving](https://github.com/otis425/OB-CS290/assets/71042122/bdac5988-c2c9-4a72-9e86-6af5e0d1af8b)
![drowned_fishclear](https://github.com/otis425/OB-CS290/assets/71042122/f314a048-c269-461d-a3f7-066ad3d955ca)
![scrollbar](https://github.com/otis425/OB-CS290/assets/71042122/1723dbad-cb40-4779-8740-b604f449388a)

[RUNNING the GAME]
To run this make sure you run your python file first, and then it will standby to receive packets from Javascript.
