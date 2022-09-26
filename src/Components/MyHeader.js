/* composant qui reçoit le titre à afficher via les props */
export default function MyHeader(props) {
  return (
    <header className="MyHeader">
      <img src="./logo192.png" alt={ props.titre } />
      <h1>{ props.titre }</h1>
    </header>
  )
}