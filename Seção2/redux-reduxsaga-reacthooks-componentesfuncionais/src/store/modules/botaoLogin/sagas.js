import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const request = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 750);
  });

function* exampleRequestLogin() {
  try {
    yield call(request);
    yield put(actions.clicaBotaoSuccess());
    toast.success('Alterado com Sucesso!');
  } catch (error) {
    toast.error('Erro na Requisição');
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequestLogin),
]);
