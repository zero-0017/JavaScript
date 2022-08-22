$(function (){
  $('.box1').slideDown(function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});

// display: none;　要素を非表示にする

// slideDown(); 上から下へ　display: none;の記述は必要
// slideUp();　下から上へ　display: none;の記述は不要
// show();　非表示から表示　display: none;の記述は必要
// hide();　表示から非表示　display: none;の記述は不要