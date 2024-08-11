import { Fragment } from "react/jsx-runtime";
import Header from "./components/Header";
import Main from "./components/Main";


function App() {

  return (
    // jsx -> React.createElement
    <Fragment>
      <Header icon={'/imgs/spider-man-icon.jpg'} title="Spidy-Friends" />
      <Main />
    </Fragment>
  )
}

export default App;