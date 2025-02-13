function solution(n) {
    var answer = Infinity;
    for(let i = 1; i<=n;i++){
        if(n%i===1){
           answer = Math.min(answer,i);
        }
    }
    return answer;
}