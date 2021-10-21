import "./App.css";
import { Fragment, useState } from "react";
import Header from "./components/Header";
import Fruta from "./components/Fruta";
import Footer from "./components/Footer";

function App() {
  const [frutas, setFrutas] = useState([
    { id: 1, nombre: "Manzanas", cantidad: "1 KG", precio: 200 },
    { id: 2, nombre: "Peras", cantidad: "1 KG", precio: 150 },
    { id: 3, nombre: "Naranjas", cantidad: "1 KG", precio: 100 },
    { id: 4, nombre: "Mandarinas", cantidad: "1 KG", precio: 70 },
    { id: 5, nombre: "Pomelos", cantidad: "1 KG", precio: 100 },
  ]);

  return (
    <Fragment>
      <Header />
      {frutas.map((fruta) => {
        return <Fruta fruta={fruta} />;
      })}
      <Footer />
    </Fragment>
  );
}

export default App;
