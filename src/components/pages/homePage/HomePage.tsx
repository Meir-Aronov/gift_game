import classes from "./homePage.module.css";

function HomePage() {
  return (
    <div className={classes.containerHomePage}>
      <div className={classes.textHeader}>
        <span className={classes.black_small}>Who knows </span>
        <span className={classes.black_larg}>Better...</span>
        <span className={classes.pink_text}>?</span>
      </div>
    </div>
  );
}

export default HomePage;
