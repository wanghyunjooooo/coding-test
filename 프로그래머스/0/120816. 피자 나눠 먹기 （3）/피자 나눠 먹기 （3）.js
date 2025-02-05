function solution(slice, n) {
    var answer = 0;
    answer = Math.ceil(n / slice);
    
    console.log(answer);
    return answer;
}