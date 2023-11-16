import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function handleFname(event) {
    const firstName = event.target.value;
    setFname(firstName);
  }
  function handleLname(event) {
    const lastName = event.target.value;
    setLname(lastName);
  }
  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleFname}
          placeholder="First Name"
          value={fname}
        />
        <input
          name="lName"
          onChange={handleLname}
          placeholder="Last Name"
          value={lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
