import {combineReducers} from 'redux';

import genericReducer from './genericReducer';

const rootReducer = combineReducers({
  images: genericReducer('templates', 'image'),
  pages: genericReducer('pages', 'page'),
  posts: genericReducer('posts', 'post'),
  settings: genericReducer('settings', 'setting'),
  styles: genericReducer('styles', 'style'),
  tags: genericReducer('tags', 'tag'),
  templates: genericReducer('templates', 'template'),
  users: genericReducer('users', 'user')
});

export default rootReducer;
