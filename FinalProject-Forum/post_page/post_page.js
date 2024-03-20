let params = new URLSearchParams(window.location.search);
let postId = params.get('postId');

function request_post() {
    // Make an HTTP GET request to the Flask route with the post ID
    fetch(`http://localhost:5000/post_page/${postId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.length);
            load_post(data[0]);
            load_comments(data);
        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.log('Error:', error)
            load_error(error);
        });
}

function load_post(post) {
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

    let titleLink = document.createElement('span');
    let postId = post.id;
    titleLink.classList.add('post-body-title');
    titleLink.classList.add('disabled-link');
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
}

function load_comments(posts){
    posts.shift(); // Remove the first post
    posts.forEach(post => {
        let postDiv = document.createElement('div');
        postDiv.classList.add('comment-div');

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

        let contentSpan = document.createElement('span');
        contentSpan.classList.add('post-body-content');
        contentSpan.textContent = post.content;

        postBody.appendChild(contentSpan);

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

document.addEventListener('DOMContentLoaded', request_post);
