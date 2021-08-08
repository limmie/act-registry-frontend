export default ({ $auth, redirect }) => {
  const loggedIn = $auth.loggedIn || $auth.$storage.getCookie("auth-user");
  if (loggedIn) return;
  redirect("/");
};
