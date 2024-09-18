import Sign_in from "../../components/sign_in/Sign_in";
import classes from "./homePage.module.css";

function HomePage() {
  return (
    <div className={classes.containerHomePage} >
      <div className={classes.textHeader} draggable>
        <span className={classes.black_small}>Who knows </span>
        <div>
          <span className={classes.black_larg}>Better...</span>
          <span className={classes.pink_text}>?</span>
        </div>
      </div>
      <div className={classes.sign_in}>
        <Sign_in />
      </div>
    </div>
  );
}

export default HomePage;
