function solution(my_string) {
    var answer = '';
    for(char of my_string){
        if(!answer.includes(char)){
            answer+=char;
        }
    }
    return answer;
}