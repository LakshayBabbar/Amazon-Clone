import classes from './Card.module.css';

function Card(props) {
  return (
    <div className={classes.wrapper}>
    <h3>{props.title}</h3>
    <div className={classes.img}><img src={props.img} alt="amazon"/></div>
    <a>Shop now</a>
    </div>
  )
}

export default Card