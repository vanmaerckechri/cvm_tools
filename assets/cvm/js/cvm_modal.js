 "use strict";

document.addEventListener("DOMContentLoaded", function(event)
{
	let modalButtonList = document.querySelectorAll(".modal-btn");
	let btnLength = modalButtonList.length;

	for (let i = btnLength - 1; i >= 0; i--)
	{
		// check if modal button has a class that start with "target_"
		modalButtonList[i]["classList"].forEach(function(className)
		{
			if (className.indexOf("target_") != -1)
			{
				// get modal container by id from part of the class button
				let idModalCtr = className.slice(7, className.length);
				let modalContainer = document.getElementById(idModalCtr);
				if (modalContainer.classList.contains("modal-container"))
				{
					// open/close button
					modalButtonList[i].addEventListener("click", function()
					{
						modalContainer.classList.toggle("hidden");
					}, false);

					// close (if click outside content)
					modalContainer.addEventListener("click", function(event)
					{
						if (modalContainer == event.target)
						{
							modalContainer.classList.toggle("hidden");
						}
					}, false);
				}
			}
		});
	}
});

/* 	
	HTML:

	<link rel="stylesheet" href="assets/cvm/css/cvm_style.css">

    <div id="name01" class="modal-container hidden">
		...
    </div>
    <button id="modal-btn" class="modal-btn target_name01">open</button>

    <script type="text/javascript" src="assets/cvm/js/cvm_modal.js"></script>
*/


