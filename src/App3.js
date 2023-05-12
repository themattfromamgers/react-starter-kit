import { TestProvider } from "./test/TestContext";
import TestFile from "./test/TestFile";

function App() {

  return (
    <div className="App"> 
      <TestProvider>
        <TestFile />
      </TestProvider>
    </div>
  );
}

export default App;
