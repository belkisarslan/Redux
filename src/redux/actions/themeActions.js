import actionTypes from "../actionTypes"

const light_mode=(val)=>{
  return({
    type:actionTypes.theme.LİGHT_MODE,
    payload:val
  })
}

const dark_mode=(val)=>{
    return({
        type:actionTypes.theme.DARK_MODE,
        payload:val
    })
}

const themeAction=(light_mode, dark_mode)
export default themeAction