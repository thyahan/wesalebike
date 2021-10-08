import PropTypes from 'prop-types';
import FormLogin from './FormLogin';
import css from './index.module.css';

function LoginContainer() {
  const onSubmit = value => {
    console.log(value);
  };

  return (
    <div className={css.login}>
      <FormLogin onSubmit={onSubmit} />
    </div>
  );
}

export default LoginContainer;
