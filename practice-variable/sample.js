// varでの再宣言は問題ありません
// letでは再宣言はできない
// constの場合でも再宣言はできない

// 再代入はvarとletで、可能です。constでは再代入ができません

// constでは再宣言と再代入ができません

var str = "webcamp"

function foo() {
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()