import { useState } from "react";
import CardList from "../components/CardList/CardList";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import FormBox from "../components/FormBox/FormBox";
import Header from "../components/Header/Header";
import s from "./App.module.scss";

function App() {

  const [initialCount, setInitialCount] = useState(6);


  return (
    <div className={s.wrapper}>
      <Header />

      <div className={s.container}>
        <DescriptionBox />
        <CardList initialCount={initialCount}/>
        <FormBox showLess={setInitialCount}/>
      </div>
    </div>
  );
}

export default App;
