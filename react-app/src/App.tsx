import { Fragment } from "react/jsx-runtime";
import Header from "./components/Header";
import Main from "./components/Main";



function App() {

  return (
    // jsx -> React.createElement
    <Fragment>
      <Header icon={'src/assets/react.svg'} title="Fast Project React + TypeScript + Bootstrap" />
      <Main />
    </Fragment>
  )
}

export default App;