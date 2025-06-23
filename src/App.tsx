import { useState } from "react";

type Die = {
  id: number;
  value: number;
  isSelected: boolean;
};

function App() {
  const [dice, setDice] = useState<Die[]>(allNewDice());

  function generateNewDie(): Die {
    return {
      id: Math.random(), // Gera um ID único
      value: Math.ceil(Math.random() * 6), // Valor entre 1 e 6
      isSelected: false,
    };
  }

  function allNewDice() {
    const newDice: Die[] = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function selectDie(id: number): void {
    let upadtedDice = dice.map((die) =>
      die.id === id ? { ...die, isSelected: !die.isSelected } : die
    );

    setDice(upadtedDice);
  }

  console.log(dice);

  return (
    <div>
      <div className="container">
        {dice.map((die) => (
          <Die
            key={die.id}
            value={die.value}
            isSelected={die.isSelected}
            handleClick={() => selectDie(die.id)}
          />
        ))}
      </div>

      <button onClick={allNewDice}>Generate Dice</button>
    </div>
  );
}

type DieProps = {
  value: number;
  isSelected: boolean;
  handleClick: () => void;
};

function Die({ isSelected, value, handleClick }: DieProps) {
  return (
    <div
      style={{ background: isSelected ? "red" : "" }}
      onClick={handleClick}
      className="die"
    >
      {value}
    </div>
  );
}

export default App;
