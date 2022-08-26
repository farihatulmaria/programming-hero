/* 
3 state of Promise
1. pending state
2. resloved state or
3. rejected state
 */

const myPromise = new Promise((resloved,rejected)=>{
    // you can do any async work in this function
    const user = {id:0};
    if(user){
        setTimeout(()=>{
            resloved(user)
        },1000)
    }
    else{
        rejected("Something went wrong")
    }
});

myPromise.then((result) => {
    console.log('Sucessful');
}).catch((err) => {
    console.log(err);
});

console.log('done');

const userId =[ 1,2,3,4,5];
let userDate=[]
for (let i = 0; i < userId.length; i++) {
    const id = userId[i];
   /*  setTimeout(()=>{
        userDate.push({id:i})
        console.log(userDate);
    },1000) */
    /* myPromise.then(user=>{
        userDate.push(user)
        console.log(userDate);
    }) */
    userDate.push(myPromise)
}
Promise.all(userDate).then((err)=>{
    console.log(userDate);
})
console.log(userDate);


