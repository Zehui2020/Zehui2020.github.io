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

// Page Management
const homeBtn = document.querySelector("#homeBtn");
const instrumentBtns = document.querySelectorAll(".instrumentBtn");
const professionBtns = document.querySelectorAll(".professionBtn");
const simulationBtns = document.querySelectorAll(".simulationsBtn");
var allpages = document.querySelectorAll(".page");

// Plays instrument sound
const instrument = document.querySelectorAll(".listen-btn");
// Xylophone Simulation
const xylophoneKeys = document.querySelectorAll(".xylophone .key");

// Menu Button
var menu =  document.querySelector(".menu");
var expandMenu =  document.querySelector(".expand");
var isRotated = false;



// Slideshow
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
//Show home page upon start
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

// Scroll to top of the page when page changes
function scrollToTop()
{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/*Listen for clicks on the buttons*/
homeBtn.addEventListener("click", function () {
  // Show page
  show("#home");
  // Scroll to top of the page
  scrollToTop();
  // Reset the menu button
  isRotated = true;
  rotateImage();
});

instrumentBtns.forEach((instrumentBtn) => {
  instrumentBtn.addEventListener("click", function () {
    // Show page
    show("#instruments");
    // Scroll to top of the page
    scrollToTop();
    // Reset the menu button
    isRotated = true;
    rotateImage();
  });
});

professionBtns.forEach((professionBtn) => {
  professionBtn.addEventListener("click", function () {
    // Show page
    show("#professional");
    // Scroll to top of the page
    scrollToTop();
    // Reset the menu button
    isRotated = true;
    rotateImage();
  });
});

simulationBtns.forEach((simulationBtn) => {
  simulationBtn.addEventListener("click", function () {
     // Show page
    show("#simulation");
    // Scroll to top of the page
    scrollToTop();
    // Reset the menu button
    isRotated = true;
    rotateImage();
  });
});




// Play instrument sound
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



// Rotate menu button when clicked
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




// Flip the card when clicked
var cards =  document.querySelectorAll(".card");

// Add event listenener to detect player click on card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flip-card");
  });
});