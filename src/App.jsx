// components
import AnimalForm from "./components/Forms/AnimalForm";
import BasicForm from "./components/Forms/BasicForm";
import OceanForm from "./components/Forms/OceanForm";

// css
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <BasicForm formName="Basic Formulaire" />
        <AnimalForm formName="Inscription vétérinaire" />
        <OceanForm formName="Location de transat"/>
      </div>
    </>
  );
}

export default App;
