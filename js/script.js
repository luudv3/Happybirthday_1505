const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const pages = ["page1", "page2", "pageMemory", "page3", "page4"];
const music = document.getElementById("birthdayMusic");

function showPage(id) {
  pages.forEach((p) => {
    const el = document.getElementById(p);
    el.classList.toggle("active", p === id);
  });
}

async function typeWriter(
  el,
  lines,
  speed = 55,
  lineDelay = 420,
  highlightLines = [],
) {
  el.innerHTML = "";
  for (const line of lines) {
    const span = document.createElement("span");
    const isHighlight = highlightLines.includes(line);
    if (isHighlight)
      span.className = el.id === "finalText" ? "final-highlight" : "highlight";
    el.appendChild(span);
    for (const ch of line) {
      span.textContent += ch;
      await sleep(speed);
    }
    el.appendChild(document.createElement("br"));
    await sleep(lineDelay);
  }
}

async function runIntro() {
  await typeWriter(
    document.getElementById("introText"),
    [
      "Một ngày rất bình thường",
      "nhưng lại trở nên đặc biệt theo một cách riêng",
    ],
    64,
    550,
  );
  await sleep(850);
  showPage("page2");
}

function burstGiftPhotos() {
  const imgs = [
    "img/hue25.jpg",
    "img/hue24.jpg",
    "img/hue21.jpg",
    "img/hue6.jpg",
    "img/hue23.jpg",
    "img/hue1.jpg",
  ];
  imgs.forEach((src, i) => {
    const card = document.createElement("div");
    card.className = "gift-mini-photo";
    card.style.setProperty("--x", `${(Math.random() - 0.5) * 260}px`);
    card.style.setProperty("--y", `${-70 - Math.random() * 180}px`);
    card.style.setProperty("--r", `${(Math.random() - 0.5) * 70}deg`);
    card.style.animationDelay = `${i * 45}ms`;
    card.innerHTML = `<img src="${src}" alt="">`;
    document.body.appendChild(card);
    setTimeout(() => card.remove(), 1300);
  });
}

function openGift() {
  const gift = document.getElementById("gift");
  burstGiftPhotos();
  gift.classList.add("explode");
  setTimeout(() => {
    showPage("pageMemory");
  }, 650);
}

const memories = [
  {
    img: "img/hue25.jpg",
    text: "Một khoảnh khắc rất bình thường, nhưng lại đáng nhớ",
  },
  {
    img: "img/hue24.jpg",
    text: "Có những điều chỉ cần nhìn thôi cũng thấy nhẹ lòng",
  },
  { img: "img/hue21.jpg", text: "Cậu của ngày hôm nay vẫn rất xinh đẹp" },
  {
    img: "img/hue6.jpg",
    text: "Mỗi tấm ảnh là một chút dịu dàng được giữ lại",
  },
  {
    img: "img/hue23.jpg",
    text: "Có những nụ cười làm ngày bình thường trở nên khác hơn",
  },
  {
    img: "img/hue1.jpg",
    text: "Mong cậu luôn được yêu thương theo cách thật nhẹ nhàng",
  },
];

function openMemory(index) {
  const item = memories[index];
  document.getElementById("memoryImg").src = item.img;
  document.getElementById("memoryCaption").textContent = item.text;
  document.getElementById("memoryPopup").classList.add("show");
}

function hideMemory() {
  document.getElementById("memoryPopup").classList.remove("show");
}

function closeMemory(e) {
  if (e.target.id === "memoryPopup") hideMemory();
}

function startAfterMemory() {
  hideMemory();
  showPage("page3");
  startMainStory();
}
const photoList = [
  "img/hue.jpg",
  "img/hue1.jpg",
  "img/hue2.jpg",
  "img/hue3.jpg",
  "img/hue4.jpg",
  "img/hue5.jpg",
  "img/hue6.jpg",
  "img/hue7.jpg",
  "img/hue8.jpg",
  "img/hue9.jpg",
  "img/hue10.jpg",
  "img/hue11.jpg",
  "img/hue12.jpg",
  "img/hue13.jpg",
  "img/hue14.jpg",
  "img/hue15.jpg",
  "img/hue16.jpg",
  "img/hue17.jpg",
  "img/hue18.jpg",
  "img/hue19.jpg",
  "img/hue20.jpg",
  "img/hue21.jpg",
  "img/hue22.jpg",
  "img/hue23.jpg",
  "img/hue24.jpg",
  "img/hue25.jpg",
  "img/hue26.jpg",
  "img/hue27.jpg",
];
let photoIndex = 0;
function startSlideShow() {
  const img = document.getElementById("slidePhoto");
  setInterval(() => {
    img.classList.add("fade-img");
    setTimeout(() => {
      photoIndex = (photoIndex + 1) % photoList.length;
      img.src = photoList[photoIndex];
      img.classList.remove("fade-img");
    }, 650);
  }, 3100);
}

let storyStarted = false;
async function startMainStory() {
  if (storyStarted) return;
  storyStarted = true;
  startSlideShow();
  music.volume = 0.55;
  music.play().catch(() => {});

  const lines = [
    "Chúc mừng sinh nhật Huệ 🎂",
    "",
    "Hy vọng hôm nay của cậu sẽ thật vui",
    "và những ngày sau đó cũng vậy",
    "",
    "Chúc cậu luôn xinh đẹp,",
    "nhưng quan trọng hơn là luôn cảm thấy vui vẻ và thoải mái",
    "",
    "Nếu có lúc nào thấy mệt,",
    "thì cứ cho bản thân nghỉ một chút nhé",
    "",
    "Chỉ là...",
    "ở đâu đó vẫn có người",
    "luôn mong cậu bình yên mỗi ngày",
    "",
    "Happy Birthday 💖",
  ];
  await typeWriter(document.getElementById("birthdayText"), lines, 46, 420, [
    "ở đâu đó vẫn có người",
    "luôn mong cậu bình yên mỗi ngày",
  ]);
  await sleep(650);
  document.getElementById("choiceModal").classList.add("show");
}

const noBtn = document.getElementById("noBtn");
const btnArea = document.getElementById("btnArea");
function moveNoBtn() {
  const area = btnArea.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();
  const maxX = Math.max(0, area.width - btn.width);
  const maxY = Math.max(0, area.height - btn.height);
  const x = Math.random() * maxX;
  const y = 36 + Math.random() * Math.max(0, maxY - 36);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = "none";
}
noBtn.addEventListener("mouseenter", moveNoBtn);
noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  moveNoBtn();
});
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoBtn();
});

function makeFalling() {
  const item = document.createElement("div");
  item.className = "falling";
  item.textContent = Math.random() > 0.5 ? "✨" : "🎈";
  item.style.left = Math.random() * 100 + "vw";
  item.style.animationDuration = 4.5 + Math.random() * 5 + "s";
  item.style.fontSize = 16 + Math.random() * 18 + "px";
  document.getElementById("page4").appendChild(item);
  setTimeout(() => item.remove(), 10000);
}

function pastelFirework(
  x = Math.random() * innerWidth,
  y = Math.random() * innerHeight * 0.55 + 40,
) {
  const colors = ["#ff9fbd", "#a8d8ff", "#ffd88a", "#c8b6ff", "#b8f7d4"];
  const fw = document.createElement("div");
  fw.className = "pastel-firework";
  fw.style.left = `${x}px`;
  fw.style.top = `${y}px`;
  for (let i = 0; i < 14; i++) {
    const s = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 14;
    const dist = 34 + Math.random() * 28;
    s.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
    s.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
    s.style.setProperty("--fw-color", colors[i % colors.length]);
    fw.appendChild(s);
  }
  document.body.appendChild(fw);
  setTimeout(() => fw.remove(), 1000);
}

function fireworkBurst(count = 5) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => pastelFirework(), i * 220);
  }
}

const skyPhotoList = [
  "img/hue.jpg",
  "img/hue1.jpg",
  "img/hue2.jpg",
  "img/hue3.jpg",
  "img/hue4.jpg",
  "img/hue5.jpg",
  "img/hue6.jpg",
  "img/hue7.jpg",
  "img/hue8.jpg",
  "img/hue9.jpg",
  "img/hue10.jpg",
  "img/hue11.jpg",
  "img/hue12.jpg",
  "img/hue13.jpg",
  "img/hue14.jpg",
  "img/hue15.jpg",
  "img/hue16.jpg",
  "img/hue17.jpg",
  "img/hue18.jpg",
  "img/hue19.jpg",
  "img/hue20.jpg",
  "img/hue21.jpg",
  "img/hue22.jpg",
  "img/hue23.jpg",
  "img/hue24.jpg",
  "img/hue25.jpg",
  "img/hue26.jpg",
  "img/hue27.jpg",
];
let endingScenePlayed = false;

function launchPhotoSky(count = 18) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const card = document.createElement("div");
      card.className = "sky-memory-photo";
      const src = skyPhotoList[Math.floor(Math.random() * skyPhotoList.length)];
      card.style.left = `${8 + Math.random() * 84}vw`;
      card.style.setProperty("--rot", `${(Math.random() - 0.5) * 18}deg`);
      card.style.setProperty("--spin", `${(Math.random() - 0.5) * 42}deg`);
      card.style.setProperty("--drift-x", `${(Math.random() - 0.5) * 110}px`);
      card.style.setProperty("--drift-y", `${Math.random() * 160}px`);
      card.style.setProperty("--end-scale", `${0.55 + Math.random() * 0.4}`);
      card.style.setProperty("--rise-time", `${4.8 + Math.random() * 1.8}s`);
      card.innerHTML = `<img src="${src}" alt="">`;
      document.body.appendChild(card);
      setTimeout(() => card.remove(), 7000);
    }, i * 120);
  }
}

function playEndingScene() {
  if (endingScenePlayed) return;
  endingScenePlayed = true;

  setTimeout(() => launchPhotoSky(22), 650);
  setTimeout(() => fireworkBurst(5), 900);

  setTimeout(() => {
    document.getElementById("endingBadge").classList.add("show");
  }, 1500);

  setTimeout(() => {
    document.getElementById("restartBtn").classList.add("show");
  }, 2600);
}

function sendWish() {
  const input = document.getElementById("wishInput");
  const note = document.getElementById("wishNote");
  const text = input.value.trim() || "Một điều ước thật dịu dàng";
  const star = document.createElement("div");
  star.className = "wish-star";
  star.textContent = `✨ ${text} ✨`;
  document.body.appendChild(star);
  note.classList.add("show");
  input.value = "";
  fireworkBurst(6);
  playEndingScene();
  setTimeout(() => star.remove(), 2500);
}

async function goFinal() {
  document.getElementById("choiceModal").classList.remove("show");
  showPage("page4");
  setInterval(makeFalling, 260);
  const finalLines = [
    "Có những ngày rất bình thường...",
    "nhưng chỉ cần nghĩ đến cậu,",
    "mọi thứ lại nhẹ nhàng hơn một chút.",
    "Không rõ từ lúc nào nữa,",
    "cậu trở thành một điều quen thuộc",
    "trong những suy nghĩ mỗi ngày.",
    "Chỉ mong trong những ngày bình yên,",
    "vẫn có thể thấy cậu ở đâu đó.",
    "Vậy là đủ rồi 💖",
  ];
  await typeWriter(document.getElementById("finalText"), finalLines, 54, 470, [
    "Vậy là đủ rồi 💖",
  ]);
  await sleep(450);
  fireworkBurst(4);
  document.getElementById("wishBox").classList.add("show");
}
function restartStory() {
  document.getElementById("choiceModal").classList.remove("show");
  document.getElementById("memoryPopup").classList.remove("show");

  document.getElementById("introText").innerHTML = "";
  document.getElementById("birthdayText").innerHTML = "";
  document.getElementById("finalText").innerHTML = "";

  document.getElementById("wishBox").classList.remove("show");
  document.getElementById("wishNote").classList.remove("show");
  document.getElementById("endingBadge").classList.remove("show");
  document.getElementById("restartBtn").classList.remove("show");

  const wishInput = document.getElementById("wishInput");
  if (wishInput) wishInput.value = "";

  const gift = document.getElementById("gift");
  if (gift) gift.classList.remove("explode");

  storyStarted = false;
  endingScenePlayed = false;
  photoIndex = 0;

  document
    .querySelectorAll(
      ".falling, .wish-star, .sky-memory-photo, .pastel-firework, .gift-mini-photo",
    )
    .forEach((el) => el.remove());

  showPage("page1");
  runIntro();
}
runIntro();
const wishInputZoomFix = document.getElementById("wishInput");

if (wishInputZoomFix) {
  wishInputZoomFix.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      wishInputZoomFix.blur();
      sendWish();
    }
  });
}
