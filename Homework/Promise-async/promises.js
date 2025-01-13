 //task 1
 function timer (text,time) {
   setTimeout(( ) => {
     console.log(`" ${text} "`);
   },time);
 }
 timer('some text',1000);

 //task 2

function fetchTodos(){ 
    return fetch ('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>{ 
    if(!response.ok){
        throw new Error('Error!');
    } return response.json();
    })
    .then(data=>{
        console.log("Object: ",data);
        return data;
    })
    .catch(error=>{
        console.error("Error",error);
    });
}

function fetchUser() {
    return fetch ('https://jsonplaceholder.typicode.com/users/1')
    .then(response=>{
        if(!response.ok){
            throw new Error('Error!');
        } return response.json();
    })
    .then(data=>{
        console.log("Object: ",data);
        return data;
    })
    .catch(error=>{
        console.error("Error",error);
    });
}

const functionArray=[fetchTodos(),fetchUser()];

const promiseAll=Promise.all(functionArray)
.then(results=>{
    console.log(results);
})
.catch(error=>{
    console.error("Error",error);
});

const promiseRace=Promise.race(functionArray)
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.error("Error",error);
});

