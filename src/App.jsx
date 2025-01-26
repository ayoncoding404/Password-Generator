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
  }, [length, numAllowed, char, setPass]);
  return (
    <div>
      <h1 className="text-white text-4xl text-center">Password Generator</h1>
    </div>
  );
}

export default App;
