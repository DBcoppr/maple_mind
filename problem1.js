k=1
n=10 //input val -no of rows
for (let i=1;i<=n;i++){
    let rw=""
    for (let j=1;j<=i;j++){
        if (i%2 === 0){
            rw=k+" "+rw
        }
        else{
            rw=rw?rw+" "+k:rw+k
        }
        k++
    }
    console.log(rw)
}