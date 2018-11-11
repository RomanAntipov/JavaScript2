// взаимодействие с интерфейсом на клиенет (клики по кнопкам)
// запрос к API
// API отвечает на наши запросы
// в зависимости от ответов - перерисовываем интерфейс с учетом ответов
let Api = {
	list: 'review.list.json',
	add: 'review.add.json',
	submit: 'review.submit.json',
	delete: 'review.delete.json'
};
class Feedback {
	constructor() {
		// this.itemsCount = 0;
		// this.totalAmount = 0;
		this.items = [];
		this.request(Api.list);
		// this.setEvents();
	}
	onAdd(event){
		// let id = parseInt($(event.currentTarget).attr('data-id'));
		// console.log(id);
		// if (id) {
		// 	this.request(Api.add, 'id_comment' + id)
		// }
	}
	onDel(event){
		let id = parseInt($(event.currentTarget).attr('data-id'));
		console.log(id);
		if (id) {
			this.request(Api.delete, 'id_comment' + id)
		}
	}
	onSubm(event) {
		let id = parseInt($(event.currentTarget).attr('data-id'));
		console.log(id);
		if (id) {
			this.request(Api.submit, 'id_comment' + id);
		}
	}
	setEvents() {
		console.log('setEvents');
		$('.btn-add').on('click', this.onAdd.bind(this));
		$('.btn-delete').on('click', this.onDel.bind(this));
		$('.btn-submit').on('click', this.onSubm.bind(this));
	}
	getProduct(productId) {
		return this.items.find(function(item){
			return item.id == productId;
		});
	}
	deleteComment(result) {
		console.log (result);
		if (result) alert('Комментарий удалён'); 
	}
	submitComment(result) {
		console.log (result);
		if (result) alert('Комментарий одобрен'); 
	}
	addProduct(product) {
		let item = this.getProduct(product.id);

		if (!item) {
			this.items.push(product);
		} else {
			++item.count;
		}
	}
	process(url, response){
		if (response.comments || response.result) {
			switch (url) {
				case Api.list:
					this.items = response.comments;
					console.log(this.items);
					break;
				case Api.add:
					this.addProduct(response.comments);
					break;
				case Api.delete:
					console.log (response.result)
					this.deleteComment(response.result);
					break;
				case Api.submit:
					this.submitComment(response.result);
					break;
			}
			// this.calc();
			this.render();
		}
	}
	// calc() {
	// 	this.itemsCount = 0;
	// 	this.totalAmount = 0;

	// 	this.items.forEach(function(item){
	// 		if (item.count > 0) {
	// 			this.itemsCount += item.count;
	// 			this.totalAmount += item.price * item.count;
	// 		}
	// 	}, this);
	// }
	render() {
		var fbcontent = '';

		for (let i = 0; i < this.items.length; i++) {
			fbcontent += '<div id="comment'+ this.items[i].id_comment + '"><p>Comment № ' + this.items[i].id_comment + '</p><p>' + this.items[i].text + '</p>' + '<div><a href="#" class="btn-submit" data-id="' + this.items[i].id_comment + '">Одобрить</a> <span> &#8195; </span>  <a href="#" class="btn-delete" data-id="' + this.items[i].id_comment + '">Удалить</a></div>' + '</div>';
		}

		$('#feedback').html(fbcontent); // публикация сгенерированного содержания отзывов
		this.setEvents(); //Обработчик событий устанавливаем уже после того, как сгенерировалась страница с отзывами.


	}
	request(url, data) {
		$.get({
			url: url,
			data: data,
			dataType: 'json',
			context: this,
			success: function(response) {
				console.log ('response: ', response);
				this.process(url, response);
			},
			error: function(error){
				console.log(error);
			}
		});
	}
};

$(document).ready(function(){
	window.feedback = new Feedback();
});