 "use strict";

document.addEventListener("DOMContentLoaded", function(event)
{
	let checkPwdStrength = function(event)
	{
		let pwd = event.target.value;
		let pwdScore = pwd.length / 20;
		pwdScore = pwdScore > 1.5 ? 1.5 : pwdScore;
		let className;

		// regex [specialChar, lowerCase, UpperCase]
		let regex = [/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, /[a-z]/, /[A-Z]/, /[0-9]/];
		for (let i = regex.length - 1; i >= 0; i--)
		{
			if (regex[i].test(pwd) === true)
			{
				pwdScore += 0.5;
			}			
		}
		// view
		if (pwdScore < 1.8)
		{
			className = "pwdStrength-container_faible";
		}
		else if (pwdScore < 2.5)
		{
			className = "pwdStrength-container_moyen";
		}
		else
		{
			className = "pwdStrength-container_fort";
		}

		event.target.parentNode.className = "pwdStrength-container " + className;
	}

	let initPwdStrength = function()
	{
		let pwdStrength = document.querySelectorAll(".pwdStrength-container input");
		for (let i = pwdStrength.length - 1; i >= 0; i--)
		{
			pwdStrength[i].addEventListener("input", checkPwdStrength, false);
		}
	}

	initPwdStrength();
});

/* 	
	(sass: "assets/cvm/sass/_pwdstrength.scss")

	HTML:

	<link rel="stylesheet" href="assets/cvm/css/cvm_style.css">

	<div class="pwdStrength-container">
		<input type="password" name="pwd" required>
	</div>

    <script type="text/javascript" src="assets/cvm/js/cvm_pwdstrength.js"></script>
*/


