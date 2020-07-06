// 圆周率运算以此检验设备运行速度

var start = Date.now(); 

var pai = 0, flag = false;
for(var i=1; i<30000000; i+=2) {
 pai += ((flag = !flag) ? 1 : -1) * 1 / i;
}
console.log('圆周率π：'+pai*4);
console.log('用时：'+ (Date.now() - start)+'ms')
$done
