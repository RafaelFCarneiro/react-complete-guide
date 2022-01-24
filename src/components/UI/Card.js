import './Card.css';

function Card(props) {
  const classes = ['card'];
  if (props && props.className) {
    classes.push(props.className);
  }
  return <div className={classes.join(' ')}>{props.children}</div>;
}

export default Card;
