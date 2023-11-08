import "./App.css";
import "@mantine/core/styles.css";
import CardsContainer from "./Components/CardsContainer/CardsContainer";
import React, { useState } from "react";
import axios from "axios";
import { InputWithButton } from "./Components/InputWithButton/InputWithButton";
import { Data } from "./Components/types/types";
import { Logo } from "./Components/Logo/Logo";
const App: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [value, setValue] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get<Data>(
        `https://www.googleapis.com/books/v1/volumes?q=${value}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  return (
    <div className="App">
      <form
        className="form"
        style={{ marginTop: !data ? "30vh" : "50px" }}
        onSubmit={(e) => handleSubmit(e)}
        onClick={(e) => handleSubmit(e)}
      >
        <Logo />
        <InputWithButton onChange={(e) => setValue(e.target.value)} />
      </form>
      <CardsContainer data={data} />
    </div>
  );
};

export default App;
