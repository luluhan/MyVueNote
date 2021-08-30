var moduleA = (function () {
  // 小明
  const a = 1;
  let flag = true;
  if (flag) {
    console.log('moduleA');
  }

  function sum(num1, num2) {
    return num1 + num2;
  }

  var obj = {};
  obj.flag = flag;
  obj.sum = sum;

  return obj;
})();