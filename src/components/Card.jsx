const Card = (props) => {
  return (
    <div className="card">
      <img className="gameImage" src={props.image}></img>
      <div className="notImage">
        <h3 className="gameTitle">{props.title}</h3>
        <h4 className="gameTheme">{props.theme}</h4>
        <button className="steamLink">
          <a href={props.link}>View On Steam</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
