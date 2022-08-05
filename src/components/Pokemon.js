
const Pokemon = (props) => {
  
  return (
    <>
    <li className="collection-item avatar">
      <img src={props.img} alt={`Drawing of a ${props.name} pokémon`} className="circle" />
        <span className="title">{props.name}</span>
        <p>{props.type}<br />
        Height: {props.height}
        </p>
    </li>
    </>
  );
};

export default Pokemon;
