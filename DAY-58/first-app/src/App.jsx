import Footerr from "../components/footer";
import Header from "../components/header";
import Card from "../components/card";
import "./main.css"
function App() {
  return (
    <>
      <Header />
      <div className="cards">
        <Card title="Card-1" desc="This is Card-1 Description" />
        <Card title="Card-2" desc="This is Card-2 Description" />
        <Card title="Card-3" desc="This is Card-3 Description" />
        <Card title="Card-4" desc="This is Card-4 Description" />
      </div>
      <Footerr />
    </>
  );
}

export default App;
