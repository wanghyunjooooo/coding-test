function solution(n) {
    var answer = '';
    var watermelon = '수박'
    var str = watermelon.repeat(10000);
    
    
    for (let i = 0; i < str.length; i++){
      answer = str.substring(0,n);
    }
    
    return answer;
}