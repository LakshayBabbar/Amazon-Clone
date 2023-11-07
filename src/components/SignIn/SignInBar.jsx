import classes from "./SignInBar.module.css";

function SignInBar() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.hr}></div>
      <div className={classes.content}>
        <p>See personalized recommendations</p>
        <button className={classes.btn}>Sign in</button>
        <p>
          New Customer? <a href="/">Start here.</a>
        </p>
      </div>
      <div className={classes.hr}></div>
    </div>
  );
}

export default SignInBar;
