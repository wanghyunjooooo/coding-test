function solution(price, money, count) {
    var answer = 0;
    var sum = 0;
    for(let i =1; i<=count; i++){
        sum += (i*price);
    }
    if((money-sum)<0){
        answer=(-(money-sum));
    }
    else answer= 0;
    return answer;
}