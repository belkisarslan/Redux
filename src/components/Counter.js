import React from 'react'
import {useDispatch, useSelector} from "react-redux"
//componente sadece Actions alıyoruz
import Actions from "../redux/actions"

function Counter() {
  const count = useSelector(state=>state.countReducer)
  const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(Actions.numberAction.numberIncrease(1))}>+</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(Actions.numberAction.numberDecrease(1))}>-</button>
    </div>
  )
}

export default Counter