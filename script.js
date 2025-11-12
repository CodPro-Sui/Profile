const titles = [
  "CodPro",
  "a Software engineer at Google",
  "C++ developer",
  "build crog language",
  "Open source Contributor"
];

const highlight = document.querySelector("#highlight");

let titleInd = 0,
  charInd = 0,
  writeCharTime = 300,
  clearCharTime = 50;

const typeEffect = () => {
  const currTitle = titles[titleInd];
  highlight.innerHTML = currTitle.slice(0, charInd++);
  if (charInd < currTitle.length) {
    setTimeout(typeEffect, writeCharTime);
  } else {
    setTimeout(clearEffect, clearCharTime)
  }
}

const clearEffect = () => {
  const currTitle = titles[titleInd];
  highlight.innerHTML = currTitle.slice(0, charInd--);
  if (charInd > 0) {
    setTimeout(clearEffect, clearCharTime)
  } else {
    titleInd = (titleInd + 1) % titles.length;
    setTimeout(typeEffect, clearCharTime)
  }
}
typeEffect()

// card develop
const quotes = {
  names: ["CodPro", "Naushad", "Lious", "Charles", "Chinki", "Sarmal", "Cisious", "Srival", "Mohammad", "Aliam"],
  description: [
    "I am a software engineer at Google. I know multiple languages like C, C++, Java, Python and JavaScript.",
    "Hey I am Naushad a fashion designer. I am able to make modern UI-UX for web pages.",
    "Hi, I am Lious, a creative full-stack developer who loves building high-performance web apps.",
    "I am Charles, a data scientist passionate about AI and machine learning models.",
    "I am Chinki, a graphic designer who brings ideas to life through color and creativity.",
    "I am Sarmal, a backend developer specializing in Node.js and cloud-based APIs.",
    "I am Cisious, a cybersecurity expert ensuring systems remain safe and secure.",
    "I am Srival, a mobile app developer who builds user-friendly Android and iOS apps.",
    "I am Mohammad, a blockchain developer exploring the future of decentralized technology.",
    "I am Aliam, a game developer creating immersive 3D worlds and gaming experiences."
  ],
  jobAt: ["Google", "Amazon", "Netflix", "Amazon", "Microsoft", "Uber", "Netflix", "Microsoft", "Uber", "Microsoft"],
  subTitle: ["Software Engineer", "App Developer", "Graphic Designer", "App Development", "Swift Engineer", "C++ Developer", "Bug Fixer", "DevOps Engineer", "Java Developer", "Full Stack Developer"],
  urls: ["profile10.jpg", "profile2.jpg", "profile5.jpg", "profile4.jpg", "profile6.jpg", "profile3.jpg", "profile7.jpg", "profile8.jpg", "profile9.jpg", "profile1.jpg"]
}

let $ = s => document.querySelector(s);
const card = {
  title: $("#title"),
  subTitle: $("#subTitle"),
  image: $("#image"),
  description: $("#des"),
  rightSide: $(".right-side")
}

var index = 0;

function changeAuto() {
  let cardd = $(".card");
  cardd.classList.add("fade");
  setTimeout(() => {
    card.image.src = quotes.urls[index];
    card.title.innerHTML = quotes.names[index];
    card.subTitle.innerHTML = quotes.subTitle[index];
    card.description.innerHTML = quotes.description[index];
    card.rightSide.innerHTML = `<i>-${quotes.jobAt[index]}</i>`;
    cardd.classList.remove("fade");
    index = (index + 1) % quotes.names.length;
  }, 600)
  
}


changeAuto();
setInterval(changeAuto, 3000);


const links = document.querySelector(".links");
const manu = document.querySelector(".manu");
let open = false;
manu.onclick = () =>{
  open = !open;
  links.style.display = open?"flex":"none";
manu.innerHTML = `<i class="fa-solid fa-${open?"xmark":"bars"}"></i>`;
}