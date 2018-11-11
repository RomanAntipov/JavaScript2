function cart () {

// var catalog = document.getElementById(catalog);

var cartTable = document.getElementById('cart');
var a=product.length;
console.log (a, cartContent);
for (var i=0; i<a; i++) {
	makeCatItem (product[i],price[i],productImage[i],i);
}

}

function makeCatItem (pn,pp,pi,num) {
	content = '<img src="' + pi + '" alt="' + pn + '" title="' + pn + '" /><br><h1>' + pn + '</h1><p>Price: $'+pp+'</p><p>Купить</p>';
	console.log (content);
	var catalog = document.getElementById('catalog');
	var makeItem = document.createElement('div');
	makeItem.id = 'product_'+num;
	catalog.appendChild(makeItem).innerHTML=content;
	makeItem.onclick = addToCart;

}

function addToCart (ev) {
	console.log ('Сработало нажатие!');
	var e = ev.target;
	console.log ('target: '+ e);
	var prodNum = e.id.split('_');
	var pn = +prodNum[1];
	console.log ('Выбран товар номер:' + pn);
	console.log ('Текущая длина массива: ' + cartContent.length);
	if (cartContent.length == 0) {
		cartContent.push(pn);
		cartContent.push(1);
	}
	else {
		var n = -1;
		for (var i=0; i<=cartContent.length; i=i+2) {
			console.log (n, i, pn);
			if (pn === +cartContent[i]) {
				n = i;
			}
		}


		// var a=+cartContent.indexOf(pn);
		console.log (n);
		if (n === -1) {
			cartContent.push(pn);
			cartContent.push(1);
		}
		else {
			cartContent[n+1]+=1;
		}
		
	}
	console.log (cartContent);
	showCart ();
}

function showCart () {
	cartBlock = document.getElementById('cart');
	var sum = 0;
	var contentForCart = '';
	for (i=0; i<cartContent.length; i=i+2) {
		sum += price[cartContent[i]]*cartContent[i+1];
		contentForCart += '<p>Наименование товара: '+ product[cartContent[i]] + ', количество: ' + cartContent[i+1] + ', общая стоимость: ' +  price[cartContent[i]]*cartContent[i+1] + '</p>';
	}
	contentForCart += '<p>Общая сумма: $'+ sum + '</p>';
	cartBlock.innerHTML = contentForCart;
	console.log ('сумма: '+sum);
}



// function myScript () {
// 	console.log('script start');
// 	var images = document.getElementsByTagName('img');
// 	console.log (images);
// 	for (var i=1; i<images.length; i++) {
// 		images[i].onclick = showBigPicture;
// 		//images[i].onerror = showErr;
// 	}
// }

// function showBigPicture (ev) {
// 	var picField = document.getElementById('bigView');
// 	picField.innerHTML = '';
// 	var e = ev.target;
// 	console.log ('target: '+ e);
// 	var imageNum = e.id.split('_');
// 	console.log (imageNum);
// 	var src = 'big/'+ imageNum[1] + '.jpg';
// 	var makeBigImg = document.createElement('img');
// 	makeBigImg.src = src;
// 	makeBigImg.width = '750';
// 	picField.appendChild(makeBigImg);
// 	makeBigImg.onerror = showErr();

	
// 	//var tag = '<img src=big/'+ imageNum[1] + '.jpg width="750px"/>';
// 	//console.log (tag);
// 	//picField.innerHTML = tag;
// 	//picField.onerror = showErr;


// }

// Объявляем три массива, в каждом из них будет храниться информация, соответственно, о наименовании товара, его цене, 
// и пути к изображению.

var product = ['Portable radio','Sport shoes','Battery light','Watches'];
var price = [50,65,10,33];
var productImage = ['img/radio.jpg','img/shoes.jpg','img/light.jpg','img/watches.jpg'];

// в этом массиве будет храниться информация о том товар из какой ячейки предыдущих массивов и в каком количестве выбран
// в ячейках 0, 2, 4 будут храниться номера, в ячейках 1,3,5 - количество.

var cartContent = []; 
// window.onload = cart;