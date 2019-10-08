import React, { useState } from "react";
import Article from "./components/Article";
import "./App.css";

/*

Create a blog like appication, which allows the user to do the following:

1. User can enter their name, and create a new article
2. the article is simply some text, and has the author's name
3. Users are able to add comments to the article
4. each comment includes text, it also has a count of "liks"
5. users may reply, or add likes to each comment

*/

export default  function App() {
  const [author, setAuthor] = useState("");
  const [authorFlag, setAuthorFlag] = useState(true);
  const handleOnChange = e => {
    setAuthor(e.target.value);
  };
  const handleOnKeyPress = e => {
    if (e.key === "Enter") {
      setAuthorFlag(false);
    }
  };
  return (
    <div className="App">
      <h1>Article App</h1>
      <div>
        {authorFlag && (
          <div className="add-autor">
            <h3>Add Autor:</h3>
            <input
              value={author}
              onChange={handleOnChange}
              onKeyPress={handleOnKeyPress}
            />
          </div>
        )}
      </div>
      {!authorFlag && <Article autor={author}/>}
    </div>
  );
}

/*

{
  name: string,
  commentText: string,
  likes: number,
  comments: [
    {
      ...
    }
  ]
}

*/
