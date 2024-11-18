
function Card(props) {

  return (
    <div className="flex flex-col gap-3  border-black rounded-[15px] lg:w-[25vw] h-auto  w-[250px] md:w-[40vw]  p-3 items-center bg-white">
      <img src={props.img} alt={props.titl} className="object-fill w-[95%] h-[80%] hover:scale-[1.02]" />
      <h2 className="font-bold text-[20px] text-wrap text-center">{props.titl}</h2>
      <button className="rounded bg-red-500 p-2 hover:bg-red-600 hover:text-white" id="btn" onClick={() =>props.removeFunc(props.movie.id)}>Not Interested</button>
    </div>
  );
}

export default Card;