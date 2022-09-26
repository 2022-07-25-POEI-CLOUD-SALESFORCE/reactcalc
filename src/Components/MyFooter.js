export default function MyFooter() {
  //récupération de l'année en cours
  let dte = new Date().getFullYear();
  //retour obligatoire dans composant fonction
  return (
    <footer className="MyFooter">Copyright &copy;{ dte } - Moi</footer>
  )
}