$('#tab-contents .tab[id != "tab1"]').hide();// $('#tab-contents .tab[id != "tab1"]').hide();と記述することで、id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示になります

$('#tab-menu a').on('click', function(event) {// イベント発生時に行われる処理　　「id="tab-menu"のaタグがクリックされたときに、処理を実行してください」の意味
  $("#tab-contents .tab").hide();//　id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});



$()関数では、特定の属性を持つ要素や属性値を絞り込むことができます
$('要素[属性]')　特定の属性を持つ要素のみ取得したいとき
$('要素[属性 = "値"]')　属性値が特定の値に等しい要素だけを取得したいとき
$('要素[属性 != "値"]')　属性値が特定の値に等しくない要素だけを取得したいとき