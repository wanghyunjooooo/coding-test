function solution(num, k) {
    var answer = 0;
    var arr = num.toString().split('');
    for(let i =0; i<arr.length; i++){
        if(arr[i]===String(k)){
           answer = i+1;
            break;
        }
        else answer = -1;
    }
    
    return answer;
}