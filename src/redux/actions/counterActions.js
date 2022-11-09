import actionTypes from "../actionTypes"
//4.adım actionTypes'ları buraya da ekliyoruz.

//actionTypes'ta tanımladığımız count'u burada kullanıyoruz. type ve payload değeri gönderiyoruz. State'in güncellenmesini reducer'a bırakıyoruz.
const numberIncrease=(val)=>{
  return {type:actionTypes.count.NUMBER_INCREASE, payload:val}
}

const numberDecrease=(val)=>{
    return {type:actionTypes.count.NUMBER_DECREASE, payload:val}
}

//tek bir yapı olarak export ettik
const numberAction=(numberIncrease, numberDecrease)

export default numberAction




