import { useParams } from "react-router-dom";
import { useMemo } from "react";

const gamePaths = {
  biscuits: [
    "/public/games/biscuits/index.html",
    "/public/games/biscuits/js/main.js",
  ],
};

function GameDetail() {
  const { gameId } = useParams();

  const htmlsrc = useMemo(() => gamePaths[gameId]?.[0] ?? null, [gameId]);
  const jssrc = useMemo(() => gamePaths[gameId]?.[1] ?? null, [gameId]);

  if (!htmlsrc) return <div>Select a game from the list.</div>;

  return (
    <div>
      <h2>{gameId}</h2>
      <iframe
        className="game-window"
        title={gameId}
        src={htmlsrc}
        width="75%"
        height="600"
      ></iframe>
      <script src={jssrc}></script>
    </div>
  );
}
export default GameDetail;
