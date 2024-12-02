import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
//In react ,the siblings components cannot atlk to each other only there is a parent and child reation of communication using props,in react the info only flows through one way down that is from parent to child
export default function App() {
  //But,for the form component need to pass the info to the packing list which is not possible for sibling components to interact ,so we use a new technique known as "lifting up the state " we moved up the state componensts of form to a nearby parent that is "App Component " then we passed the arguments as props to the form and packing list components ,re-rendering on receiving the props each time
  const [items, setitems] = useState([]);
  function handleitems(item) {
    setitems((items) => [...items, item]);
  }
  function handleremoveitem(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure You want delete All ?");
    if (confirmed) setitems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdditem={handleitems} />
      <PackingList
        items={items}
        onDeleteitem={handleremoveitem}
        onToggleItem={handleToggleItem}
        onClearlist={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

//Controlled Elements
//by default these input fields they maintain their own state inside the html element itself ie the dom in react all the state should be inside the application not inside dom,for this we use a techniique called controlled elements in which react controlls and owns the state of these fields and no longer the dom
//define a piece of state
//we use that piece of state on the element that we want to control,basically we force the element always take the value this atte variable
//finally updationg the variable
