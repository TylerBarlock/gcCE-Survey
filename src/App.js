import "./App.css";
import Card from "./Components/UI/Card";

function App() {
  return (
    <div className="bg-primary-50 w-full h-full">
      <div className="card-white grid-cols-1 text-center">
        <h2 className="text-2xl mb-4">GrapeCity Poll System</h2>
        <button className="btn-primary">Click Me</button>
      </div> 
      <div className="card-alt grid-cols-1 text-center">
        <h2 className="text-2xl mb-4">GrapeCity Poll System</h2>
        <button className="btn-alt">Click Me</button>
      </div>
    </div>
  );
}

export default App;
