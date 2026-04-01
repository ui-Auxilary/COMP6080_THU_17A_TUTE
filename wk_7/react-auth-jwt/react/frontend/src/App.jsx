import "./App.css";

function App() {
  // Add state
  const login = async function () {

  };

  return (
    <div style={{ paddingLeft: "45vw" }}>
      <h1>Login</h1>
      <div>
        <h2>Username</h2>
        <input
          type='text'
          onChange={() => {}}
        ></input>
      </div>
      <div>
        <h2>Password</h2>
        <input
          type='password'
          onChange={() => {}}
        ></input>
      </div>
      <div>
        <input
          type='button'
          value='submit'
          onClick={() => {}}
        ></input>
      </div>
    </div>
  );
}

export default App;
