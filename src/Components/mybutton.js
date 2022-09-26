/* props permet de recevoir le texte du bouton, 
   et de retourner l'évènement à traiter par le parent */
export default function MyButton(props) {
  return (
    <button className="MyButton" onClick={ props.btnClick }>{ props.texte }</button>
  )
}