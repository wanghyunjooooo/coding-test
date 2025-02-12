function solution(x) {
    var answer = true;
    var sum = x.toString().split('').reduce((acc,cur) => acc+parseInt(cur),0);
    
    return x%sum === 0;
}