let front_posts = []

fetch('http://localhost:5000/front_page/front_page')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            // Parse each item in the list here
            // Access the properties of each dictionary using item.propertyName
            let post = {};
            post.id = item.id;
            post.username = item.username;
            post.icon = item.icon;
            post.date = item.date;
            post.time = item.time;
            post.title = item.title;
            post.content = item.content;
            post.comments = item.comments;
            front_posts.push(post);
        });
        load_posts();
    })
    .catch(error => {
        // Handle any errors here
        console.log('Error:', error)
        load_error(error);
    });

function load_posts(){
    front_posts.reverse().forEach(post => {
        let postDiv = document.createElement('div');
        postDiv.classList.add('post-div');

        let postDetails = document.createElement('div');
        postDetails.classList.add('post-details');

        let profileImg = document.createElement('img');
        profileImg.classList.add('post-details-profileimg');
        profileImg.src = post.icon;

        let authorSpan = document.createElement('span');
        authorSpan.classList.add('post-details-author');
        authorSpan.textContent = post.username;

        let dateSpan = document.createElement('span');
        dateSpan.classList.add('post-details-date');
        dateSpan.innerHTML = `${post.time}<br>${post.date}`;

        postDetails.appendChild(profileImg);
        postDetails.appendChild(authorSpan);
        postDetails.appendChild(dateSpan);

        let postBody = document.createElement('div');
        postBody.classList.add('post-body');

        let titleLink = document.createElement('a');
        let postId = post.id;
        titleLink.classList.add('post-body-title');
        titleLink.href = "/post_page/post_page.html?postId=" + postId;
        titleLink.textContent = post.title;

        let contentSpan = document.createElement('span');
        contentSpan.classList.add('post-body-content');
        contentSpan.textContent = post.content;

        let commentCountSpan = document.createElement('span');
        commentCountSpan.classList.add('post-body-comment-count');
        commentCountSpan.textContent = `${post.comments} comments`;

        postBody.appendChild(titleLink);
        postBody.appendChild(contentSpan);
        postBody.appendChild(commentCountSpan);

        postDiv.appendChild(postDetails);
        postDiv.appendChild(postBody);

        document.body.appendChild(postDiv);
    });
}

function load_error(error){
    let errorText = document.createElement('h1');
    errorText.textContent = "Error:";
    let errormessage = document.createElement('p');
    errorText.textContent = error;
    document.body.appendChild(errorText);
    document.body.appendChild(errormessage);
}
