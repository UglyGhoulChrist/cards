import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      {props.children}
      <div className="card-body">
        <h3>{props.title}</h3>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn">Go somewhere</button>
      </div>
    </div>
  );
}
export default Card;
