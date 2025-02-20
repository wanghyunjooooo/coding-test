function solution(age) {
    var answer = ''
    var arr = age.toString().split('');
    for(let i =0; i<arr.length; i++){
         if(arr[i]==="0"){
           answer+=("a");
       }
         if(arr[i]==="1"){
           answer+=("b");
       }
       if(arr[i]==="2"){
           answer+=("c");
       }
          if(arr[i]==="3"){
           answer+=("d");
       }
          if(arr[i]==="4"){
           answer+=("e");
       }
          if(arr[i]==="5"){
           answer+=("f");
       }
          if(arr[i]==="6"){
           answer+=("g");
       }
          if(arr[i]==="7"){
           answer+=("h");
       }
          if(arr[i]==="8"){
           answer+=("i");
       }
          if(arr[i]==="9"){
           answer+=("j");
       }
    }
    return answer;
}