import { DataContextProvider } from "./components/context_reducer/context";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Home />
      </DataContextProvider>
    </div>
  );
}

export default App;
