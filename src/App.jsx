import classes from "./App.module.css";
import Navbar from "./components/NavBar/Navbar";
import Cards from "./components/Card/Cards";
import Swipper from "./components/Swipper/Swipper";
import SignInBar from "./components/SignIn/SignInBar";

function App() {
  return (
    <>
      <Navbar />
      <div className={classes.wrapper}>
        <Swipper />
        <Cards />
        <SignInBar />
      </div>
    </>
  );
}

export default App;
