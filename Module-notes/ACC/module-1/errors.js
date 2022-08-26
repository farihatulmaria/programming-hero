async function getData(){
    // if you don't add a tryCatch method your server can go down
 try {
    undefined.find(); // this will givw you a TypeError
    const emailError = new Error('This emailalreay eixts');
    throw emailError
 } catch (err) {
     errorHandler(err)
 }
}
function errorHandler(error){
    const {name, stack, message} = error
    logger.error({
        name,
        message,
        stack
    })
}
getData();
console.log('Done');