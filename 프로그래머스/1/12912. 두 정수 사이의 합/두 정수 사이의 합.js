function solution(a, b) {
    var answer = 0;
    if(a<b){
    for(var i = a;i <= b; i++){
       answer += i
    }
    }
    if(a>b){
         for(var i = b;i <= a; i++){
       answer += i
    }
    }
    if(a===b){
        answer=a
    }
    return answer;
}