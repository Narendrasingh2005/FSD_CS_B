function register(cb){
    setTimeout(()=>{
        console.log("register End");
        cb();
    },3000);
    
}
function login(cb){
    setTimeout(()=>{
        console.log("login end");
        cb();
    },3000);
    
}
function displaydata(){
    
    console.log("Display user data");
}
// callback hell
register(function (){
    login(function (){
        displaydata();
    });
    
});