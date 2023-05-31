import { ActionTypes } from '../constants';

export const setLoading = (isLoading) => ({
  type: ActionTypes.SET_LOADING,
  payload: isLoading,
});

export const setPosts = (posts) => ({
  type: ActionTypes.SET_POSTS,
  payload: posts,
});

export const setUserInfo = (userInfo) => ({
  type: ActionTypes.SET_USER_INFO,
  payload: userInfo,
});

export const setUserPosts = (userPosts) => ({
  type: ActionTypes.SET_USER_POSTS,
  payload: userPosts,
});

export const setComments = (payload) => ({
  type: ActionTypes.SET_COMMENTS,
  payload
});

export const fetchPosts = () => ({
  type: ActionTypes.FETCH_POSTS,
});

export const fetchUserInfo = (userId) => ({
  type: ActionTypes.FETCH_USER_INFO,
  payload: userId,
});

export const fetchUserPosts = (userId) => ({
  type: ActionTypes.FETCH_USER_POSTS,
  payload: userId,
});

export const fetchComments = (postId) => ({
  type: ActionTypes.FETCH_COMMENTS,
  payload: postId,
});