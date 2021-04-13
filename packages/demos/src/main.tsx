import React from "react"
import ReactDOM from "react-dom"

import {useDoubleClick} from "@tbaut-test/utils"
// import Button from "my-button"

function App() {
  const {click} = useDoubleClick({
    actionSingleClick: () => console.log("single"),
    actionDoubleClick: () => console.log("double")
  })

  return (
    <div>
      {/* <Card>Card demo</Card> */}
      <hr />
      <button onClick={click}>Click</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
