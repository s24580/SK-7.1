import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <JSXRules text="to jest text" />
      <FancyTable n={5} />
      <Multipe name="fifi" number={5} />
    </div>
  );
}

function JSXRules({ text }) {
  return <blockquote>{text}</blockquote>;
}

function FancyTable({ n }) {
  const listItems = [];
  for (let i = 1; i <= n; i++) {
    listItems.push(<li key={i}>{i}</li>);
  }
  return <ul>{listItems}</ul>;
}

function Multipe({ name, number }) {
  return (
    <>
      <h2>{name}</h2>
      <FancyTable n={number} />
    </>
  );
}
