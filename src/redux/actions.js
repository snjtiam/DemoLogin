export const createUser = (f_name, l_name, email, phone, pass, conf_pass) => ({
  type: 'CREATEUSER',
  f_name,
  l_name,
  email,
  phone,
  pass,
  conf_pass,
});
export const chgLogin = (login_state) => ({
  type: 'CHGLOGIN',
  login_state,
});
