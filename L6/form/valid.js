$( function() {
  $( "#datepicker" ).datepicker();
} );

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
      $("#dialog").dialog({width:400,height:150});
      return false;
   }
   else {
      pattern=/[A-Za-z]/;
      // pattern=/[:alpha:]/;
      console.log (ni, pattern.test(ni));
      if (!pattern.test(ni)) {
        $("#nameForm").css("borderColor", "red");
        $("#nameForm").effect("shake", 600);
        $("#nameMess").html(" *поле заполнено неверно");
        $("#dialog").dialog({width:400,height:150});
      }
  };
  //Если поле email пустое выведем сообщение и предотвратим отправку формы
  console.log ('ei.length='+ei.length);
  if (ei.length==0){
      $("#emailMess").html(" *данное поле обязательно для заполнения");
      return false;
  }
    else {
      pattern=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      console.log (ei, pattern.test(ei));
      if (!pattern.test(ei)) {
        $("#emailForm").css("borderColor", "red");
        $("#emailForm").effect("shake", 600);
        $("#emailMess").html(" *поле заполнено неверно");
        $("#dialog").dialog({width:400,height:150});
      }
    };
   console.log ('pi.length='+pi.length);
   if (pi.length==0){
      $("#numMess").html(" *данное поле обязательно для заполнения");
      return false;
   }
   else {
      pattern = /\+\d\(\d{3}\)\d{3}\-\d{4}/;
      console.log (pi, pattern.test(pi));
      if (!pattern.test(pi)) {
        $("#emailForm").css("borderColor", "red");
        $("#emailForm").effect("shake", 600);
        $("#numMess").html(" *поле заполнено неверно");
        $("#dialog").dialog({width:400,height:150});
      }
    };

   //Проверка, содержит ли значение введенное в поле email символы @ и .
   at=ei.indexOf("@");
   dot=ei.indexOf(".");
   //Если поле не содержит эти символы знач email введен не верно
   if (at<1 || dot <1){
      document.getElementById("emailMess").innerHTML=" *email введен не верно";
      return false;
      $("#dialog").dialog({width:400,height:150});
   };
   // alert('!');
}