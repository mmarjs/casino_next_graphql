import * as actionTypes from '../actions/actionTypes';

const initialState = {
    blogPost:null,
    loading: {
        activity: null,
        status: false
    },
    blogPosts:{
        current_page:0,
        items:[],
        total_items:0,
        total_pages:0
    },
    translation: null,
    translations: [],
    loadingBlogPost: false,
    loadingBlogPosts: false
};


const activityStart = ( state, action ) => {
    
    let loading = {};
    if(action.activity==="GET_BLOG_POST"){
        loading.loadingBlogPost = true;
    }
    else if(action.activity==="GET_BLOG_POSTS"){
        loading.loadingBlogPosts = true;
    }

    return {
        ...state,
        ...loading
    }
};

const activityFail = ( state, action ) => {

    let loading = {};
    if(action.activity==="GET_BLOG_POST"){
        loading.loadingBlogPost = false;
    }
    else if(action.activity==="GET_BLOG_POSTS"){
        loading.loadingBlogPosts = false;
    }

    return {
        ...state,
        ...loading
    }
};



const getBlogPosts = ( state, action ) => {
    return {
        ...state,
        blogPosts:{
            ...state.blogPosts,
            //items: action.pagination ? action.data.items : parseInt(action.data.current_page)===0?action.data.items:update(state.blogPosts.items, {$push: action.data.items}),
            items: action.data.items,
            current_page: action.data.current_page,
        },
        loadingBlogPosts: false
    }
};

const getBlogPost = ( state, action ) => {
    return {
        ...state,
        blogPost: action.data,
        loadingBlogPost: false
    }
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.BLOG_POST_ACTIVITY_START: return activityStart( state, action );
        case actionTypes.BLOG_POST_ACTIVITY_FAIL: return activityFail( state, action );
        case actionTypes.GET_BLOG_POSTS_SUCCESS: return getBlogPosts( state, action );
        case actionTypes.GET_BLOG_POST_SUCCESS: return getBlogPost( state, action );

        default: return state;
    }
};

export default reducer;
