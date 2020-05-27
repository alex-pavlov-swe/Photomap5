import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';

function Login({ setAlert, login, isAuthenticated }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    if (document.getElementById('login-form')) {
      document.getElementById('login-form').classList.add('show');
    }
  }, []);

  const { username, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const lang = 'eng';

  return (
    <Fragment>
      <div
        className="container-fluid"
        id="login"
        style={{ backgroundImage: "url('/static/frontend/img/auth.jpg')" }}
      >
        <div className="row">
          <div className="col-sm-12 text-center">
            <form
              className="form hide"
              onSubmit={(e) => onSubmit(e)}
              id="login-form"
            >
              <h3>
                <i className="fas fa-user mb-3" />
                {lang === 'rus' ? 'Войти в аккаунт' : 'Log in'}
              </h3>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => onChange(e)}
                  required
                  placeholder={
                    lang === 'rus' ? 'Введите e-mail' : 'Enter your email'
                  }
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  required
                  placeholder={
                    lang === 'rus' ? 'Введите пароль' : 'Enter your password'
                  }
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary mt-1 mb-4" type="submit">
                  {lang === 'rus' ? 'Войти' : 'Sign in'}
                </button>
              </div>
              <p>
                {lang === 'rus' ? 'Еще нет аккаунта?' : 'Not a member?'}{' '}
                <Link to="/register">
                  {lang === 'rus' ? 'Создайте его.' : 'Sign up here.'}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, login })(Login);
