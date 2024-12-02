import { useState } from "react";
export default function Form({ onAdditem }) {
  const [description, setDesciption] = useState("");
  const [quantity, setquantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAdditem(newItem);
    setDesciption("");
    setquantity(1);
  }
  return (
    //we wont call the function react will call for us
    //we are listening to the submit event on the form as soon as we hit the button add or press enter while we are in the input field
    //we can also not listen to submit event and can listen the event of the add button ({onClick}) but it would only on the click of the button ,not work on pressing enter
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your😍 trip?</h3>
      {/* by declaring the value ,that means react is now the incharge instead of
      dom  and the target,value directly comes from the below option that is value ={num} adn bydefalut the e.target.value is a string so we change it to a nunmber */}
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item... "
        value={description}
        onChange={(e) => setDesciption(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
