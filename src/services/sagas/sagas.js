import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../constants';
import {
  setPosts,
  setUserInfo,
  setUserPosts,
  setComments,
  setLoading,
} from '../actions';
import {
  fetchPosts,
  fetchUser,
  fetchUserPosts,
  fetchComments,
} from '../api';

function* getPostsSaga() {
  try {
    yield put(setLoading(true));
    const posts = yield call(fetchPosts);
    yield put(setPosts(posts));
    yield put(setLoading(false));
  } catch (error) {
    console.log('Error fetching posts:', error);
    yield put(setLoading(false));
  }
}

function* getUserSaga(action) {
  try {
    yield put(setLoading(true));
    const user = yield call(fetchUser, action.payload);
    yield put(setUserInfo(user));
    yield put(setLoading(false));
  } catch (error) {
    console.log('Error fetching user info:', error);
    yield put(setLoading(false));
  }
}

function* getUserPostsSaga(action) {
  try {
    yield put(setLoading(true));
    const posts = yield call(fetchUserPosts, action.payload);
    yield put(setUserPosts(posts));
    yield put(setLoading(false));
  } catch (error) {
    console.log('Error fetching user posts:', error);
    yield put(setLoading(false));
  }
}

function* getCommentsSaga(action) {
  try {
    const { data } = yield call(fetchComments, action.payload);
    yield put(setComments(data));
  } catch (error) {
    console.log('Error fetching comments:', error);
  }
}

function* watchSaga() {
  yield takeLatest(ActionTypes.FETCH_POSTS, getPostsSaga);
  yield takeLatest(ActionTypes.FETCH_USER_INFO, getUserSaga);
  yield takeLatest(ActionTypes.FETCH_USER_POSTS, getUserPostsSaga);
  yield takeLatest(ActionTypes.FETCH_COMMENTS, getCommentsSaga);
}

export default function* rootSaga() {
  yield all([watchSaga()]);
}