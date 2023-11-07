import classes from "./Body.module.css";
import Cards from "./Card/Cards";
import Swipper from "./Swipper";
import SignInBar from './SignInBar';

function Body() {
  return (
    <div className={classes.wrapper}>
      <Swipper /> 
      <Cards />
      <SignInBar/>
    </div>
  );
}

export default Body;
