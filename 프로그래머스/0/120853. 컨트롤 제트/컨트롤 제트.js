function solution(s) {
    var answer = [];
    var arr = s.split(" ");

   for(let i = 0; i<arr.length; i++){
       if(arr[i]==="Z"){
           answer.pop();
       }
       else answer.push(Number(arr[i]));
   }
    return answer.reduce((a,b) => a+b,0);
}