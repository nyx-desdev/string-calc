import { CalculatorForm } from "./components/CalculatorForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <CalculatorForm />
        </div>
      </div>
    </div>
  );
}

export default App;
