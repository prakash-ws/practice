import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
const ButtonSubmit = ({ price }) => {
  const [count, setCount] = useState(1)
  const value = parseFloat(price)

  return (
    <>
      <div className="container_button">
        <button className="rounded btn-1">
          <FiPlus onClick={() => setCount(count + 1)} />
          <span>{count}</span>
          <FiMinus onClick={() => setCount(count - 1)} />
        </button>
        <button className="rounded  btn-2">
          Add <span className="ml-2">$&nbsp;{count * value}</span>
        </button>
      </div>
    </>
  )
}

export default ButtonSubmit
