export default function App() {
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
