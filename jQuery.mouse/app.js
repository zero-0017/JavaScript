$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});


// $('.セレクタ名').イベント名(function(){
//   イベント発生時に行われる処理
// });

// ・イベント名
// mouseover　マウスオーバー（カーソルを乗せたらずっと適応）
// mouseoverとmouseout　マウスアウト（カーソルを乗せている間のみ適応）


// マウスっクリック（クリックしたらずっと適応）
// $('.セレクタ名').on('click', function() {
//   イベント発生時に行われる処理
// });

