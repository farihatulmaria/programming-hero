let db = {};

const addItemsToDB = (item) =>{
    const storedTracker = localStorage.getItem('check-tracker');
    if(storedTracker){
        db = JSON.parse(storedTracker);
    }
    if(item in db){
        db[item] += 1 
    }else{
        db[item] = 1
    }
    localStorage.setItem('check-tracker', JSON.stringify(db));
}

const removeItem = (item) => {
    const storedTracker = localStorage.getItem('check-tracker');
    if(storedTracker){
        const storedObject = JSON.parse(storedTracker);
        delete storedObject[item];
        localStorage.setItem('check-tracker',JSON.stringify(storedObject))
    }
}