window.onload = function() {

	const video = document.getElementById("video");
	const playButton = document.getElementById("playpause");
	const muteButton = document.getElementById("mute");
	const fullScreenButton = document.getElementById("full-screen");
	const exitFullScreenButton = document.getElementById("exit-full-screen");
	const seekBar = document.getElementById("seek-bar");
	const progressBar = document.getElementById("progress-bar");
	const volumeBar = document.getElementById("volume-bar");
	const currentTimeDisplay = document.getElementById("current-time");
	const videoDuration = document.getElementById("total-time");

	/* PLAY AND PAUSE (remember to add play/pause on const video too)*/

	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
	  if (video.paused == true) {
	    // Play the video
	    video.play();

	    // Update the button class to 'pause'
	    playButton.className = "pause";
	  } else {
	    // Pause the video
	    video.pause();

	    // Update the button class to 'play'
	    playButton.className = "play";
	  }
	});


	/* MUTE BUTTON */

	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
	  if (video.muted == false) {
	    // Mute the video
	    video.muted = true;

	    //Move volume bar to 0
	    volumeBar.value = 0;

	    // Update the button class
	    muteButton.className = "mute";
	  } else {
	    // Unmute the video
	    video.muted = false;

	    //Move volume bar to 1
	    volumeBar.value = 1;

	    video.volume = 1;

	    // Update the button class
	    muteButton.className = "unmute";
	  }
	});

	/* FULL SCREEN BUTTON */

	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
	  if (video.requestFullscreen) {
	    video.requestFullscreen();
	    fullScreenButton.style.display = "none";
	    exitFullScreenButton.style.display = "inline-block";
	  } else if (video.mozRequestFullScreen) {
	    video.mozRequestFullScreen();
	    fullScreenButton.style.display = "none";
	    exitFullScreenButton.style.display = "inline-block";
	  } else if (video.webkitRequestFullscreen) {
	    video.webkitRequestFullscreen();
	    fullScreenButton.style.display = "none";
	    exitFullScreenButton.style.display = "inline-block";
	  }
	});

	// Event listener for the exit full-screen button 
	exitFullScreenButton.addEventListener("click", function() {
	  if (video.exitFullscreen) {
	    video.exitFullscreen();
	    exitFullScreenButton.style.display = "none";
	    fullScreenButton.style.display = "inline-block";
	  } else if (video.mozCancelFullScreen) {
	    video.mozCancelFullScreen();
	    exitFullScreenButton.style.display = "none";
	    fullScreenButton.style.display = "inline-block";
	  } else if (video.webkitExitFullscreen) {
	    video.webkitExitFullscreen();
	    exitFullScreenButton.style.display = "none";
	    fullScreenButton.style.display = "inline-block";
	  }
	});


	/* PLAYBACK */

	// Show the progress bar
	video.addEventListener('timeupdate', function() {
	   let percentage = Math.floor((100 / video.duration) *
	   video.currentTime);
	   progressBar.value = percentage;
	});

	// Make progress bar clickable
	progressBar.addEventListener('click', function(e) {
	  let percent = e.offsetX * this.max / this.offsetWidth;
	  video.currentTime = video.duration * (percent / 100);
	});

	// Show the time
	video.addEventListener('timeupdate', function() {
	  let minutes = Math.floor(video.currentTime / 60);
	  let seconds = Math.floor(video.currentTime - minutes * 60);
	  let m = minutes < 10 ? "0" + minutes + ":":minutes;
	  let s = seconds < 10 ? "0" + seconds : seconds;
	  currentTimeDisplay.innerHTML = ( m + s );
	});


	// Show the duration
	if (video.readyState = 1) {
	  let minutes = Math.floor(video.duration / 60);
	  let seconds = Math.floor(video.duration - minutes * 60);
	  let m = minutes < 10 ? "0" + minutes + ":":minutes;
	  let s = seconds < 10 ? "0" + seconds : seconds;
	  videoDuration.innerHTML = (" " +  m + s + " ");
	};

	/* VOLUME CONRTOLS */

	// Event listener for the volume bar
	volumeBar.addEventListener("change", function() {
	  // Update the video volume
	  video.volume = volumeBar.value;
	});


	/* HIGHLIGHTING TRANSCRIPT*/

	video.addEventListener('timeupdate', function() {   
      let time = video.currentTime;

    if (time > 0.00 && time < 3.90) {
      let x = document.getElementById("highlight1");
      x.className += " highlight";
  	} else { 
  	  let y = document.getElementById("highlight1");
      y.className = " ";
  	}	
  	if (time >= 3.90 && time < 7.70) {
      let x = document.getElementById("highlight2");
      x.className += " highlight";
    } else {
      let y = document.getElementById("highlight2");
      y.className = " ";
    }
    if (time >= 7.70 && time < 11.00) {
      let x = document.getElementById("highlight3");
      x.className += " highlight";
    } else {  
  	  let y = document.getElementById("highlight3");
      y.className = " ";
  	}
	  if (time >= 11.00 && time < 13.70) {
      let x = document.getElementById("highlight4");
      x.className += " highlight";
  	} else {
  	  let y = document.getElementById("highlight4");
      y.className = " ";
    }
  	if (time >= 13.70 && time < 17.70) {
      let x = document.getElementById("highlight5");
      x.className += " highlight";
  	} else { 
  	  let y = document.getElementById("highlight5");
      y.className = " ";
  	}
	  if (time >= 17.70 && time < 22.37) {
      let x = document.getElementById("highlight6");
      x.className += " highlight";
  	} else {
  	  let y = document.getElementById("highlight6");
      y.className = " ";
    }
  	if (time >= 22.37 && time < 26.88) {
      let x = document.getElementById("highlight7");
      x.className += " highlight";
  	} else { 
  	  let y = document.getElementById("highlight7");
      y.className = " ";
  	}
	  if (time >= 26.88 && time < 30.92) {
      let x = document.getElementById("highlight8");
      x.className += " highlight";
  	} else {
  	  let y = document.getElementById("highlight8");
      y.className = " ";
    }
  	if (time >= 31.800 && time < 34.530) {
      let x = document.getElementById("highlight9");
      x.className += " highlight";
  	} else { 
  	  let y = document.getElementById("highlight9");
      y.className = " ";
  	}  	  	
	  if (time >= 34.530 && time < 39.130) {
      let x = document.getElementById("highlight10");
      x.className += " highlight";
  	} else {
  	  let y = document.getElementById("highlight10");
      y.className = " ";
    }
  	if (time >= 39.130 && time < 41.190) {
      let x = document.getElementById("highlight11");
      x.className += " highlight";
  	} else { 
  	  let y = document.getElementById("highlight11");
      y.className = " ";
  	}
	  if (time >= 42.050 && time < 46.000) {
      let x = document.getElementById("highlight12");
      x.className += " highlight";
  	} else {
  	  let y = document.getElementById("highlight12");
      y.className = " ";
    }
  	if (time >= 46.000 && time < 49.070) {
      let x = document.getElementById("highlight13");
      x.className += " highlight";
  	} else { 
  	  let y = document.getElementById("highlight13");
      y.className = " ";
  	}
	  if (time >= 49.070 && time < 53.560) {
      let x = document.getElementById("highlight14");
      x.className += " highlight";
  	} else {
  	  let y = document.getElementById("highlight14");
      y.className = " ";
    }
  	if (time >= 53.560 && time < 57.380) {
      let x = document.getElementById("highlight15");
      x.className += " highlight";
  	} else { 
  	  let y = document.getElementById("highlight15");
      y.className = " ";
  	}  	
  	if (time >= 57.380 && time < 59.85) {
      let x = document.getElementById("highlight16");
      x.className += " highlight";
  	} else { 
  	  let y = document.getElementById("highlight16");
      y.className = " ";
  }
});
}





























