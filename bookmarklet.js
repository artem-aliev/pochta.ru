javascript:(function() {
  function doEvent( obj, event ) {
    /* Created by David@Refoua.me */
    var event = new Event( event, {target: obj, bubbles: true} );
    return obj ? obj.dispatchEvent(event) : false;
  }
  function setValue ( obj, value) {
    obj.value = value; doEvent (obj, "input") 
  }
  var x = document.getElementsByClassName("input__title");

  /* заполняем значения в кавычках */
  setValue (x.item(1).nextSibling,"Ф И О");
  setValue (x.item(2).nextSibling,"Адрес");
  setValue (x.item(3).nextSibling,"Индекс 6 цифр");
  setValue (x.item(5).nextSibling,"серия паспорта 4 цифры");
  setValue (x.item(6).nextSibling,"номер паспорта 6 цифр");
  setValue (x.item(7).nextSibling.nextSibling,"дата выдачи в формате 31.01.2000");
  setValue (x.item(8).nextSibling,"кем выдан");
})();
