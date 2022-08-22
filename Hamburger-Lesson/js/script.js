$(function() {
  $('.menu-trigger').on('click', function(event) {// .menu-triggerクリック時に行われる処理
    $(this).toggleClass('active');// .toggleClass()によって、class属性の追加と削除が交互に行われます
    $('#sp-menu').fadeToggle();// ハンバーガーメニューを開いたときの状態を設定
    event.preventDefault();
  });
});