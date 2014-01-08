(function(){
	var rules = [
		{
			id: 'offerCheckbox',				//id of the element to uncheck
			urls: [								//urls to search in
				'get.adobe.com/flashplayer',
				'get.adobe.com/reader'
			]
		}
	];

	//TODO: translations...
	var warning_message = "You are about to install a potentially unwanted program. Are you sure you want to proceed?";

	for(i = 0; i < rules.length; i++){ //for each rule
		var id = rules[i].id;
		var urls = rules[i].urls;
		for(j = 0; j < urls.length; j++){ //for each url
			if(location.href.indexOf(urls[j]) != -1){
				/*  at this time, the DOM tree is ready, but Adobe creates the checkbox
				 *  dynamically, so we have to wait for it, using a timer
				 */
				setupTimer(id);
				break;
			}
		}
	}

	function setupTimer(id){
		var tmr = setInterval(function(){
			var ck = document.getElementById(id);
			if(typeof ck !== "undefined" && ck != null){
				clearInterval(tmr); //stop searching
				if(ck.checked){
					ck.click();
				}
				ck.addEventListener("click", function(){ //warn user if manually clicks
					if(ck.checked && !confirm(warning_message)){
						setTimeout(function(){ //allow the browser to process the event before clicking again
							ck.click();
						}, 1);
					}
				}, false);
			}
		}, 1000);
	}
})();
