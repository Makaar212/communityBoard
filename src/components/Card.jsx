const Card = (props) => {
  return (
    <div className="card">
      <img className="gameImage" src={props.image}></img>
      <div className="notImage">
        <h2 className="gameTitle">{props.title}</h2>
        <h4 className="gameTheme">{props.theme}</h4>
        <button className="steamLink">
          <a href={props.link} rel="noopener noreferrer" target="_blank">
            View On Steam
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
