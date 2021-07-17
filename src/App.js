import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
import React, {useState, useEffect} from "react";
import {Route, Switch, Link} from "react-router-dom";
// // import { style } from '../craco.config';
import './App.css';
function App(props) {
    ///////////////////
    // Style Objects
    ///////////////////

    const button = {
      backgroundColor: "black",
      display: "block",
      margin: "auto",
      textColor: "white"
    }

    //////////////////////
    // State & Other Variables
    ///////////////////////
    // API URL
    const url = "https://abtbev3.herokuapp.com/ab_ts/"
    // State to hold the list of posts
    const [posts, setPosts] = useState([])

    const nullComments = {
      email: "",
      comments: ""
    }

    const [targetComments, setTargetComments] = useState(nullComments)

    /////////////////
    // Functions
    ////////////////
    const getComments = async() => {
      const response = await fetch(url)
      const data = await response.json()
      setPosts(data)
    }

    const addComments = async (newComments) => {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newComments)
      })

      // getComments()
    }

    // const getTargetComments = (comments) => {
    //   setTargetComments(comments)
    //   props.history.push("/edit")
    // }
    // const updateComments = async (comments) => {
    //   const response = await fetch(url + comments.id, {
    //     method: "put",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(comments)
    //   })
    //   getComments()
    // }

    // const deleteComments = async (comments) => {
    //   const response = await fetch(url + comments.id + "/", {
    //     method: "delete"
    //   })
    //   getComments()
    // }

    ////////////////////
    // useEffects
    ////////////////////
    useEffect(() => {getComments()}, [])
    /////////////////
    // Returned JSX
    /////////////////

  return (
    <div className="App">
      <div className="border-1 border-yellow">
        <h1>Cowgirl Cheeses</h1>
        <h3>Marin, CA</h3>
      </div>

      <Link to="/new"><button style={button}>Which cheese is better!</button></Link>
        <Switch>
        <Route
          exact
          path="/"
          render={(rp) => <AllPosts posts={posts} {...rp}/>}
        />
        {/* <Route
          path="/post/:id"
          render={(rp) => <SinglePost posts={posts} 
          edit={getTargetComments} 
          deleteComment={deleteComments} 
          {...rp}/>}
        /> */}
        <Route
          path="/new"
          render={(rp) => <Form initialComments={nullComments} handleSubmit={addComments} buttonLabel="I LOVE IT!" {...rp}/>}
        />
        {/* <Route
          path="/edit"
          render={(rp) => <Form 
            initialComments={targetComments}
            handleSubmit={updateComments}
            buttonLabel="update comments"
            {...rp}/>}
        /> */}
      </Switch>

    </div>
  );
}

export default App;