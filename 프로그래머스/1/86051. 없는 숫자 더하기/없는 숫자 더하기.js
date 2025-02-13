function solution(numbers) {
    var answer = 1+2+3+4+5+6+7+8+9;
    var sum = 0;
    for(x of numbers){
        sum+=x;
    }
    return answer-sum;
}