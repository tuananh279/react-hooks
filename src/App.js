import { useState } from "react";
import UseStateEx from "./components/useStateEx";

const itemList = ["useState", "useEffect"]

function App() {

  const [section, setSection] = useState(itemList[0])

  const handleSelectSection = (e) => {
    e.preventDefault()
    setSection(e.target.value)
  }

  const RenderItems = () => (
    itemList.map(item => <button key={item} onClick={handleSelectSection} value={item} >{item}</button>)
  )

  return (
    <div style={{ padding: 20 }}>
      <RenderItems />
      <h1>{section}</h1>
      <div>
        {section === "useState" && <UseStateEx />}
      </div>
    </div>
  );
}

export default App;
