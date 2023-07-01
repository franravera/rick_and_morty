import buscar from './searchbar.module.css'
export default function SearchBar(props) {
   return (
      <div className={buscar.contenedor} >
          <input className={buscar.texto} type='search'/>
          <button className={buscar.boton} onClick={()=>props.onSearch(2)}>Agregar</button> 
      </div>
   );
}
