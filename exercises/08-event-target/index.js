window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		alert("tipo " + event.target.nodeName + " con id " + event.target.id);
	});
};
