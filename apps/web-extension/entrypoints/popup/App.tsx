import { useState } from "react"
import { Button } from "ui/components/button"

import reactLogo from "/react.svg"
import wxtLogo from "/wxt.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="mb-2 flex items-center justify-center gap-4">
        <a href="https://wxt.dev" target="_blank">
          <img src={wxtLogo} className="size-10" alt="WXT logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="size-10" alt="React logo" />
        </a>
      </div>
      <h1 className="text-center text-lg font-semibold">WXT + React</h1>
      <div className="space-y-2 pt-2 text-center">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>Click on the WXT and React logos to learn more</p>
      </div>
    </>
  )
}

export default App
