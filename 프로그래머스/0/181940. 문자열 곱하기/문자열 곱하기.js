function solution(my_string, k) {
    var answer = '';
    var arr = my_string.split(" ");
    for(let i =1; i<=k; i++){
        answer+=arr;
    }
    return answer;
}