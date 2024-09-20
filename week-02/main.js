// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
/* 測試初始化stack是否真的為空stack
此外，應該在空stack以及含有元素的stack的情形都測試過一遍所有功能
例如空stack pop的話應該要回傳null，故檢查是否真的回傳null
或是非空stack pop要確認pop出來的是否真的是最後一個push進去的元素
*/
