	var menuItem = document.getElementsByClassName('menu-acco__item')

 	for(var i = 0; i < menuItem.length; i++) { 
 		menuItem.onclick = function () {
 			this.classList.toggle('--active');
		 }
	