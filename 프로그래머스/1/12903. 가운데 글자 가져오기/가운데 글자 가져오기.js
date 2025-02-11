function solution(s) {
    var answer = '';
    var average = parseInt(s.length / 2);
    var arr = Array.from(s);
    for(let i = 0; i < arr.length; i++){
        if(arr.length %2 ===0){
            answer = (arr[average-1])+(arr[average]);
        }
        else  answer = (arr[average]);
    }
    return answer;
}