/*************  ✨ Codeium Command 🌟  *************/
export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
      hello
    </div>
  );
  <div>
    <Logo />
    <Form />
    <PackingList />
    <Stats />
    hello
  </div>;
}

function Logo() {
  return <h1>Far Away ✈️</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip? ❔</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">Lists</div>;
}

function Stats() {
  return (
    <footer>
      <em>💼You have X item on your list and you already packed X%</em>
    </footer>
  );
}

/******  447ee429-4b5a-4a5c-8d13-09c4de2357ce  *******/