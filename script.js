const reelsData = [
  {
    video: "./videos/video_1.mp4",
    profilePicture: "https://randomuser.me/api/portraits/women/11.jpg",
    userName: "funwithlucy",
    isFollowed: false,
    description: "Playing with my new friend 🤖",
    tags: '#robot #fun #enjoy',
    likeCount: 12430,
    isLiked: false,
    shareCount: 320,
    commentCount: 210,
    isSaved: false,
    saveCount: 234,
  },
  {
    video: "./videos/video_2.mp4",
    profilePicture: "https://randomuser.me/api/portraits/men/21.jpg",
    userName: "happyJiehong",
    isFollowed: true,
    description: "watching somme old movies",
    tags: '#tv #friends #smile',
    likeCount: 8932,
    isLiked: true,
    shareCount: 210,
    commentCount: 145,
    isSaved: false,
    saveCount: 234,
  },
  {
    video: "./videos/video_3.mp4",
    profilePicture: "https://randomuser.me/api/portraits/women/32.jpg",
    userName: "engineer_Shadab",
    isFollowed: false,
    description: "Video calling my mom from abroad",
    tags: '#love #video',
    likeCount: 15420,
    isLiked: false,
    shareCount: 540,
    commentCount: 390,
    isSaved: false,
    saveCount: 234,
  },
  {
    video: "./videos/video_4.mp4",
    profilePicture: "https://randomuser.me/api/portraits/men/44.jpg",
    userName: "nature_with_arjun",
    isFollowed: true,
    description: "Walking on iceland greenery",
    tags: '#nature #greenery',
    likeCount: 11200,
    isLiked: true,
    shareCount: 780,
    commentCount: 410,
    isSaved: false,
    saveCount: 234,
  },
  {
    video: "./videos/video_5.mp4",
    profilePicture: "https://randomuser.me/api/portraits/women/55.jpg",
    userName: "spicejet_airlines",
    isFollowed: false,
    description: "Experience the new adventure with spicejet ✈️",
    tags: '#flight #window',
    likeCount: 18900,
    isLiked: true,
    shareCount: 640,
    commentCount: 520,
    isSaved: false,
    saveCount: 234,
  },
  {
    video: "./videos/video_6.mp4",
    profilePicture: "https://randomuser.me/api/portraits/men/66.jpg",
    userName: "cheap_gadgets",
    isFollowed: true,
    description: "Trying my new DSLR shooting a reel",
    tags: '#dslr #reel #experience',
    likeCount: 22300,
    isLiked: false,
    shareCount: 910,
    commentCount: 670,
    isSaved: false,
    saveCount: 234,
  },
  {
    video: "./videos/video_7.mp4",
    profilePicture: "https://randomuser.me/api/portraits/women/77.jpg",
    userName: "joysnow",
    isFollowed: false,
    description: "What if you could walk on Mars 🤔",
    tags: '#mars #universe',
    likeCount: 9400,
    isLiked: false,
    shareCount: 300,
    commentCount: 180,
    isSaved: false,
    saveCount: 234,
  },
  {
    video: "./videos/video_8.mp4",
    profilePicture: "https://randomuser.me/api/portraits/men/88.jpg",
    userName: "viralcats",
    isFollowed: true,
    description: "When your cat plays piano...",
    tags: '#cats #piano #love',
    likeCount: 13200,
    isLiked: true,
    shareCount: 450,
    commentCount: 320,
    isSaved: false,
    saveCount: 234,
  },
  {
    video: "./videos/video_9.mp4",
    profilePicture: "https://randomuser.me/api/portraits/women/12.jpg",
    userName: "marjunrathod",
    isFollowed: false,
    description: "Rope skipping in community park with others",
    tags: '#ropeskipping #exercise',
    likeCount: 16700,
    isLiked: true,
    shareCount: 520,
    commentCount: 410,
    isSaved: false,
    saveCount: 234,
  },
  {
    video: "./videos/video_10.mp4",
    profilePicture: "https://randomuser.me/api/portraits/men/23.jpg",
    userName: "dream_cars",
    isFollowed: false,
    description: "Consistency beats motivation and gets you a car🚀",
    tags: '#motivation #success #mindset',
    likeCount: 20100,
    isLiked: false,
    shareCount: 870,
    commentCount: 600,
    isSaved: false,
    saveCount: 234,
  }
];

const reelsContainer = document.querySelector(".reels-container");
let reelsSum = "";
reelsData.forEach((elem, idx) => {
     reelsSum += `
     <div class="reel">
                    <video src="${elem.video}" autoplay muted loop></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.profilePicture}" alt="" class="user-image">
                            <h4>${elem.userName}</h4>
                            <button class = "${elem.isFollowed? "unfollow": ""}">${elem.isFollowed? "Unfollow": "Follow"}</button>
                        </div>
                        <h3>${elem.description}<span>${elem.tags}</span></h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLiked? '<i class="ri-heart-fill filled"></i>' : '<i class="ri-heart-line">'}</i></h4>
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
                            <h4 class="save-icon icon"><i class="ri-bookmark-line"></i></h4>
                            <h6>${elem.saveCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-line"></i></h4>
                        </div>
                    </div>
                </div>
     `
    

});
reelsContainer.innerHTML = reelsSum;
