import React, { useState } from "react";
import axios from "axios";

const App = () => {
  let [inputName, setInputName] = useState("");
  let [email, setEmail] = useState("");
  let [inputNum, setInputNum] = useState("");
  let [pass, setPass] = useState("");
  let [fetchData, setFetchData] = useState([]);

  let [search, setSearch] = useState(""); // 🔍 search input

  // Submit Handler
  let onSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: inputName,
      email: email,
      number: inputNum,
      password: pass,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => {
        alert("Submitted!");
        setFetchData((old) => [...old, data]);

        setInputName("");
        setEmail("");
        setInputNum("");
        setPass("");
      })
      .catch((err) => console.log(err));
  };

  // 🔍 Search function
  let handleSearch = () => {
    let found = fetchData.find(
      (item) => item.name.toLowerCase() === search.toLowerCase()
    );

    if (found) {
      alert(
        `Data Found!\nName: ${found.name}\nEmail: ${found.email}\nPhone: ${found.number}`
      );
    } else {
      alert("No data found");
    }
  };

  return (
  <div className="m-5">

    {/* Form */}
    <form
      onSubmit={onSubmit}
      className="m-3 p-5 bg-amber-700 text-white flex gap-3 rounded"
    >
      <input
        required
        value={inputName}
        type="text"
        onChange={(e) => setInputName(e.target.value)}
        placeholder="Enter your name"
        className="p-2 rounded text-black w-40"
      />

      <input
        required
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="p-2 rounded text-black w-40"
      />

      <input
        required
        value={inputNum}
        type="number"
        onChange={(e) => setInputNum(e.target.value)}
        placeholder="Enter your number"
        className="p-2 rounded text-black w-40"
      />

      <input
        required
        value={pass}
        type="password"
        onChange={(e) => setPass(e.target.value)}
        placeholder="Enter your password"
        className="p-2 rounded text-black w-40"
      />

      <button className="bg-black px-4 py-2 rounded text-white">
        Submit
      </button>
    </form>

    {/* 🔍 Search bar aligned to RIGHT */}
    <div className="flex justify-end m-3 gap-3">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search name"
        className="border p-2 rounded w-48"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 rounded"
      >
        Search
      </button>
    </div>

    {/* Data Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
      {fetchData.map((item, index) => (
        <div
          key={index}
          className="p-4 border border-gray-400 rounded-lg shadow bg-white"
        >
          <h2 className="font-semibold text-lg">Name: {item.name}</h2>
          <p>Email: {item.email}</p>
          <p>Phone: {item.number}</p>
          <p>Password: {item.password}</p>
        </div>
      ))}
    </div>
  </div>
);

}

export default App;
