const reelsData = [
  {
    isPaused: false,
    isMuted: true,
    video:
      "./videos/video_1.mp4",
    profilePicture: "https://yt3.ggpht.com/CE60taNr561O1TEcqf8leO9EldTysg5LhqI8f_Mf7esbNVFxn77YTI2EGuKwdb794ZdJks7z=s48-c-k-c0x00ffffff-no-rj",
    userName: "geoglobetales",
    isFollowed: false,
    description: "The reason why South and North Korea are enemies",
    tags: "#korea #south #north #history",
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
    profilePicture: "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
    userName: "got_fan",
    isFollowed: true,
    description: "When jon meets theon after his betrayal😡",
    tags: "#jonsnow #got #fan",
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
    profilePicture: "https://yt3.ggpht.com/sQlwCNEVDQ-BQ0n-cyHkZ2WykIaz9mCxiq4SlbWjbITYulw75dJQW__AW42O4Y6FfVzaZR-ZBA=s176-c-k-c0x00ffffff-no-rj-mo",
    userName: "ezsnippet",
    isFollowed: false,
    description: "Design whatsapp to get a job in Google👏",
    tags: "#job #google #ezsnippet",
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
    profilePicture: "https://yt3.ggpht.com/CoxkM-bkUecdch2e4R7gaa5gyMAqrhKrYqyjTL0_kkJ1lUb44-cNA5tAOYKX1jAk1OVEU1qO6g=s176-c-k-c0x00ffffff-no-rj-mo",
    userName: "trackintech",
    isFollowed: true,
    description: "WhatsApp trick everyone should follow😮",
    tags: "#whatsapp #trick #tech",
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
    profilePicture: "https://herfootballhub.com/wp-content/uploads/2024/11/england-v-united-states-womens-international-friendly-2-scaled.jpg",
    userName: "goal_keeping_crazy",
    isFollowed: false,
    description: "How everyone goal keep vs robot...",
    tags: "#football #goal #ronaldo",
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
    profilePicture: "https://5.imimg.com/data5/SELLER/Default/2021/12/RP/ED/HF/99547795/3-500x500.jpg",
    userName: "patternmastergenie",
    isFollowed: true,
    description: "Playing with wooden patterns to just have fun..",
    tags: "#wood #pattern #fun",
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
    profilePicture: "https://i.ytimg.com/vi/NSVwmtz5A68/maxresdefault.jpg",
    userName: "random_asmr_videos",
    isFollowed: false,
    description: "Some activity with wood to make it work 🤔",
    tags: "#experience #fun #hammer",
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
    profilePicture: "https://www.cleva-uk.com/cdn/shop/files/VacmasterCA0701UKEasyCleanDirtyWater.webp?v=1740407262&width=2000",
    userName: "carpetcleaning",
    isFollowed: true,
    description: "When you don't want to buy a new carpet...",
    tags: "#carpet #cleaning",
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
    profilePicture: "https://www.popsci.com/wp-content/uploads/2024/08/Dodo-Sculpture.jpg?quality=85",
    userName: "the_extincts",
    isFollowed: false,
    description: "What if dodo woudn't have extincted...🦤",
    tags: "#dodo #save #extinctanimal",
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
    profilePicture: "https://img.freepik.com/free-vector/hand-drawn-butcher-cartoon-illustration_23-2151046700.jpg",
    userName: "butcher_at_home",
    isFollowed: false,
    description: "When you get your new toys and want to take their use",
    tags: "#toy #butcher #knife",
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
    
    likeBtn.querySelector("i").className = clickedReelObject.isLiked? 'ri-heart-fill like-filled' : 'ri-heart-line';
    likeBtn.querySelector("h6").textContent = clickedReelObject.likeCount;
  }

  else if (saveBtn){
    clickedReelObject.isSaved = !clickedReelObject.isSaved;
    clickedReelObject.saveCount += clickedReelObject.isSaved? 1 : -1;

    saveBtn.querySelector("i").className = clickedReelObject.isSaved? 'ri-bookmark-fill save-filled':'ri-bookmark-line';
    saveBtn.querySelector("h6").textContent = clickedReelObject.saveCount;
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
else{
  const video = clickedReel.querySelector("video");
  const muteBtn = clickedReel.querySelector(".mute");
  const muteIcon = muteBtn.querySelector("i");
  if(video.paused){
    video.play();
    muteIcon.className = "ri-volume-up-fill";
    video.muted = false;
  }else{
    video.pause();
    muteIcon.className = "ri-volume-mute-fill";
    video.muted = true;
    // muteBtn.i.className = "ri-volume-mute-fill";
    // clickedReel.querySelector(".mute").i.className = "ri-volume-mute-fill"
  }
}
})