import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
//create react components
const App = () => {
  return (
    <div className = "ui container comments">
      <ApprovalCard>
        Are you sure you want to do this?
      </ApprovalCard>





      <ApprovalCard >
        <CommentDetail
          author = "Sam"
          timeAgo = 'Today at 4:45PM'
          text=' Nice blog post!'
          avatar = {faker.image.avatar()}
          />
      </ApprovalCard>

      <ApprovalCard >
        <CommentDetail
          author = "Sam1"
          timeAgo = 'Today at 5:45PM'
          text=' Nicee blog post!'
          avatar = {faker.image.avatar()}
          />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author = "Sam2"
          timeAgo = 'Today at 7:45PM'
          text=' Niceee blog post!'
          avatar = {faker.image.avatar()}
          />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author = "Sam3"
          timeAgo = 'Today at 2:45PM'
          text=' Niceeee blog post!'
          avatar = {faker.image.avatar()}
          />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author = "Sam4"
          timeAgo = 'Today at 8:45PM'
          text=' Niceeeee blog post!'
          avatar = {faker.image.avatar()}
          />
      </ApprovalCard>


    </div>

  );
};




//take the componenet to show on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
