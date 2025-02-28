function solution(str1, str2) {
    var answer = '';
    var arr1 = str1.split('');
    var arr2 = str2.split('');
    for(let i =0; i<arr1.length; i++){
        answer+=(arr1[i]);
        answer+=(arr2[i]);
    }
    return answer;
}