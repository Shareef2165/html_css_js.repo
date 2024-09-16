function task1(callback){

    setTimeout(()=>{
        console.log("Tasl 1 is completed");
        callback();
    }, 2000);

}

function task2(callback){

    setTimeout(()=>{
        console.log("Tasl 2 is completed");
        callback();
    }, 2000);

}

function task3(callback){

    setTimeout(()=>{
        console.log("Tasl 3 is completed");
        callback();
    }, 2000);

}

function task4(callback){

    setTimeout(()=>{
        console.log("Tasl 4 is completed");
        callback();
    }, 2000);

}

task1(()=>{
     task2(()=>{
        task3(()=>{
            task4(()=>console.log("All tasks completed"));
        })
     })
})