function solution(absolutes, signs) {
    var answer = 123456789;
    var sum = [];
    for(let i =0; i<signs.length; i++){
        if(signs[i]===true){
            sum.push(absolutes[i]);
        }
        else sum.push(absolutes[i]-(absolutes[i]*2));
    }
    answer = sum.reduce((a,b)=>(a+b),0);
    return answer;
}