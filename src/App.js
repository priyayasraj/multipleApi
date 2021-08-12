import React from "react";
import axios from "axios";
const usersURL = "https://jsonplaceholder.typicode.com/users";
const todosURL = "https://jsonplaceholder.typicode.com/todos";
const photosURL = "https://jsonplaceholder.typicode.com/photos";
const albumsURL = "https://jsonplaceholder.typicode.com/albums";
const commentsURL = "https://jsonplaceholder.typicode.com/comments";
const postsURL = " https://jsonplaceholder.typicode.com/posts ";

function App() {


  const fetchData = async () => {
    try {
      const usersData = await axios.get(usersURL);
      const todosData = await axios.get(todosURL);
      const photosData = await axios.get(photosURL);
      const albumsData = await axios.get(albumsURL);
      const commentsData = await axios.get(commentsURL);
      const postsData = await axios.get(postsURL);

      console.log(usersData.data);
      console.log(todosData.data);
      console.log(photosData.data);
      console.log(albumsData.data);
      console.log(commentsData.data);
      console.log(postsData.data);

    } catch (error) {
      console.log(error);
    }
  }

  fetchData();
  return <div className="App">Hi there</div>;
}

export default App;
