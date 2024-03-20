const postCreatorDiv = document.getElementById("post-creator-div");
let isTopPosition = false;

function update_forumdetails() {
  fetch("http://localhost:5000/front_page/forum_details")
    .then((response) => response.json())
    .then((data) => {
      const total_posts = document.getElementById("unique-posts");
      const total_comments = document.getElementById("unique-comments");
      posts = data[0]
      comments = data[1]
      total_posts.textContent = "total posts = " + posts;
      total_comments.textContent = "total comments = " + comments;
    })
    .catch((error) => {
      console.error("Error fetching forum details:", error);
    });

}

function create_postPress() {
  const header = document.getElementById("header");
  const headerBottom = header.offsetTop + header.offsetHeight;
  const hidePostCreator =
    postCreatorDiv.offsetTop + postCreatorDiv.offsetHeight;
  if (isTopPosition) {
    animatePostCreator(-hidePostCreator + "px");
    isTopPosition = false;
  } else {
    animatePostCreator(headerBottom + "px");
    isTopPosition = true;
  }
  const input_dropper = document.getElementById("input-image-drop");
  if (input_dropper.length === 1) {
    add_imageoptions();
  }
}

function animatePostCreator(topPosition) {
  postCreatorDiv.style.transition = "top 0.5s";
  postCreatorDiv.style.top = topPosition;
}

function add_imageoptions() {
  const input_dropper = document.getElementById("input-image-drop");
  // get list of images from server
  fetch("http://localhost:5000/front_page/profile_pictures")
    .then((response) => response.json())
    .then((data) => {
      // Iterate over the image files and create an option for each one
      data.forEach((imageFile) => {
        const option = document.createElement("option");
        option.value = imageFile;
        option.text = imageFile;
        input_dropper.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error fetching image files:", error);
    });
}

function set_imageinput() {
  const image_preview = document.getElementById("input-preview-img");
  const image_selector = document.getElementById("input-image-drop");
  image_preview.src = `/profile_pictures/${image_selector.value}`;
}

function submit_post(event) {
  event.preventDefault();
  const now = new Date();
  const date_now = now.toDateString();
  const time_now = now.toLocaleTimeString();
  if (check_validpost()) {
    const name_input = document.getElementById("input-name").value;
    const title_input = document.getElementById("input-post-title").value;
    const content_input = document.getElementById("input-post-content").value;
    const image_input = document.getElementById("input-preview-img").src;
    // create post object
    const post = {
      //dont forget to assign id in python
      username: name_input,
      icon: image_input,
      date: date_now,
      time: time_now,
      title: title_input,
      content: content_input,
      comments: 0,
    };

    fetch("http://localhost:5000/front_page/save_post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

function check_validpost() {
  const image = document.getElementById("input-image-drop").value;
  const name = document.getElementById("input-name").value;
  const title = document.getElementById("input-post-title").value;
  const content = document.getElementById("input-post-content").value;

  if (
    name === "" ||
    title === "" ||
    content === "" ||
    image === "" ||
    image === "Select Image"
  ) {
    alert("Please fill in all the required fields.");
    return false;
  }
  return true;
}

function submit_comment(event) {
  event.preventDefault();
  const now = new Date();
  const date_now = now.toDateString();
  const time_now = now.toLocaleTimeString();
  if (check_validcomment()) {
    let params = new URLSearchParams(window.location.search);
    let postId = params.get("postId");
    if (postId === null) {
      alert("No PostID from URL.");
      return;
    }
    const name_input = document.getElementById("input-name").value;
    const content_input = document.getElementById("input-post-content").value;
    const image_input = document.getElementById("input-preview-img").src;
    const comment = {
      //dont forget to assign comment-id in python
      postid: postId,
      username: name_input,
      icon: image_input,
      date: date_now,
      time: time_now,
      content: content_input,
    };

    fetch("http://localhost:5000/post_page/save_comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

function check_validcomment() {
  const image = document.getElementById("input-image-drop").value;
  const name = document.getElementById("input-name").value;
  const content = document.getElementById("input-post-content").value;

  if (
    name === "" ||
    content === "" ||
    image === "" ||
    image === "Select Image"
  ) {
    alert("Please fill in all the required fields.");
    return false;
  }
  return true;
}

// Event Listeners
const postcreator_button = document.getElementById("create-post-button");
const image_selector = document.getElementById("input-image-drop");
const postsubmit_button = document.getElementById("input-submit-post");
const commentsubmit_button = document.getElementById("input-submit-comment");
postcreator_button.addEventListener("click", create_postPress);
image_selector.addEventListener("change", set_imageinput);
if (postsubmit_button) {
  postsubmit_button.addEventListener("click", submit_post);
}
if (commentsubmit_button) {
  commentsubmit_button.addEventListener("click", submit_comment);
}
document.addEventListener("DOMContentLoaded", update_forumdetails);
