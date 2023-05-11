//i decide row value and j decide column val
//depending upon value of i we choose pt1 and pt2, then print alternative value of choosen pattern

const pt1=["*","#"]
const pt2=["$","%"]
var n=8             //input val- no of rows
for(let i=n;i>=1;i--){
    let k=""
    let alt=true
    let pt=i%2===0 ? pt2:pt1  
    //alternate between element 1 and 2 of pt
    for (let j=1;j<=i;j++){
        let val=alt?pt[0]:pt[1]
        k+=val+" "
        alt=alt?false:true
    }
    let space=" ".repeat(n-i)
    let nw=space+k
    console.log(nw)
}
