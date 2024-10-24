import Game from "./components/Game";
import Header from "./components/Header";
import Rules from "./components/Rules";

function App() {
  return (
    <div className="mx-auto">
      <Header /> 
      <Game />

     


      <Rules />
      {/* <img src="/images/bg-triangle.svg" alt="" />
      <img src="/images/icon-close.svg" alt="" />
      <img src="/images/icon-rock.svg" alt="" />
      <img src="/images/icon-paper.svg" alt="" />
      <img src="/images/icon-scissors.svg" alt="" />
      <img src="/images/image-rules.svg" alt="" /> */}
    </div>
  );
}

export default App;
