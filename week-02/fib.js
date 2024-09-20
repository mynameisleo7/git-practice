function fib(n) {
    // TODO: implement fibonacci
    if (n == 0){
        return 0;
    } else if(n == 1) {
        return 1;
    } else {
        return fib(n-2) + fib(n-1);
    }
  }

//遞迴太恐怖，所以想了其他方法，從現實生活中列出數列的邏輯出發  
function fib2(n){
    let fibArr=[0,1] //前兩個元素

    //列出第i個元素
    function addFib(i){
        fibArr.push(fibArr[i-1]+fibArr[i-2]);
    }

    //利用for迴圈將數列完整列出
    if ( n>=2 ){
        for (let i = 2; i<=n ; i++ ){
            addFib(i);
        }
    }

    //回傳要的數
    return fibArr[n];

}
fib(0); // 0
fib(1); // 1
fib(5); // 5
fib(10); // 55

/* console.log(fib2(0)); // 0
  console.log(fib2(1)); // 1
  console.log(fib2(5)); // 5
  console.log(fib2(10)); // 55  */