window.onload = function() {

	const video = document.getElementById("video");
	const playButton = document.getElementById("playpause");
	const muteButton = document.getElementById("mute");
	const fullScreenButton = document.getElementById("full-screen");
	const seekBar = document.getElementById("seek-bar");
	const progressBar = document.getElementById('progress-bar');
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

	    // Update the button class
	    muteButton.className = "unmute";
	  }
	});

	/* FULL SCREEN BUTTON */

	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
	  if (video.requestFullscreen) {
	    video.requestFullscreen();
	  } else if (video.mozRequestFullScreen) {
	    video.mozRequestFullScreen();
	  } else if (video.webkitRequestFullscreen) {
	    video.webkitRequestFullscreen();
	  }
	});


	/* PLAYBACK */

	video.addEventListener('timeupdate', function() {
	   let percentage = Math.floor((100 / video.duration) *
	   video.currentTime);
	   progressBar.value = percentage;
	});

	progressBar.addEventListener('click', function(e) {
	  let percent = e.offsetX * this.max / this.offsetWidth;
	  video.currentTime = video.duration * (percent / 100);
	});

		/*To show the time*/ 
	video.addEventListener('timeupdate', function() {
	  let minutes = Math.floor(video.currentTime / 60);
	  let seconds = Math.floor(video.currentTime - minutes * 60);
	  let m = minutes < 10 ? "0" + minutes + ":":minutes;
	  let s = seconds < 10 ? "0" + seconds : seconds;
	  currentTimeDisplay.innerHTML = ( m + s );
	});

/*	function updateTime() {
		currentTimeDisplay.innerHTML = video.currentTime;
	};*/

		/*To show the duration*/
	if (video.readyState = 1) {
	  let minutes = Math.floor(video.duration / 60);
	  let seconds = Math.floor(video.duration - minutes * 60);
	  let m = minutes < 10 ? "0" + minutes + ":":minutes;
	  let s = seconds < 10 ? "0" + seconds : seconds;
	  videoDuration.innerHTML = (" " +  m + s + " ");
	};	
	/*const calcDuration = setInterval(function() {
		if(video.readyState > 0) {
			let minutes = parseInt(video.duration / 60, 10);
			let seconds = video.duration % 60;

			videoDuration.innerHTML = minutes + ":" + seconds;

			clearInterval(calcDuration);
		}
	}, 200);*/	

	/*// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
	  // Calculate the new time
	  let time = video.duration * (seekBar.value / 100);

	  // Update the video time
	  video.currentTime = time;
	});

	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
	  // Calculate the slider value
	  let value = (100 / video.duration) * video.currentTime;

	  // Update the slider value
	  seekBar.value = value;
	});

	// Pause the video when the slider handle is being dragged
	seekBar.addEventListener("mousedown", function() {
	  video.pause();
	});

	// Play the video when the slider handle is dropped
	seekBar.addEventListener("mouseup", function() {
	  video.play();
	});
	*/




	/* VOLUME CONRTOLS */

	// Event listener for the volume bar
	volumeBar.addEventListener("change", function() {
	  // Update the video volume
	  video.volume = volumeBar.value;
	});

}





























