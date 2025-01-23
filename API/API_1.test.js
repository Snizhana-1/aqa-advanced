const axios=require('axios');

describe ("Test cases with GET" , () => {

    test ( "User can fetch all posts" , async () => {
    const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
    console.log(response.data);
    });

    test("User can fetch a post by ID" , async () => {
    const response=await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data).toHaveProperty('title');
    console.log(response.data);
    });

    test("User can fetch a comments for the post" , async () => {
    const response=await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
    console.log(response.data);
    });
});

describe ("Test cases with POST" ,  () => {

    test ("User can create a new post" , async () => {
    const newPost = {
        title: "This is my first post",
        body: "Here is my content",
        userID: 1,
    };
    const response=await axios.post ('https://jsonplaceholder.typicode.com/posts',newPost);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newPost);
    console.log(response.data);
    });

    test ("User can create a new comment" , async () => {
    const newComment = {
        postID:1,
        name: "User User",
        email: "user_email@gmail.com",
        body: "This is my comment",
    }
    const response=await axios.post('https://jsonplaceholder.typicode.com/comments',newComment);
    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newComment);
    console.log(response.data);
    });
});