import style from './Cardsstyle.module.css'
export default function Card(props) {
   return (
      <div className={style.divv}>
         <button className={style.botonx} onClick={props.onClose}>X</button>
         <h2 className={style.name}>{props.name}</h2>
         <h4 className={style.status}>{props.status}</h4>
         <h3 className={style.species}>{props.species}</h3>
         <h4 className={style.genero}>{props.gender}</h4>
         <h4>{props.origin}</h4>
         <img src={props.image} alt='' /> 
      </div>
   );
}
