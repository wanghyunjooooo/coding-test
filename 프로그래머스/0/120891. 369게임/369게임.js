function solution(order) {
    var answer = 0;
    var arr = order.toString().split('');
    var cnt = 0;
    for(x of arr){
        if(x==="3"||x==="6"||x==="9"){
            cnt++;
        }
    }
    return cnt;
}