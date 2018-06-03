import React, { Component } from 'react';

class CommentApp extends Component {
  render() {
    return (
      <div className="ui container" style={{marginTop:"20px"}}>
     	 CommentApp
     	 <CommentInput />
     	 <CommentList />
      </div>
    );
  }
}


class CommentList extends Component{

	render(){
		return (
			<div > 
				CommentList
				{
					[1,2,3,4,5,6].map(function (item) {
						return <Comment />
					})
				}
			</div>

		)
	}
}


class Comment extends Component{

	render(){
		return (

			<div > 
				Comment
			</div>

		)
	}
}


class CommentInput extends Component{

	render(){
		return (

			<div > 
				  <input name="username" className="ui input" />
				  <input name="content" />
			</div>

		)
	}
}







export default CommentApp;
