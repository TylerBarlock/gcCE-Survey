import "./App.css";
import Card from "./Components/UI/Card";

function App() {
  return (
    <div className="bg-primary-50 h-full grid grid-cols-1 md:grid-cols-2 gap-4 m-4 w-auto">
      <div className="card-white grid-cols-1 text-center">
        <h1 className="mb-4">GrapeCity Poll System</h1>
        <p className="mb-4">This is some test text. This is some test text. This is some test text. This is some test text. This is some test text. This is some test text. This is some test text.</p>
        <button className="btn-primary">Click Me</button>
      </div> 
      <div className="card-alt grid-cols-1 text-center">
        <h2 className="mb-4">GrapeCity Poll System</h2>
        <p className="mb-4">This is some test text. This is some test text. This is some test text. This is some test text. This is some test text. This is some test text. This is some test text.</p>
        <button className="btn-alt">Click Me</button>
      </div>
    </div>
  );
}

export default App;
