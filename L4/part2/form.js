class Form {
	constructor(id, config){
		this.id = id;
		this.items = [];
		this.result = "";
		if (!config) {
			this.fetchMenu();
		} else {
			this.createItems(config);
		}
		console.log (this.id);
	}
	fetchMenu(){
		var url = "http://localhost/test/form.json";
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();
		var self = this;

		xhr.onreadystatechange = function(){
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					var config = JSON.parse(xhr.responseText);
					console.log (config);
					self.createItems(config);
					// self.create();
				}
			}
		};
	}
	createItems(config){
		let result = '';
		for (let i = 0; i < config.length; i++) {
			result += '<option value="'+ config[i].twnval + '">' + config[i].twn + '</option>'
			};
		console.log (result);
		console.log (this.id);
		var sel = document.getElementById(this.id);
		console.log (sel);
		sel.innerHTML = result;
	}

};

let form = new Form("sel");
// console.log (form.result);
