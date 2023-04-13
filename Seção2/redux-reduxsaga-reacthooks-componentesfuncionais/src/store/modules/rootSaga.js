import { all } from 'redux-saga/effects';

import exampleRequestLogin from './botaoLogin/sagas';

export default function* rootSaga() {
  return yield all([exampleRequestLogin]);
}
