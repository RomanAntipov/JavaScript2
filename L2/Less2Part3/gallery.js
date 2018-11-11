class Container {
	remove() {
		document.getElementById(this.id).remove();
	}
};

class Gallery extends Container {
	constructor(id, config){
		super();
		this.id = id;
		this.items = [];
		if (!config) {
			this.fetchMenu();
		} else {
			this.createItems(config);
		}
		console.log (this.id);
	}
	fetchMenu(){
		var url = "http://localhost/test/5/gallery.json";
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
					self.create();
				}
			}
		};
	}
	createItems(config){
		for (let i = 0; i < config.length; i++) {
			this.items.push(new GalleryItem(config[i].preview, config[i].full));
		}
	}
	create(){
		document.write(this.render());
	}
	render(){
		let result = '';

		for (let i = 0; i < this.items.length; i++) {
			result += this.items[i].render();
		}

		// result += '</ul>';
		return result;
	}
};

class GalleryItem extends Container {
	constructor(src, full){
		super();
		this.src = src;
		this.full = full;
	}
	render(){
		console.log (this.full, this.src);
		return '<a href="' + this.full + '"><img src="' + this.src + '" height="100px"/></a>';
	}
}

let gallery = new Gallery("galleryImages");
