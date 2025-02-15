import { useState, useCallback, useEffect, useRef } from "react";

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

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      password += string.charAt(char);
    }

    setPass(password);
  }, [length, numAllowed, char, setPass]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, char, setPass, passwordGenerator]);

  //useRef hook
  const passwordRef = useRef(null);

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
      <h1 className="text-white text-4xl text-center">Password Generator</h1>
      <div
        className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white
      bg-gray-700 text-center"
      >
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassToClipboard}
            className="cursor-pointer outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 rounded-md text-center"
          >
            {" "}
            Copy
          </button>
        </div>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-white">Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="number allowed"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label className="text-white">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={char}
            id="characters allowed"
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label className="text-white">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
