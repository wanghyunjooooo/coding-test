function solution(A,B){
    var answer = 0;
    var a = A.sort((a,b)=>(a-b));
    var b = B.sort((a,b)=>(b-a));
   for(let i =0; i<a.length;i++){
       answer += a[i]*b[i];
   }
    return answer;
}