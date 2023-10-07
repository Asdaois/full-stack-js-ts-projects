import LazySpinner from "./components/LazySpinner";

function App() {
  return (
    <div className="App mx-auto max-w-6xl text-center my-8">
      <h1 className="font-semibold text-2xl">react boilerplate</h1>
      <div className="w-64 h-64 m-auto">
        <LazySpinner show={true} delay={9000} />
      </div>
    </div>
  );
}

export default App;
