//task 3

async function fetchAsyncTodos(){ 
    try{ 
    const response=await fetch ('https://jsonplaceholder.typicode.com/todos/1');
    if(!response.ok){
        throw new Error('Error!');
    } 
    const data=await response.json();
    return data;
    }
    catch(error) {
        console.error("Error",error);
        throw error;
    };
}

async function fetchAsyncUser() {
    try{ 
    const response= await fetch ('https://jsonplaceholder.typicode.com/users/1');
    if(!response.ok){
        throw new Error('Error!');
    } 
    const data=await response.json();
    return data;
    }
    catch(error) {
        console.error("Error",error);
        throw error;
    };
}

(async () =>{
   try{ 
    const todos=await fetchAsyncTodos();
    console.log(todos);

    const user=await fetchAsyncUser();
    console.log(user);
    }
   catch(error) {
    console.error("Error",error);
    }
    }) ();

//task 4

class Todos {
  fetchTodos(url){
    return fetch(url)
    .then(response=>{
        if(!response.ok){
            throw new Error("error");
        }
        return response.json();
    })
    .then(data=>{
        console.log(data);
        return data;
    })
    .catch(error=>{
        console.error("Error",error);
    });
  }
}

const classFetchTodos=new Todos();
classFetchTodos.fetchTodos('https://jsonplaceholder.typicode.com/todos/1');

class User {
  fetchUser(url){
    return fetch (url)
    .then(response=>{
        if(!response.ok){
            throw new Error("error");
        }
        return response.json();
    })
    .then(data=>{
        console.log(data);
        return data;
    })
    .catch(error=>{
        console.error("Error",error);
    });
  }
}

const classFetchUser=new User();
classFetchUser.fetchUser('https://jsonplaceholder.typicode.com/users/1');