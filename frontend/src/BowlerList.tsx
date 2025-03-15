import { useState, useEffect } from "react";
import { bowler } from "./types/bowler";

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  useEffect(() => {
    const fetchBowlers = async () => {
      const response = await fetch("https://localhost:5000/api/bowler");
      const data = await response.json();
      setBowlers(data);
    };
    fetchBowlers();
  }, []);

  return (
    <>
      <h1>Bowlers</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit}. {b.bowlerLastName}
              </td>
              <td>{b.team.teamName} </td>
              <td>{b.bowlerCity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
