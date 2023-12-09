import { useEffect, useState } from "react";

export function Recat23_1() {
  const [users, setuser] = useState([]);

  const Fetch = async () => {
    
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setuser(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={Fetch}>Click to fetch</button>
      <table style={{ border: "1px solid black" }}>
        
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.title}</td>
              <td>{user.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
