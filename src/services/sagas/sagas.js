import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../constants';
import {
  setPosts,
  setUserInfo,
  setUserPosts,
  setComments,
  setLoading,
  setCommentsLoading
} from '../actions';
import {
  fetchData
} from '../api';


const delay = () => new Promise((resolve) => {
  setTimeout(resolve, 500);
});


function* getPostsSaga() {
  try {
    yield put(setLoading(true));
    yield delay();
    const { data } = yield call(fetchData, 'posts');
    yield put(setPosts(data));
    yield put(setLoading(false));
  } catch (error) {
    console.log('Error fetching posts:', error);
    yield put(setLoading(false));
  }
}

function* getUserSaga(action) {
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchData, `users/${action.payload}`);
    yield put(setUserInfo(data));
    yield put(setLoading(false));
  } catch (error) {
    console.log('Error fetching user info:', error);
    yield put(setLoading(false));
  }
}

function* getUserPostsSaga(action) {
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchData, `posts?userId=${action.payload}`);
    yield put(setUserPosts(data));
    yield put(setLoading(false));
  } catch (error) {
    console.log('Error fetching user posts:', error);
    yield put(setLoading(false));
  }
}

function* getCommentsSaga(action) {

  try {
    yield put(setCommentsLoading(true));
    yield delay();
    const { data } = yield call(fetchData, 'comments');
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