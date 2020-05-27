import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

function Register({ isAuthenticated, register, setAlert }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, email, password, password2 } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger', 3600);
    } else {
      register({ username, email, password });
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (document.getElementById('register-form')) {
      document.getElementById('register-form').classList.add('show');
    }
  });

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const lang = 'eng';

  return (
    <Fragment>
      <div
        className="container-fluid"
        id="register"
        style={{ backgroundImage: "url('/static/frontend/img/auth.jpg')" }}
      >
        <div className="row">
          <div className="col-sm-12 text-center">
            <form
              className="form hide"
              id="register-form"
              onSubmit={(e) => onSubmit(e)}
            >
              <h3>
                <i className="fas fa-user mb-3" />
                {lang === 'rus' ? 'Создать аккаунт' : 'Sign up'}
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
                    lang === 'rus' ? 'Как Вас зовут' : 'Enter your name'
                  }
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                  placeholder={
                    lang === 'rus'
                      ? 'Введите Ваш адрес электронной почты'
                      : 'Enter your email'
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
                  minLength="6"
                  placeholder={
                    lang === 'rus' ? 'Введите пароль' : 'Enter your password'
                  }
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="password2"
                  value={password2}
                  onChange={(e) => onChange(e)}
                  required
                  minLength="6"
                  placeholder={
                    lang === 'rus'
                      ? 'Введите пароль еще раз'
                      : 'Repeat your password'
                  }
                />
              </div>
              <button className="btn btn-primary mt-1 mb-4" type="submit">
                {lang === 'rus' ? 'Зарегистрироваться' : 'Sign up'}
              </button>
              <p>
                {lang === 'rus'
                  ? 'Уже есть аккаунт?'
                  : 'Already have an account?'}
                <Link to="/login"> {lang === 'rus' ? 'Войти' : 'Sign in'}</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Register.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, setAlert })(Register);
