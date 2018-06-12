import React, { Component } from 'react';

class CommentApp extends Component {
  render() {
    return (
      <div className='am-container' style={{'marginTop':"20px"}}>
	   	 <h3 style={{"text-align":'center'}} > React评论留言</h3>
		 <hr data-am-widget="divider"  className="am-divider am-divider-default" />

     	 <CommentList />
     	 <CommentInput />

      </div>
    );
  }
}


class CommentList extends Component{

	render(){
		return (
			<ul class="am-comments-list am-comments-list-flip">
				{
					[1].map(function (item) {
						return <Comment />
					})
				}
			</ul>

		)
	}
}


class Comment extends Component{

	render(){
		return (
			<article class="am-comment">
				<a href="#link-to-user-home">
				<img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96" alt="" class="am-comment-avatar" width="48"
					height="48" />
				</a>

				<div class="am-comment-main">
				<header class="am-comment-hd">
					<div class="am-comment-meta">
					<a href="#link-to-user" class="am-comment-author">某人</a>
					评论于
					<time datetime="2013-07-27T04:54:29-07:00" title="2013年7月27日 下午7:54 格林尼治标准时间+0800">2014-7-12 15:30</time>
					</div>
				</header>

				<div class="am-comment-bd">
					那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？
				</div>
				</div>

			</article>

		)
	}
}


class CommentInput extends Component{

	render(){
		return (

			<div className="am-form" >
				<div className="am-form-group">
					<label for="doc-ta-1">用户名</label>
					<input type="text" />
				</div>
		
				<div className="am-form-group">
					<label for="doc-ta-1">评论内容</label>
					<textarea className="" rows="5" id="doc-ta-1"></textarea>
				</div>
				<p>
					<button type="submit" className="am-btn am-btn-default">提交</button>
				</p>
		   </div>

		);
	}
}







export default CommentApp;
