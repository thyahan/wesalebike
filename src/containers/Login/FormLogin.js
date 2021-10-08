import PropTypes from 'prop-types';
import css from './FormLogin.module.css';

function FormLogin(props) {
  const {onSubmit} = props;

  const onFormSubmit = e => {
    const email = e.target[0].value;
    const password = e.target[1].value;

    onSubmit?.({email, password});
    e.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit} className={css.form}>
      <label className={css.form_title_label} id="form_title_label">
        Login
      </label>
      <label className={css.form_label} id="form_email_label">
        Email
      </label>
      <input className={css.form_input} id="form_email_input" type="email" required />
      <label className={css.form_label} label="form_password_input">
        Password
      </label>
      <input className={css.form_input} id="form_password_input" type="password" required />
      <div className={css.button_group}>
        <button className={`${css.form_button} ${css.submit}`} id="form_submit" type="submit">
          Login
        </button>
        <span className={css.divider}></span>
        <span className={css.register}>
          Or&nbsp;
          <a id="register_link" href="/register" className={css.link}>
            Register
          </a>
        </span>
      </div>
    </form>
  );
}

FormLogin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormLogin;
