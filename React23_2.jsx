import { useEffect, useState } from "react";
export function Recat23_2() {
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(false);
  const Fetch = () => {
    setloading(true);
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log("hii");

        setloading(false);
        setuser(data);
      });
  };
  return (
    <div>
      <button onClick={Fetch}>show</button>
      <table>
        {user.map((user) => (
          <tr>
            <td>{user.id}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
