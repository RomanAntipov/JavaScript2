var config = [{
	href: '/',
	name: "Главная"
}, {
	href: '/cabinet',
	name: "Личный кабинет"
}, {
	href: '/promo',
	name: "Промоакции",
	items: [{
			href: '/spring',
			name: "Весенняя рапродажа"
		}, {
			href: '/50pers',
			name: "Каждый второй товар - за 50%"
		}],
}, {
	href: '/payandsheep',
	name: "Доставка и оплата",
	items: [{
			href: '/sheeping',
			name: "Правила доставки"
		}, {
			href: '/pay',
			name: "Способы оплаты"
		}],
}];

class Container {
	constructor(id) {
		this.id = id;
	}
	remove(){
		var rem = document.getElementById(this.id);
		console.log (rem);
		rem.remove();
	}
};

class Menu extends Container {
	static info(){
		console.log('show info');
	}
	constructor(id, config){
		super();
		this.id = id;
		this.items = [];
		this.createItems(config);
	}
	createItems(config){
		for (let i = 0; i < config.length; i++) {
			this.items.push(new MenuItem(config[i].href, config[i].name));
			if (config[i].items) {
				console.log (config[i].items,'submenu');
				var sm = new Menu("submenu",config[i].items);
				console.log (sm);
				this.items.push(sm);
			}
			else {
				console.log (config[i].items,'not submenu');
			}
		}
	}
	create(){
		document.write(this.render());
	}
	render(){
		let result = '<ul id="' + this.id + '">';

		for (let i = 0; i < this.items.length; i++) {
			result += this.items[i].render();
		}

		result += '</ul>';
		return result;
	}
};

class MenuItem extends Container {
	constructor(href, name){
		super();
		this.href = href;
		this.name = name;
	}
	render(){
		return '<li><a href="' + this.href + '">' + this.name + '</a></li>';
	}
}

let menu = new Menu("main-menu", config);
menu.create();
Menu.info();