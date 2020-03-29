import {combineReducers} from 'redux';
import {randomList} from '../utils/utils'

const quizListReducer = (state =[],action) => {
   if(action.type==='FETCH_QUIZ_LIST'){
      return randomList(action.payload,10);
   }
   return state;
}

const initStore = {
   currentQIndex:0,
   correntAns:0,
   incorrentAns:0
}
const selectAnswerReducer = (state=initStore,action) =>{
   if(action.type==="SUBMIT_ANS"){
      return action.payload;
   }
   return state;
}

const getOptionsListReduce = (state=[],action) =>{
   if(action.type === "OPTION_LIST"){
      return action.payload;
   }
   return state;
 } 

export default combineReducers({
    quizList: quizListReducer,
    status:selectAnswerReducer,
    optionList:getOptionsListReduce,
})