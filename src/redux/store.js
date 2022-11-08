import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers"

//reducers'tan gelen değere göre depo oluşturduk
export const store = createStore(reducers)

//2.adım ana dizindeki index.js'te sarmalamamızı yaptıktan sonra store.js'e geliyoruz. Burası state'in tutulduğu depodur.