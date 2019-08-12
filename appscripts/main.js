/*Js for Assignment3*/
require(
	[],

	function () {
        console.log("yo");
	}
)

	//center header element using Js getElementbyId
	var headerEle = document.getElementById("hdr");
	headerEle.style.textAlign = "center";

	

	/* Set font family using Js getElementsByClassName in article; 
	Using stackoverflow soln 
	https://stackoverflow.com/questions/8538343/how-to-get-element-by-class-name*/
	var parFont = document.getElementsByClassName("story");
	
	for (var i = 0; i < parFont.length; i++) {
	    parFont[i].style.fontFamily = "Georgia,serif";
	}




	

	
