function solution(myString) {
    var answer = [];
    var arr = myString.split("x").filter(str => str !== "").sort();
    return arr;
}