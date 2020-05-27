import { combineReducers } from 'redux';

import alert from './alert';
import auth from './auth';
import errors from './errors';
import messages from './messages';
import photoUpload from './photoUpload';
import photoScroll from './photoScroll';
import currentPhoto from './currentPhoto';

export default combineReducers({
  alert,
  auth,
  errors,
  messages,
  photoUpload,
  photoScroll,
  currentPhoto,
});
