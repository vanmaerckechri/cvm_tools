 "use strict";

document.addEventListener("DOMContentLoaded", function(event)
{
	let modalContainerList = document.querySelectorAll(".modal-container");
	let modalButtonList = document.querySelectorAll(".modal-btn");
	let ctrLength = modalContainerList.length;
	let btnLength = modalButtonList.length;

	for (let i = btnLength - 1; i >= 0; i--)
	{
		// check if modal id button start with "modal-btn_"
		let idModalBtn = modalButtonList[i].id;
		if (idModalBtn.indexOf("modal-btn_") != -1)
		{
			// get modal container (container.id = button.id - "modal-btn_")
			let idModalCtr = idModalBtn.slice(10, idModalBtn.length);
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
	}
});

/* 	
	HTML:

	<link rel="stylesheet" href="assets/cvm/css/cvm_style.css">

    <div id="name01" class="modal-container hidden">
		...
    </div>
    <button id="modal-btn_name01" class="modal-btn">open</button>

    <script type="text/javascript" src="assets/cvm/js/cvm_modal.js"></script>
*/


