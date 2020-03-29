import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {submitUserResponse} from '../../actions'
const Timer = (props)=>{
    const [time,setTime] = useState(60*5);
    useEffect(()=>{
        setTimeout(()=>{
            if(time>0){
             const _time = time-1;
             setTime(_time)
            }else{
                props.submitUserResponse({...props.currentQuiz,currentQIndex:10});
            }  
        },1000)
    });
    
    return(
        <div>
            {formatValue(Math.floor(time/60))}:{formatValue(time-(Math.floor(time/60)*60))}
        </div>
    )
}

const formatValue = value =>{
    if(value<10){
        return "0"+value;
    }
    return value;
}
const mapStateToPorps = state =>{   
    return {currentQuiz:state.status}
}
export default connect(mapStateToPorps,{submitUserResponse})(Timer);

