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

// Slideshow
playButton.addEventListener("click", changePlaystate);
previousButton.addEventListener("click", previousImage);
nextButton.addEventListener("click", nextImage);

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

// Flip Card
var cards =  document.querySelectorAll(".card");

// Change Artist
const cindy = document.querySelector("#cindy");
const evelyn = document.querySelector("#evelyn");
const martin = document.querySelector("#martin");

const pic = document.querySelector("#artist-picture");
const artistName = document.querySelector("#artist-name");
const desc = document.querySelector("#desc");

// Guitar Hero
const canvas = document.querySelector(".guitar-hero-container");
const playScreen = document.querySelector(".play-screen-container");
const playerScore = document.querySelector("#score-text");
const playerLives = document.querySelector("#lives-text");

const notes = [
  document.querySelector("#note-1"),
  document.querySelector("#note-2"),
  document.querySelector("#note-3"),
  document.querySelector("#note-4")
];

var maxY = canvas.offsetHeight / 1.15;
var moveSpeed = 2;
var score = 0;
var lives = 3;
var intervalID;



// Slideshow
// Function to change the playstate of slideshow (play/pause)
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

// Function to go to the next image
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

// Function to go to the previous image
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

// Function to change the image
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

// Start changing image of slideshow on load
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

// Function to rotate image
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
// Add event listener to detect player click on card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flip-card");
  });
});



// Add event listener to all the artists' portraits
cindy.addEventListener("click", function()
{
  ChangeArtist("cindy");
});

evelyn.addEventListener("click", function()
{
  ChangeArtist("evelyn");
});

martin.addEventListener("click", function()
{
  ChangeArtist("martin");
});

// Function to change the artist
function ChangeArtist(name)
{
  if (name == "cindy")
  {
    pic.src = "images/cindy_blackman.png";
    artistName.innerHTML = "Cindy Blackman";
    desc.innerHTML = "Cindy Blackman is a highly acclaimed American jazz drummer who has made significant contributions to the world of music. Her dynamic playing style, characterized by a combination of power, precision, and finesse, has earned her widespread acclaim and admiration from both critics and fellow musicians.";
  }
  else if (name == "evelyn")
  {
    pic.src = "images/evelyn_glennie.png";
    artistName.innerHTML = "Evelyn Glennie";
    desc.innerHTML = "Evelyn Glennie, a virtuoso percussionist, transforms sound into a captivating dance of emotions. Deaf since the age of 12, she defies conventions, using her heightened sense of touch to create symphonies that resonate with the rhythm of life itself. With her mallets and boundless imagination, Glennie invites us to experience the world in a new symphony of vibrations.";
  }
  else if (name == "martin")
  {
    pic.src = "images/martin_grubinger.png";
    artistName.innerHTML = "Martin Grubinger";
    desc.innerHTML = "Martin Grubinger, a rhythmic sorcerer of percussion, conjures a mesmerizing fusion of beats and melodies. With boundless energy and a percussive arsenal at his fingertips, he paints symphonic tapestries that bridge genres and captivate audiences. Grubinger's rhythmic artistry dances between tradition and innovation, proving that the world of percussion knows no limits when guided by his extraordinary hands.";
  }
}



// Guitar Hero
//function to pick random number from a min-max range
function RandomRange(min,max){
  return Math.round(Math.random()*(max-min)+min);
}

// Function to give the notes a random start position when game starts
function InitializeNotes()
{
  notes.forEach(note => {
    var randNum = RandomRange(0, canvas.offsetWidth / 3);
    note.style.top = randNum + "px";
  });
}

// Function to check how big each note should be according to the flex container it's in
function StyleNotes()
{
  // Set the notes' left so it is on the guitar line
  notes[0].style.left = (canvas.offsetWidth / 6.7) + "px";
  notes[1].style.left = (canvas.offsetWidth / 2.85) + "px";
  notes[2].style.left = (canvas.offsetWidth / 1.85) + "px";
  notes[3].style.left = (canvas.offsetWidth / 1.35) + "px";
}

// Function to update the notes
function UpdateNotes() {
  // Constantly check if window size changed, scale the notes accordingly.
  StyleNotes();

  // Loop through the list of notes
  notes.forEach(note => {
    // Scale each note according to the width of the flex container
    note.style.width = note.style.height = (canvas.offsetWidth / 6.7) + "px";
    if (note.style.width >= "65px")
    {
      note.style.width = note.style.height = "65px";
    }

    // Convert the current top value of the note to float
    const currentTop = parseFloat(getComputedStyle(note).top);
    // Apply the new top value according to the movespeed
    note.style.top = (currentTop + moveSpeed) + "px";

    // Check if note has reached near the bottom of the flex container
    if (currentTop >= maxY) 
    {
      score -= 5;
      lives -= 1;
      note.style.top = "0px";
      ChangeNoteColor(note);
    }
  });
}

// Function to check if player clicks on a note
function handleClick(note) {
  // Convert the current top value of the note to float
  var currentTopValue = parseFloat(note.style.top);

  // If player clicked the note while it is in the range
  if (currentTopValue >= 460 && currentTopValue <= 530) 
  {
    score += 5;
    var randNum = RandomRange(0, canvas.offsetWidth / 3);
    note.style.top = randNum + "px";
  } 
  else 
  {
    score -= 5;
    lives -= 1;
    ChangeNoteColor(note);
  }
}

// Function to handle click
function createClickHandler(note) {
  return function() {
    handleClick(note);
  };
}

// Add event listeners to all the notes within the list
for (let i = 0; i < notes.length; i++) {
  notes[i].addEventListener("click", createClickHandler(notes[i]));
}

// Function to change the color of the note
function ChangeNoteColor(note)
{
  // Add a class that turn the note red
  note.classList.add("missed-note");

  // Set a timeout to remove the class after a delay
  setTimeout(function() {
    note.classList.remove("missed-note");
  }, 1000);
}

// Function to check if the game is over
function CheckGameOver()
{
  if (lives <= 0)
  {
    // Stop the game loop
    clearInterval(intervalID);
    // Show the play game screen
    playScreen.style.display = 'flex';
    // Readd the event listener to the flex container
    canvas.addEventListener("click", StartGame);
    // Reset stats
    score = 0;
    lives = 3;
  }
}

// Function to update player's stats
function UpdateStats()
{
  // Limit score
  if (score < 0)
  {
    score = 0;
  }

  // Update stats
  playerScore.innerHTML = "Score: " + score;
  playerLives.innerHTML = "Lives: " + lives;
}

// Add event listenr to flex container on start
canvas.addEventListener("click", StartGame);

// Function to handle when player starts game
function StartGame()
{
  InitializeNotes();
  // Hide play screen
  playScreen.style.display = 'none';

  // Main game loop
  // Store it inside a var called intervalID and run it at ~60fps
  intervalID = setInterval(function()
  {
    UpdateNotes();
    UpdateStats();
    CheckGameOver();
  }, 16);

  // Remove the event listener from canvas
  canvas.removeEventListener("click", StartGame);
}