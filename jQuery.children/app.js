$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});


// ↑ 「button要素がクリックされたときに、処理を実行してください」の意味


//　「children」は、HTML要素直下のすべての子要素を取得するときに使います