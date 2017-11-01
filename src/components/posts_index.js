import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {Link} from 'react-router-dom';

export class PostsIndex extends React.Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(data){
        // my solution first
        const posts = [];
        for (const key in this.props.posts){
            posts.push(<div key={this.props.posts[key].id}>
                <span><h1>{this.props.posts[key].title}</h1></span>
                <span><p>{this.props.posts[key].content}</p></span>
                </div>)
        }

        return (
            <div>
                {posts}
            </div>
        )
        // tutorial solution using _
        // return _.map(this.props.posts, post => {
        //     return (
        //         <li className='listGroupItem' key={post.id}>
        //             {post.title}
        //         </li>
        //     )
        // });
    }

    render(){
        console.log(this.props.posts);
        // return (<div></div>);
        return (<div>
            {this.renderPosts()}
            <Link to="/posts/new" className="text-xs-right">
            Add a Post
            </Link>
        </div>)
    }
}

function mapStateToProps({posts}){
    return {posts};

}


export default connect(mapStateToProps, {fetchPosts})(PostsIndex);