 "use strict";

window.addEventListener("load", function(event)
{
	let launchAnime = function(animeContainer)
	{
		let animeDisplayList = animeContainer.querySelectorAll(".anime-display");
		for (let anime of animeDisplayList)
		{
			anime.style.transition = "";
			anime.classList.remove("hidden");
		}

		let animeMoveRightList = animeContainer.querySelectorAll(".anime-moveRight");
		for (let anime of animeMoveRightList)
		{
			anime.style.transition = "";
			anime.classList.remove("anime-moveRightWait");
		}

		let animeMoveLeftList = animeContainer.querySelectorAll(".anime-moveLeft");
		for (let anime of animeMoveLeftList)
		{
			anime.style.transition = "";
			anime.classList.remove("anime-moveLeftWait");
		}

		let animeScaleUpList = animeContainer.querySelectorAll(".anime-scaleUp");
		for (let anime of animeScaleUpList)
		{
			anime.style.transition = "";
			anime.classList.remove("anime-scaleUpWait");
		}

		let animeConsoleList = animeContainer.querySelectorAll(".anime-console");
		for (let anime of animeConsoleList)
		{
			let content = anime.textContent;
			anime.style.height = anime.offsetHeight + "px";
	        anime.textContent = "";
	        anime.classList.remove("anime-console");
	        let indexLetter = 0;
	        let interval = setInterval (function()
	        {
	            anime.textContent += content[indexLetter];
	            indexLetter += 1; 
	            if (content.length - 1 <= indexLetter)
	            {
	            	anime.style.height = "";
	                clearInterval(interval);
	            }
	        }, 1);
		}

		animeContainer.classList.remove("anime-container");
	}

	let detectAnime = function()
	{
		let displayAnimeContainerList = document.querySelectorAll(".anime-container");
		let headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
		let midHeight = window.pageYOffset + window.innerHeight / 2;

		for (let animeContainer of displayAnimeContainerList)
		{
			let disAnContainerTop = animeContainer.offsetTop;

			if (midHeight > disAnContainerTop)
			{
				launchAnime(animeContainer);
			}
		}
	}

	let initDisplayAnime = function() 
	{
		let animeList = document.querySelectorAll(".anime-display");
		for (let anime of animeList)
		{
			anime.style.transition = "opacity 0s";
			anime.classList.add("hidden");
		}
	}

	let initMoveHorizontalAnime = function() 
	{
		let animeMoveRightList = document.querySelectorAll(".anime-moveRight");
		for (let anime of animeMoveRightList)
		{
			anime.style.transition = "transition 0s, opacity 0s";
			anime.classList.add("anime-moveRightWait");
		}

		let animeMoveLeftList = document.querySelectorAll(".anime-moveLeft");
		for (let anime of animeMoveLeftList)
		{
			anime.style.transition = "transition 0s, opacity 0s";
			anime.classList.add("anime-moveLeftWait");
		}
	}

	let initScaleAnime = function() 
	{
		let animeList = document.querySelectorAll(".anime-scaleUp");
		for (let anime of animeList)
		{
			anime.style.transition = "scale 0s, opacity 0s";
			anime.classList.add("anime-scaleUpWait");
		}
	}

	let initAnime = function()
	{
		initDisplayAnime();
		initMoveHorizontalAnime();
		initScaleAnime();
		detectAnime();
	}

	initAnime();
	document.addEventListener("scroll", detectAnime, false);
});