// Header Slideshow
var index = 0;
var images = [];
var time = 2000;
var play = true;
var bannerImage = document.querySelector("#banner-image");

images[0] = "percussion1.jpg";
images[1] = "percussion2.jpg";
images[2] = "percussion3.jpg";

const playButton = document.querySelector("#play");
const previousButton = document.querySelector("#left");
const nextButton = document.querySelector("#right");

// Scroll threshold in pixels
// const threshold = 300; 

playButton.addEventListener("click", changePlaystate);

previousButton.addEventListener("click", previousImage);

nextButton.addEventListener("click", nextImage);

function changePlaystate()
{
  if (play)
  {
    play = false;
    playButton.src = "images/play.png";
  }
  else 
  {
    play = true;
    playButton.src = "images/pause.png";
  }
}

function nextImage() {
  index++;
  if (index > images.length - 1) 
  {
    index = 0;
  }

  // Add fade in and out transition
  bannerImage.style.opacity = "0";
  setTimeout(function() {
    bannerImage.src = `images/${images[index]}`;
    bannerImage.style.opacity = "1";
  }, 100);
}

function previousImage() {
  index--;
  if (index < 0) 
  {
    index = images.length - 1;
  }

  // Add fade in and out transition
  bannerImage.style.opacity = "0";
  setTimeout(function() {
    bannerImage.src = `images/${images[index]}`;
    bannerImage.style.opacity = "1";
  }, 100);
}

function changeImage()
{
  if (play)
  {
    bannerImage.src = `images/${images[index]}`;

    if (index < images.length - 1)
    {
      index++;
    }
    else
    {
      index = 0;
    }

    // Add fade in and out transition
    bannerImage.style.opacity = "0";
    setTimeout(function() {
      bannerImage.src = `images/${images[index]}`;
      bannerImage.style.opacity = "1";
    }, 100);
  }
  
  setTimeout(changeImage, time);
}

window.onload = changeImage;

// Page Management
//target all elements to save to constants
const homeBtn = document.querySelector("#homeBtn");
const instrumentBtns = document.querySelectorAll(".instrumentBtn");
const professionBtns = document.querySelectorAll(".professionBtn");
const simulationBtns = document.querySelectorAll(".simulationsBtn");
var allpages = document.querySelectorAll(".page");

//AShow home page upon start
show("#home");

//function to hide all pages
function hideall()
{ 
  //go through all subtopic pages
  for(let onepage of allpages)
  { 
    //hide it
    onepage.style.display = "none"; 
  }
}

//function to show selected page
function show(page)
{ 
  hideall();
  //select the page based on the parameter passed in
  let onepage = document.querySelector(page);
  //show the page
  onepage.style.display = "block";
}

function scrollToTop()
{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
homeBtn.addEventListener("click", function () {
  show("#home");
  scrollToTop();
});

instrumentBtns.forEach((instrumentBtn) => {
  instrumentBtn.addEventListener("click", function () {
    show("#instruments");
    scrollToTop();
  });
});

professionBtns.forEach((professionBtn) => {
  professionBtn.addEventListener("click", function () {
    show("#professional");
    scrollToTop();
  });
});

simulationBtns.forEach((simulationBtn) => {
  simulationBtn.addEventListener("click", function () {
    show("#simulation");
    scrollToTop();
  });
});

// Plays instrument sound
const instrument = document.querySelectorAll(".play-instrument");
// Controls how Xylophone simulation works
const xylophoneKeys = document.querySelectorAll(".xylophone .key");

// Create a new audio and play it
function playSound(key){
  const audio = new Audio(`audio/${key}.mp3`);
  audio.play();
}

// Add event listenener to detect player click for every key on the xylophone & play the corresponding sound
xylophoneKeys.forEach((key) => {
  key.addEventListener("click", () => playSound(key.dataset.key));
});

// Add event listenener to detect player click for each instrument & play the corresponding sound
instrument.forEach((key) => {
  key.addEventListener("click", () => playSound(key.dataset.key));
});

// Roate the menu button when clicked
var menu =  document.querySelector(".menu");
var expandMenu =  document.querySelector(".expand");
var isRotated = false;

menu.addEventListener("click", rotateImage);

function rotateImage()
{
  isRotated = !isRotated;

  if (isRotated) 
  {
    menu.style.transform = "rotate(90deg)";
    setTimeout(function() {
      expandMenu.style.height = "8em";
    }, 10);
  } 
  else 
  {
    menu.style.transform = "rotate(0deg)";
    setTimeout(function() {
      expandMenu.style.height = "0em";
    }, 10);
  }
}

// Attach a scroll event listener to the window object
// window.addEventListener("scroll", handleScroll);

// // Event handler for the scroll event
// function handleScroll() {
//   // Get the current scroll position
//   const scrollPosition = window.pageYOffset;

//   // Check if the scroll position has passed the threshold
//   if (scrollPosition > threshold) {
//     scrollToTop();
//   }
// }