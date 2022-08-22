$(function() {
  $('#back a').on('click',function(event){ // #back内のaタグがクリックされたときの処理
    $('body, html').animate({// body要素またはhtml要素」の意味
      scrollTop:0// 「最上部に移動する」の意味
    }, 800);// 800ミリ秒間（0.8秒間）かけてページの最上部まで移動する」
    event.preventDefault();// aタグの機能を無効にするメソッド
  });
});



// animate() は、アニメーション効果を設定するjQueryの関数

// $(function() {
// $('.セレクタ名').on('click', function(event) {
//   イベント発生時に行われる処理

//   $('セレクタ名').animate({
//   変化対象のプロパティ名:変化値
// }, アニメーションの動作時間);
// });
// });