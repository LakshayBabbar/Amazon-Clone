import data from "./data";
import Card from "./Card";
import classes from './Cards.module.css'

function Cards() {
  return (
    <div className={classes.wrapper}>
      {data.map((items) => {
        return <Card title={items.title} img={items.img} key={items.title} />;
      })}
    </div>
  );
}

export default Cards;
