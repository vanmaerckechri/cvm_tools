 "use strict";

document.addEventListener("DOMContentLoaded", function(event)
{
	let toggleMessage = function(pwdParent, pwdValue, originalPwdValue)
	{
		if (pwdValue != originalPwdValue)
		{
			if (!pwdParent.classList.contains("pwdRepeat-container_error"))
			{
				pwdParent.classList.remove("pwdRepeat-container_correct");
				pwdParent.classList.add("pwdRepeat-container_error");
			}
		}
		else
		{
			if (pwdParent.classList.contains("pwdRepeat-container_error"))
			{
				pwdParent.classList.remove("pwdRepeat-container_error");
				pwdParent.classList.add("pwdRepeat-container_correct");
			}			
		}
	}

	let compareRepeatPwd = function(originalPwd, event)
	{
		let pwd = event.target;
		let pwdValue = pwd.value;
		let pwdParent = pwd.parentNode;
		let originalPwdValue = originalPwd.value;

		toggleMessage(pwdParent, pwdValue, originalPwdValue);
	}

	let compareOriginalPwd = function(pwd, event)
	{
		let originalPwd = event.target;
		let pwdValue = pwd.value;
		let pwdParent = pwd.parentNode;
		let originalPwdValue = originalPwd.value;

		toggleMessage(pwdParent, pwdValue, originalPwdValue);
	}

	let initPwdRepeat = function()
	{
		let pwdRepeatContainer = document.querySelectorAll(".pwdRepeat-container");
		for (let i = pwdRepeatContainer.length - 1; i >= 0; i--)
		{
			// check if input repeat pwd container has a class that start with "target_"
			for (let j = pwdRepeatContainer[i]["classList"].length - 1; j >= 0; j--)
			{
				let className = pwdRepeatContainer[i]["classList"][j];
				if (className.indexOf("target_") != -1)
				{
					let idCtr = className.slice(7, className.length);
					let targetContainer = document.getElementById(idCtr);
					let originalPwd = targetContainer.querySelector("input");

					// build event compare
					let pwdRepeat = pwdRepeatContainer[i].querySelector("input");
					pwdRepeat.addEventListener("input", compareRepeatPwd.bind(this, originalPwd), false);
					originalPwd.addEventListener("input", compareOriginalPwd.bind(this, pwdRepeat), false);
				}
			}
		}
	}

	initPwdRepeat();
});

/* 	
	(sass: "assets/cvm/sass/_pwdrepeat.scss")

	HTML:

	<link rel="stylesheet" href="assets/cvm/css/cvm_style.css">

	<div id="repeat01">
		<input type="password" name="pwd" required>
	</div>

	<div class="pwdStrength-container target_repeat01">
		<input type="password" name="pwd" required>
	</div>

    <script type="text/javascript" src="assets/cvm/js/cvm_pwdrepeat.js"></script>
*/


