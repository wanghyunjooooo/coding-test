function solution(n) {
    var answer = 0;
    var max = Number(n.toString().split('').sort((a,b) => b-a).join(''));

    return max;
}