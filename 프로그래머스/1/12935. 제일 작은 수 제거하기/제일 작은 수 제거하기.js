function solution(arr) {
    var answer = [];
    let min = arr[0];
    
    if (arr.length <= 1)
            answer.push(-1);
    
    for(let x of arr){
        if(min > x)
            min = x;
    }
    
    for(let x of arr){
        if (x !== min)
            answer.push(x);
    }
    
    return answer;
}