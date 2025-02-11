function solution(arr) {
    var answer = 0;
    var sum = 0;
    for(let num of arr){
        sum += num
        answer = sum / arr.length;
    }
    return answer;
}