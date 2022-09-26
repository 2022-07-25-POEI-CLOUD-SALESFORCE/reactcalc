import { useState } from 'react';
import './App.css';
import MyButton from './Components/MyButton';
import MyFooter from './Components/MyFooter';
import MyHeader from './Components/MyHeader';
/* un input nécessite un state pour la value (mise à jour affichage) et une fonction sur le "change" */

export default function App() {
  //state pour le résultat (maj affichage)
  const [resultat, setResultat] = useState(0);
  // state pour les input
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  //state pour les classes dynamiques (maj affichage)
  const [cls1, setCls1] = useState('ko');
  const [cls2, setCls2] = useState('ko');

  /* addition. On force la valeur numérique pour éviter une concaténation */
  function addition() {
    setResultat(parseFloat(n1) + parseFloat(n2));
  }
  function soustraction() {
    setResultat(parseFloat(n1) - parseFloat(n2));
  }
  function multiplication() {
    setResultat(parseFloat(n1) * parseFloat(n2));
  }
  /* division. test pour éviter la division par zéro */
  function division() {
    if(parseFloat(n2) !== 0) setResultat(parseFloat(n1) / parseFloat(n2));
    else setResultat('Oups');
  }
  /* change sur les inputs */
  function changeN1(event){
    // si c'est pas un nombre, on met la classe d'erreur
    if(isNaN(event.target.value)) setCls1('ko');
    //sinon classe "valide"
    else setCls1('ok');
    //on change le state pour provoquer la mise à jour de l'affichage
    setN1(event.target.value);
  }
  function changeN2(event){
    if(isNaN(event.target.value)) setCls2('ko');
    else setCls2('ok');
    setN2(event.target.value);
  }
  
  return (
    <div className="App">
      <MyHeader titre="React Calc" />
      <p className="resultat">{ resultat }</p>
      <p>
        <label>Nombre 1</label>
        <input value={ n1 } onChange={ changeN1 } className={ cls1 } />
      </p>
      <p>
        <label>Nombre 2</label>
        <input value={ n2 } onChange={ changeN2 } className={ cls2 }/>
      </p>
      <MyButton texte="Addition" btnClick={ addition }/>
      <MyButton texte="soustraction" btnClick={ soustraction }/>
      <MyButton texte="Multiplication" btnClick={ multiplication } />
      <MyButton texte="Division" btnClick={ division }/>
      <MyFooter />
    </div>
  );
}

// à exporter si non fait dans la déclaration du composant: export default App;
