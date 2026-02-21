const feed = document.getElementById("feed");

const posts = [
  {
    platform: "Instagram",
    type: "image",
    src: "https://source.unsplash.com/400x300/?fashion"
  },
  {
    platform: "YouTube",
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    platform: "Pinterest",
    type: "image",
    src: "https://source.unsplash.com/400x300/?technology"
  },
  {
    platform: "TikTok",
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4"
  }
];

posts.forEach(post => {
  const div = document.createElement("div");
  div.classList.add("post");

  let mediaContent = "";

  if (post.type === "image") {
    mediaContent = `<img src="${post.src}" alt="Trending image">`;
  } else if (post.type === "video") {
    mediaContent = `
      <video controls>
        <source src="${post.src}" type="video/mp4">
      </video>
    `;
  }

  div.innerHTML = `
    <strong>${post.platform}</strong>
    ${mediaContent}
  `;

  feed.appendChild(div);
});
