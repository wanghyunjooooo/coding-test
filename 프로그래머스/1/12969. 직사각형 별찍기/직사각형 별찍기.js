process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.trim().split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    var row = "*".repeat(a);
    for(let i=1; i<=b; i++){
        console.log(row);
    }
});