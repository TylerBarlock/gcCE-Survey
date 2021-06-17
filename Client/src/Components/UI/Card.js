function Card(props) {
  const classes = "card-white " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
