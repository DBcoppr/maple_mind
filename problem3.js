var ar=[]
ar.sort((a,b)=>{
    return b-a
})
const n=ar.length
var res=[]
for ( i=0;i<(ar.length)/2;i++){
    res.push(ar[i])
    res.push(ar[n-i-1])
}
console.log(res)