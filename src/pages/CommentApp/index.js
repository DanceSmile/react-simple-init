import React, { Component } from 'react';
import { connect } from 'react-redux';


class CommentApp extends Component {

	
 
	hanleSubmit(comment)
	{
		this.props.addComment(comment)

	}
	render() {

		return (
		<div className='am-container' style={{'marginTop':"20px"}}>
			<h3 style={{"textAlign":'center'}} > React评论留言</h3>
			<hr data-am-widget="divider"  className="am-divider am-divider-default" />
			{
				this.props.comments.length?
				<CommentList comments ={ this.props.comments } />
				:'暂没有评论'
			}

			<hr/>
			
			<CommentInput hanleSubmit = {this.hanleSubmit.bind(this)} />
		</div>
		);
	}
}


class CommentList extends Component{

	

	render(){
		console.log(this.props.comments)
		return (
			
			<ul className="am-comments-list am-comments-list-flip">
				{
					this.props.comments.map(function (item, i) {
						return <Comment key={i} comment={item} />
					})
				}
			</ul>

		)
	}
}


class Comment extends Component{

	render(){
		return (
			<article className="am-comment">
				<a href="#link-to-user-home">
				<img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96" alt="" className="am-comment-avatar" width="48"
					height="48" />
				</a>

				<div className="am-comment-main">
				<header className="am-comment-hd">
					<div className="am-comment-meta">
					<a href="#link-to-user" className="am-comment-author">{this.props.comment.username}</a>
					评论于
					<time dateTime={"2013-07-27T04:54:29-07:00"} title="2013年7月27日 下午7:54 格林尼治标准时间+0800">2014-7-12 15:30</time>
					</div>
				</header>

				<div className="am-comment-bd">
					{this.props.comment.message}
				</div>
				</div>

			</article>

		)
	}
}


class CommentInput extends Component{

	constructor(props) {
		super();

		this.state = {
			username:'',
			message:''
		}

		
	}


	handleUsername(event){

		this.setState({
			username:event.target.value
		})

	}

	handleMessage(event){
		this.setState({
			message:event.target.value
		})
	}

	handleClick(){

		if(this.props.hanleSubmit){

			const { username, message } = this.state

			this.props.hanleSubmit({username, message})
		}

		this.setState({
			message:''
		})


	}
	render(){
		return (
			<div className="am-form" >
				<div className="am-form-group">
					<label htmlFor="doc-ta-1">用户名</label>
					<input type="text" value={this.state.username} onChange={this.handleUsername.bind(this)} />
				</div>
		
				<div className="am-form-group">
					<label htmlFor="doc-ta-1">评论内容</label>
					<textarea className="" rows="5" id="doc-ta-1" value={this.state.message} onChange={this.handleMessage.bind(this)}  />
				</div>
				<p>
					<button onClick={this.handleClick.bind(this)}   className="am-btn am-btn-default">提交</button>
				</p>
		   </div>

		);
	}
}


export default connect(
	state => ({
	comments: state.comments
	}),
	dispatch => {
		return {
			addComment:(comment) => {
				dispatch({"type":'add_comment',"comment":comment})
			}
		}
	}
)(CommentApp);
