import Header from "./components/Header";
import Rules from "./components/Rules";

function App() {
  return (
    <div className="mx-auto">
      <Header /> 

      <button className="m-4 w-[124px] h-[124px] rounded-full bg-scissors shadow-scissors-sd flex items-center justify-center">
        <div className="flex bg-iconContainer rounded-full p-4 shadow-iconContainer-sd">
          <img src="/images/icon-scissors.svg" alt="" />
        </div>
      </button>
      <button className="m-4 w-[124px] h-[124px] rounded-full bg-paper shadow-paper-sd flex items-center justify-center">
        <div className="flex bg-iconContainer rounded-full p-4 shadow-iconContainer-sd">
          <img src="/images/icon-paper.svg" alt="" />
        </div>
      </button>
      <button className="m-4 w-[124px] h-[124px] rounded-full bg-rock shadow-rock-sd flex items-center justify-center">
        <div className="flex bg-iconContainer rounded-full p-4 shadow-iconContainer-sd">
          <img src="/images/icon-rock.svg" alt="" />
        </div>
      </button>


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
