import { useState, useEffect } from "react";
export function React23() {
  const [users, setuser] = useState([]);
  const Fetch = async () => {
  const Getresponse = await fetch("https://jsonplaceholder.typicode.com/comments");
  const Getdata = await Getresponse.json();
  setuser(Getdata);
  console.log(Getdata);
  };
  //   useEffect(() => {
  //     Fetch();
  //   }, []);

  return (
    <div>
      <button onClick={Fetch}> FETCH the data</button>
      <table style={{ border: "1px solid black", bordercollapse: "collapse" }}>
        <tr>
          <td style={{ border: "1px solid black", textAlign: "center" }}>id</td>
          <td style={{ border: "1px solid black" }}>postid</td>
          <td style={{ border: "1px solid black", textAlign: "center" }}>
            name
          </td>
          <td style={{ border: "1px solid black", textAlign: "center" }}>
            email
          </td>
          <td style={{ border: "1px solid black", textAlign: "center" }}>
            body
          </td>
        </tr>
        {users.map((users) => (
          <tr>
            <td style={{ border: "1px solid black" }}>{users.id}</td>
            <td style={{ border: "1px solid black" }}>{users.postId} </td>
            <td style={{ border: "1px solid black" }}>{users.name}</td>
            <td style={{ border: "1px solid black" }}>{users.email} </td>
            <td style={{ border: "1px solid black" }}>{users.body} </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
