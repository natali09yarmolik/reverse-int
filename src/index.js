module.exports = function reverse (n) {
    let str=String(Math.abs(n));
    let strNew="";
    for(let i=str.length-1; i>=0; i--)
    {
      strNew+=str[i];
    }
    let strNew1=Number(strNew);
    return strNew1;
}
