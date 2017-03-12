import { combineReducers } from 'redux'

import user from './user'
import loanCalculator from './loanCalculator'

export const rootReducer = combineReducers({
  user,
  loanCalculator
})