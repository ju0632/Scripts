var start = Date.now(); 

var pai = 0, flag = false;
for(var i=1; i<30000000; i+=2) {
 pai += ((flag = !flag) ? 1 : -1) * 1 / i;
}
console.log('圆周率：'+pai*4);
console.log('用时:' + (Date.now() - start)+'ms')
$done