function solution(s) {
    var answer = '';
    var arr = s.split(" ").sort((a,b)=>(a-b));
    for(let i =0; i<arr.length; i++){
        answer = (arr[0]+" "+arr[arr.length-1]);
    }
    return answer;
}