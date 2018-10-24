function validate(){
   //Считаем значения из полей name и email в переменные x и y
   var ni=document.forms["form"]["nameForm"].value;
   var ei=document.forms["form"]["emailForm"].value;
   var pi=document.forms["form"]["phoneForm"].value;

   console.log (ni);
   console.log (ei);
   console.log (pi);
   

   //Если поле name пустое выведем сообщение и предотвратим отправку формы
   console.log ('ni.length='+ni.length);
   if (ni.length==0){
    	document.getElementById("nameMess").innerHTML="*данное поле обязательно для заполнения";
    	return false;
   }
   else {
   		pattern=/[A-Za-z]/;
   		// pattern=/[:alpha:]/;
   		console.log (ni, pattern.test(ni));
   		if (!pattern.test(ni)) {
   			document.getElementById("nameForm").style.borderColor = "red";
   			document.getElementById("nameMess").innerHTML=" *поле заполнено неверно";
   		}
	};
	//Если поле email пустое выведем сообщение и предотвратим отправку формы
	console.log ('ei.length='+ei.length);
	if (ei.length==0){
    	document.getElementById("emailMess").innerHTML=" *данное поле обязательно для заполнения";
    	return false;
	}
    else {
   		pattern=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
   		console.log (ei, pattern.test(ei));
   		if (!pattern.test(ei)) {
   			document.getElementById("emailForm").style.borderColor = "red";
   			document.getElementById("emailMess").innerHTML=" *поле заполнено неверно";
   		}
   	};
   console.log ('pi.length='+pi.length);
   if (pi.length==0){
    	document.getElementById("numMess").innerHTML=" *данное поле обязательно для заполнения";
    	return false;
   }
   else {
   		pattern = /\+\d\(\d{3}\)\d{3}\-\d{4}/;
   		console.log (pi, pattern.test(pi));
   		if (!pattern.test(pi)) {
   			document.getElementById("phoneForm").style.borderColor = "red";
   			document.getElementById("numMess").innerHTML=" *поле заполнено неверно";
   		}
   	};




   //Проверим содержит ли значение введенное в поле email символы @ и .
   at=ei.indexOf("@");
   dot=ei.indexOf(".");
   //Если поле не содержит эти символы знач email введен не верно
   if (at<1 || dot <1){
      document.getElementById("emailMess").innerHTML=" *email введен не верно";
      return false;
   };
   // alert('!');
}