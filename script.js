const reelsData = [
  {
    isMuted: true,
    video:
      "./videos/Lulu_Yadav_the_real_OG_memes_politics_laluyadav_funny_viral_trending_144P.mp4",
    profilePicture: "https://randomuser.me/api/portraits/women/11.jpg",
    userName: "funwithlucy",
    isFollowed: false,
    description: "Playing with my new friend 🤖",
    tags: "#robot #fun #enjoy",
    likeCount: 12430,
    isLiked: false,
    shareCount: 320,
    commentCount: 210,
    isSaved: false,
    saveCount: 234,
  },
  {
    isMuted: true,
    video: "./videos/video_2.mp4",
    profilePicture: "https://randomuser.me/api/portraits/men/21.jpg",
    userName: "happyJiehong",
    isFollowed: true,
    description: "watching somme old movies",
    tags: "#tv #friends #smile",
    likeCount: 8932,
    isLiked: true,
    shareCount: 210,
    commentCount: 145,
    isSaved: false,
    saveCount: 234,
  },
  {
    isMuted: true,
    video: "./videos/video_3.mp4",
    profilePicture: "https://randomuser.me/api/portraits/women/32.jpg",
    userName: "engineer_Shadab",
    isFollowed: false,
    description: "Video calling my mom from abroad",
    tags: "#love #video",
    likeCount: 15420,
    isLiked: false,
    shareCount: 540,
    commentCount: 390,
    isSaved: false,
    saveCount: 234,
  },
  {
    isMuted: true,
    video: "./videos/video_4.mp4",
    profilePicture: "https://randomuser.me/api/portraits/men/44.jpg",
    userName: "nature_with_arjun",
    isFollowed: true,
    description: "Walking on iceland greenery",
    tags: "#nature #greenery",
    likeCount: 11200,
    isLiked: true,
    shareCount: 780,
    commentCount: 410,
    isSaved: true,
    saveCount: 234,
  },
  {
    isMuted: true,
    video: "./videos/video_5.mp4",
    profilePicture: "https://randomuser.me/api/portraits/women/55.jpg",
    userName: "spicejet_airlines",
    isFollowed: false,
    description: "Experience the new adventure with spicejet ✈️",
    tags: "#flight #window",
    likeCount: 18900,
    isLiked: true,
    shareCount: 640,
    commentCount: 520,
    isSaved: false,
    saveCount: 234,
  },
  {
    isMuted: true,
    video: "./videos/video_6.mp4",
    profilePicture: "https://randomuser.me/api/portraits/men/66.jpg",
    userName: "cheap_gadgets",
    isFollowed: true,
    description: "Trying my new DSLR shooting a reel",
    tags: "#dslr #reel #experience",
    likeCount: 22300,
    isLiked: false,
    shareCount: 910,
    commentCount: 670,
    isSaved: false,
    saveCount: 234,
  },
  {
    isMuted: true,
    video: "./videos/video_7.mp4",
    profilePicture: "https://randomuser.me/api/portraits/women/77.jpg",
    userName: "joysnow",
    isFollowed: false,
    description: "What if you could walk on Mars 🤔",
    tags: "#mars #universe",
    likeCount: 9400,
    isLiked: false,
    shareCount: 300,
    commentCount: 180,
    isSaved: true,
    saveCount: 234,
  },
  {
    isMuted: true,
    video: "./videos/video_8.mp4",
    profilePicture: "https://randomuser.me/api/portraits/men/88.jpg",
    userName: "viralcats",
    isFollowed: true,
    description: "When your cat plays piano...",
    tags: "#cats #piano #love",
    likeCount: 13200,
    isLiked: true,
    shareCount: 450,
    commentCount: 320,
    isSaved: false,
    saveCount: 234,
  },
  {
    isMuted: true,
    video: "./videos/video_9.mp4",
    profilePicture: "https://randomuser.me/api/portraits/women/12.jpg",
    userName: "marjunrathod",
    isFollowed: false,
    description: "Rope skipping in community park with others",
    tags: "#ropeskipping #exercise",
    likeCount: 16700,
    isLiked: true,
    shareCount: 520,
    commentCount: 410,
    isSaved: true,
    saveCount: 234,
  },
  {
    isMuted: true,
    video: "./videos/video_10.mp4",
    profilePicture: "https://randomuser.me/api/portraits/men/23.jpg",
    userName: "dream_cars",
    isFollowed: false,
    description: "Consistency beats motivation and gets you a car🚀",
    tags: "#motivation #success #mindset",
    likeCount: 20100,
    isLiked: false,
    shareCount: 870,
    commentCount: 600,
    isSaved: false,
    saveCount: 234,
  },
];

const reelsContainer = document.querySelector(".reels-container");

function addData() {
  let reelsSum = "";
  reelsData.forEach((elem, idx) => {
    reelsSum += `
     <div class="reel" data-index="${idx}">
                    <video src="${elem.video}" autoplay muted loop></video>
                     <div class="mute"><i class="ri-volume-mute-fill"></i></div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.profilePicture}" alt="" class="user-image">
                            <h4>${elem.userName}</h4>
                            <button class = "${elem.isFollowed ? "unfollow" : ""}">${elem.isFollowed ? "Unfollow" : "Follow"}</button>
                        </div>
                        <h3>${elem.description}<span>${elem.tags}</span></h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLiked ? '<i class="ri-heart-fill like-filled"></i>' : '<i class="ri-heart-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="save">
                            <h4 class="save-icon icon">${elem.isSaved ? '<i class="ri-bookmark-fill save-filled"></i>' : '<i class="ri-bookmark-line"></i>'}</h4>
                            <h6>${elem.saveCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>
     `;
  });
  reelsContainer.innerHTML = reelsSum;
}
addData();

reelsContainer.addEventListener("click", (e)=>{
  const clickedReel = e.target.closest(".reel");
  if(!clickedReel) return;
  
  const clickedReelIndex = Number(clickedReel.dataset.index);
  const clickedReelObject = reelsData[clickedReelIndex];

  const likeBtn = e.target.closest(".like");
  const saveBtn = e.target.closest(".save");
  const followBtn = e.target.closest("button");
  const commentBtn = e.target.closest(".comment");
  const shareBtn = e.target.closest(".share");
  const muteBtn = e.target.closest(".mute");

  if(likeBtn){
    clickedReelObject.isLiked = !clickedReelObject.isLiked;
    clickedReelObject.likeCount += clickedReelObject.isLiked? 1 : -1;
    console.log(clickedReelObject.likeCount)
    const icon = likeBtn.querySelector("i");
    const count = likeBtn.querySelector("h6");
    
    icon.className = clickedReelObject.isLiked? 'ri-heart-fill like-filled' : 'ri-heart-line';
    count.textContent = clickedReelObject.likeCount;
  }

  else if (saveBtn){
    clickedReelObject.isSaved = !clickedReelObject.isSaved;
    clickedReelObject.saveCount += clickedReelObject.isSaved? 1 : -1;

    const icon = saveBtn.querySelector("i");
    const count = saveBtn.querySelector("h6");

    icon.className = clickedReelObject.isSaved? 'ri-bookmark-fill save-filled':'ri-bookmark-line';
    count.textContent = clickedReelObject.saveCount;
  }

  else if (followBtn){
    clickedReelObject.isFollowed = !clickedReelObject.isFollowed;

    followBtn.textContent = clickedReelObject.isFollowed? "Unfollow": "Follow";
    followBtn.classList.toggle("unfollow", clickedReelObject.isFollowed);
  }

  else if (commentBtn) {
  commentBtn.classList.add("active");

  setTimeout(() => {
    commentBtn.classList.remove("active");
  }, 200);
}

else if (shareBtn) {
  shareBtn.classList.add("active");

  setTimeout(() => {
    shareBtn.classList.remove("active");
  }, 200);
}

   else if (muteBtn) {
  const allVideos = reelsContainer.querySelectorAll("video");
  const allMuteBtns = reelsContainer.querySelectorAll(".mute");

  const video = clickedReel.querySelector("video");
  const icon = muteBtn.querySelector("i");

  if (clickedReelObject.isMuted) {
    
    reelsData.forEach(r => r.isMuted = true);

    allVideos.forEach(vid => vid.muted = true);

    allMuteBtns.forEach(btn => {
      btn.querySelector("i").className = "ri-volume-mute-fill";
    });

    clickedReelObject.isMuted = false;
    video.muted = false;
    icon.className = "ri-volume-up-fill";

  } else {

    clickedReelObject.isMuted = true;
    video.muted = true;
    icon.className = "ri-volume-mute-fill";
  }
}
})