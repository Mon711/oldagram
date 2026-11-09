const posts = [
	{
		name: "Vincent van Gogh",
		username: "vincey1853",
		location: "Zundert, Netherlands",
		avatar: "images/avatar-vangogh.jpg",
		post: "images/post-vangogh.jpg",
		comment: "just took a few mushrooms lol",
		likes: 21,
	},
	{
		name: "Gustave Courbet",
		username: "gus1819",
		location: "Ornans, France",
		avatar: "images/avatar-courbet.jpg",
		post: "images/post-courbet.jpg",
		comment: "i'm feelin a bit stressed tbh",
		likes: 4,
	},
	{
		name: "Joseph Ducreux",
		username: "jd1735",
		location: "Paris, France",
		avatar: "images/avatar-ducreux.jpg",
		post: "images/post-ducreux.jpg",
		comment:
			"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
		likes: 152,
	},
];

const postsContainer = document.getElementById("posts");
let postsHtml = "";

for (let index = 0; index < posts.length; index++) {
	const post = posts[index];

	postsHtml += `
        <article class="post">
            <div class="post-header">
                <img
                    src="${post.avatar}"
                    class="avatar"
                    alt="${post.name}'s avatar"
                />
                <div class="user-info">
                    <strong>${post.name}</strong>
                    <p>${post.location}</p>
                </div>
            </div>

            <img
                src="${post.post}"
                class="post-image"
                alt="Post by ${post.name}"
            />

            <div class="post-content">
                <div class="post-icons">
                    <button type="button" class="like-btn" id="like-btn-${index}" aria-label="Like post by ${post.name}" aria-pressed="false">
                        <img src="images/icon-heart.svg" alt="" />
                    </button>
                    <img src="images/icon-comment.png" alt="Comment button" />
                    <img src="images/icon-dm.png" alt="Share button" />
                </div>

                <p class="likes" id="likes-count-${index}">${post.likes} likes</p>

                <p class="caption">
                    <strong>${post.username}</strong>
                    ${post.comment}
                </p>
            </div>
        </article>
    `;
}

postsContainer.innerHTML = postsHtml;

for (let index = 0; index < posts.length; index++) {
	const post = posts[index];
	const likeBtn = document.getElementById(`like-btn-${index}`);
	const likeCount = document.getElementById(`likes-count-${index}`);
	const likeIcon = likeBtn.querySelector("img");
	let isLiked = false;

	likeBtn.addEventListener("click", () => {
		isLiked = !isLiked;
		post.likes += isLiked ? 1 : -1;
		likeCount.textContent = `${post.likes} likes`;
		likeIcon.src = isLiked ? "images/icon-heart-liked.svg" : "images/icon-heart.svg";
		likeBtn.setAttribute("aria-pressed", String(isLiked));
	});
}
