import { combineReducers } from 'redux';

import photoUpload from './photoUpload';
import photoScroll from './photoScroll';
import currentPhoto from './currentPhoto';

export default combineReducers({
  photoUpload,
  photoScroll,
  currentPhoto,
});
