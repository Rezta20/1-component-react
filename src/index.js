import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4> WARNING!</h4>
          <div>Do you want to quit this ?</div>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 09:36PM"
          post="Hello World!"
          avatar={faker.image.animals()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 05:02PM"
          post="Who you are?"
          avatar={faker.image.people()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Kevin"
          timeAgo="Yesterday at 03:25AM"
          post="Front-End developer!!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
