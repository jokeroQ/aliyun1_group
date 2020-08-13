(function () {
					function resizeBaseFontSize() {
						var rootHtml = document.documentElement,
							deviceWidth = rootHtml.clientWidth;
						
						rootHtml.style.fontSize = deviceWidth /10 + "px";
					}
					resizeBaseFontSize();
					window.addEventListener("resize", resizeBaseFontSize, false);
					window.addEventListener("orientationchange", resizeBaseFontSize, false);
				})();
				

Array.of(...document.getElementsByClassName("right")).forEach(e => 
	e.onclick = function(){
	let text = this.nextElementSibling.style.display;
		if(text == "none"){
			this.nextElementSibling.style.display = "block";
		}else{
			this.nextElementSibling.style.display = "none";
		}
	}
);