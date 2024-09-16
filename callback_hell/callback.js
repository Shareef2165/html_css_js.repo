hello(goodbye);

function hello(callback){
    console.log("Hello");
    callback();
}

function goodbye(){
    console.log("Goodbye");
}

//a function that is passed as an argument to another function