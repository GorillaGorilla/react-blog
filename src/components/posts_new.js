import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {createPost} from '../actions';

export class PostNew extends React.Component {

    renderField(field) {
        const {meta: {touched, error}} = field;

        return (
            <div >
                <label>{field.title}</label>
                <input type="text"
                {...field.input}
                />
                {touched ? error : ''}
            </div>
        )
    }

    onSubmit(values){
       
        this.props.createPost(values, () =>  {
            this.props.history.push('/')
        });
    }


    render() {
        const {handleSubmit} = this.props;
        return (<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
                label="Title"
                name="title"
                component={this.renderField}
            />

            <Field
                label="Categories"
                name="categories"
                component={this.renderField}
            />
            <Field
                label="Content"
                name="content"
                component={this.renderField}
            />
            <span><button type="submit">Submit</button>
            <Link to="/posts">Cancel</Link></span>
            
            
            </form>);
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title";
    }

    return errors;
}


export default 

reduxForm({validate,
form: 'PostsNewForm'})
(connect(null, {createPost})(PostNew))

;