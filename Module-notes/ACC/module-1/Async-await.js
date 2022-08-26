const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('ok')
    },1000);
})
async function getDate() {
    const res = await promise;
    console.log(res); 
}
getDate();


// You can use this
 fetch('')
 .then(res=> res.json())
 .then(data=> console.log(data))

// or

async function getUser(){
    const res = await fetch('');
    const user = await res.json();

    // you can use the fetched data to get another data
    const res2 = await fetch(`https://www.example.com/${user.id}`);
    const products = await res2.json();
    
    console.log(products);
}