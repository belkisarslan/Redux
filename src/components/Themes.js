import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Actions from '../redux/actions'

function Themes() {
  const theme=useSelector(state=>state.themeReducer)
  const dispatch= useDispatch();
  return (
    <div style={theme}>
        <button onClick={()=>dispatch(Actions.themeAction.dark_mode())}>Dark Mode</button>
        <button onClick={()=>dispatch(Actions.themeAction.light_mode())}>Light Mode</button>
    </div>
  )
}

export default Themes