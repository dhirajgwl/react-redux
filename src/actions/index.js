
import axios from 'axios';

export const fetchQuizList = () => async dispatch =>{
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.binance.vision/api/glossaries/');
    dispatch ({type:'FETCH_QUIZ_LIST',payload:response.data})
}

export const submitUserResponse =(obj) =>{
    return{
        type:'SUBMIT_ANS',
        payload: obj
    };

}
export const setOptionList = (list) =>{
    return{
        type:"OPTION_LIST",
        payload:list
    }
}