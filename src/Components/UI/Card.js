function Card(props) {
  const classes = "card bg-primary-50 w-64 h-64 shadow-lg rounded-md m-4 p-4" + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
