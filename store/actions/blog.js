import axios from '../../axios';
import * as actionTypes from './actionTypes';
import {updateEndpoint} from '../helpers';

const activityStart = (activity) => {
    return {
        type: actionTypes.BLOG_POST_ACTIVITY_START,
        activity: activity
    };
};


const activityFail = (error, activity) => {
    return {
        type: actionTypes.BLOG_POST_ACTIVITY_FAIL,
        error: error,
        activity: activity
    };
};


/* GET_BLOG_POST */
const getBlogPostSuccess = (data) => {
    return {
        type: actionTypes.GET_BLOG_POST_SUCCESS,
        data: data
    };
};

export const getBlogPost = (slug) => {
    let endpoint;
    return dispatch => {
        dispatch(activityStart("GET_BLOG_POST"));
        if(slug===null){
            dispatch(getBlogPostSuccess(null));
        }
        else{
            endpoint = 'blog-posts/slug/'+slug
            axios.get(endpoint)
            .then(response => {
                dispatch(getBlogPostSuccess(response.data));
            })
            .catch(error => {
    
                const errorMsg = "Error fetching blogPost from server.";
                dispatch(activityFail(errorMsg, "GET_BLOG_POST"));
                
            });
        }
        
    };
};
/* --- --- ---- */



/* GET_BLOG_POSTS */
const getBlogPostsSuccess = (data, pagination) => {
    return {
        type: actionTypes.GET_BLOG_POSTS_SUCCESS,
        data: data,
        pagination: pagination
    };
};

export const getBlogPosts = (filter, pagination=true) => {
    return dispatch => {
        dispatch(activityStart("GET_BLOG_POSTS"));

        //let endpoint = 'blogPosts?category_id='+categoryId+'&page_size=5';
        let endpoint
        if(filter.page_size){
            endpoint = `blog-posts?page_size=${filter.page_size}`;
        }
        else{
            endpoint = 'blog-posts?page_size=6';
        }
        

        let newEndpoint = updateEndpoint(endpoint, filter)

        axios.get(newEndpoint)
        .then(response => {
            dispatch(getBlogPostsSuccess(response.data, pagination));
        })
        .catch(error => {
            console.log(error);
            const errorMsg = "Error fetching blogPosts from server.";
            
            dispatch(activityFail(errorMsg, "GET_BLOG_POSTS"));
            
        });
        
    };
};
/* --- --- ---- */


export const populateBlogPosts = (data) => {
    return dispatch => {
        dispatch(getBlogPostsSuccess(data));
    }
}


export const populateBlogPost = (data) => {
    console.log("populateBlogPost",data)
    return dispatch => {
        dispatch(getBlogPostSuccess(data));
    }
}