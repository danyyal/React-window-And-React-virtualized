import React from 'react';
import './App.css';
import ReactWindow from './ReactWindow';
import ReactVirtualized from './ReactVirtualized';

function App() {
	const [virtualized, setVirtualized] = React.useState(true);

  return (
    <div className="App">
      <button
				style={{
					padding: "10px",
					backgroundColor: "white",
					borderRadius: "5px",
					border: "1px solid black",
					boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
					margin: "10px",
					cursor: "pointer",
				}}
				onClick={() => setVirtualized((virtualized) => !virtualized)}
			>
				{" "}
				Switch to {virtualized ? "React Window" : "React virtualized"}
			</button>
      {!virtualized ? <ReactWindow />:
      <ReactVirtualized />}
    </div>
  );
}

export default App;
