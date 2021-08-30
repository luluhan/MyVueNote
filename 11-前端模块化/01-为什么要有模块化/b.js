var moduleB = (function () {
  // 小红
  const a = 5;
  let flag = false;
  if (flag) {
    console.log('moduleB');
  }
  console.log('moduleA.flag', moduleA.flag);
})();