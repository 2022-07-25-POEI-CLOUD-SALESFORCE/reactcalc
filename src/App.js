import './App.css';
import MyButton from './Components/MyButton';
import MyFooter from './Components/MyFooter';
import MyHeader from './Components/MyHeader';

export default function App() {
  return (
    <div className="App">
      <MyHeader titre="React Calc" />
      <p className="resultat">{ resultat }</p>
      <p>
        <label>Nombre 1</label>
        <input />
      </p>
      <p>
        <label>Nombre 2</label>
        <input />
      </p>
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyFooter />
    </div>
  );
}

// à exporter si non fait dans la déclaration du composant: export default App;
