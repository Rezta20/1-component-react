import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 09:36PM"
        post="Hello World!"
        avatar={faker.image.animals()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 05:02PM"
        post="Who you are?"
        avatar={faker.image.people()}
      />
      <CommentDetail
        author="Kevin"
        timeAgo="Yesterday at 03:25AM"
        post="Front-End developer!!"
        avatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
