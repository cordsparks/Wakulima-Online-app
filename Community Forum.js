document.addEventListener("DOMContentLoaded", () => {
    const postBtn = document.getElementById("postBtn");
    const postContent = document.getElementById("postContent");
    const postsContainer = document.getElementById("posts-container");

    let posts = [];

    // Load existing posts from localStorage
    if (localStorage.getItem("forumPosts")) {
        posts = JSON.parse(localStorage.getItem("forumPosts"));
        renderPosts();
    }

    // Add new post
    postBtn.addEventListener("click", () => {
        const content = postContent.value.trim();
        if (content === "") {
            alert("⚠️ Please enter a message before posting.");
            return;
        }

        const newPost = { content, likes: 0 };
        posts.push(newPost);
        localStorage.setItem("forumPosts", JSON.stringify(posts));

        postContent.value = "";
        renderPosts();
    });

    // Render posts
    function renderPosts() {
        postsContainer.innerHTML = "";
        if (posts.length === 0) {
            postsContainer.innerHTML = "<p>No posts yet. Be the first to share something!</p>";
            return;
        }

        posts.forEach((post, index) => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");

            postElement.innerHTML = `
                <p>${post.content}</p>
                <button class="like-btn" data-index="${index}">👍 Like</button>
                <span class="like-count">${post.likes} likes</span>
            `;

            postsContainer.appendChild(postElement);
        });

        // Add like button event listeners
        document.querySelectorAll(".like-btn").forEach(button => {
            button.addEventListener("click", () => {
                const index = button.getAttribute("data-index");
                posts[index].likes += 1;
                localStorage.setItem("forumPosts", JSON.stringify(posts));
                renderPosts();
            });
        });
    }
});