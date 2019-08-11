import axios from 'axios';
import { AuthType } from './type-enum';
import { setLoginAlert } from './login-alert';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: AuthType.USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AuthType.AUTH_ERROR
    });
  }
};

// Register User
export const register = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: AuthType.REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setLoginAlert(error.msg, 'danger')));
    }
    dispatch({ type: AuthType.REGISTER_FAIL });
  }
};
