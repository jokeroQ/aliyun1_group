(function () {
					function resizeBaseFontSize() {
						var rootHtml = document.documentElement,
							deviceWidth = rootHtml.clientWidth;
						if (deviceWidth > 768) {
							deviceWidth = 768;
						}
						rootHtml.style.fontSize = deviceWidth /7.68 + "px";
					}
					resizeBaseFontSize();
					window.addEventListener("resize", resizeBaseFontSize, false);
					window.addEventListener("orientationchange", resizeBaseFontSize, false);
				})();
				