var rules = [
	{
		id: 'offerCheckbox',
		urls: [
			'get.adobe.com/flashplayer',
			'get.adobe.com/reader'
		]
	}
];

for(i = 0; i < rules.length; i++){
	var id = rules[i].id;
	var urls = rules[i].urls;
	for(j = 0; j < urls.length; j++){
		if(location.href.indexOf(urls[j]) != -1){
			setInterval(function(){
				var ck = document.getElementById(id);
				if(ck.checked){
					ck.click();
				}
			}, 1000);
			break;
		}
	}
}