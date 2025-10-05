import { Outlet, Link } from "react-router-dom";
function Games() {
  const games = [
    { id: "biscuits", name: "Biscuits from Outerspace" },
    { id: "glitch-pong", name: "Glitch Pong" },
    { id: "aim-lab", name: "Aim Lab" },
  ];
  return(
    <div>
        <h1>Games</h1>
        <ul>
            {games.map(g =>(
                <li key={g.id}>
                    <Link to={g.id}>{g.name}</Link>
                </li>
            ))}
        </ul>
        <Outlet />
    </div>
  );
}
export default Games;
