import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passwordGenerator = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) string += "0123456789";
    if (char) string += "!@#$%^&*_~";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      password = string.charAt(char);
    }

    setPass(password);
  }, [length, numAllowed, char, setPass]);
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
      <h1 className="text-white text-4xl text-center">Password Generator</h1>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white
      bg-gray-700 text-center"
      >
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default App;
