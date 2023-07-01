
import Card from './Card';

export default function Cards(props) {
   const {characters} = props;

   return (
   
   <div>
    {characters.map((char)=>{
      return <Card 
      name={char.name}
      species={char.species}
      gender={char.gender}
      image= {char.image}
      key = {char.id}
      onClose = {() => window.alert('Emulamos que se cierra la card')}/>
       
      })

   }
   </div>
   );
}
