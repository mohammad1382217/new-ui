/* Core */
// import { createLogger } from 'redux-logger'
import thunk from "redux-thunk"

const middleware = [
  thunk
  // createLogger({
  //   duration: true,
  //   timestamp: false,
  //   collapsed: true,
  //   colors: {
  //     title: () => '#139BFE',
  //     prevState: () => '#1C5FAF',
  //     action: () => '#149945',
  //     nextState: () => '#A47104',
  //     error: () => '#ff0005',
  //   },
  //   predicate: () => typeof window !== 'undefined',
  // }),
]

export { middleware }
