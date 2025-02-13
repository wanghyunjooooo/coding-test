function solution(n) {
    var answer = 0;
    for(let x =1; x<=n; x++){
    if(x**2===n){
        answer=(x+1)**2;
        break;
    }
    else answer= -1;
    }
    return answer;
}