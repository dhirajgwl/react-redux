import React, { Fragment,useState,useEffect }  from 'react';
import styled  from 'styled-components';
import {connect} from 'react-redux';
import quiz from './quizicon.svg';
import RadioButtonGroup from '../radioButtonGroup';
const QuizText = styled.h5`
    color:gray;
    padding-left: 15px;`
const QuizIcon = styled.div`
    width:2em;
    height:2em;
`
const Line = styled.div`
    padding:5px 10px;
    box-shadow: 0 2px grey;
`

const QuizCard = (props) =>{  
    const [selectedAns,setSelectedAns] = useState('');
    useEffect(()=>{
        setSelectedAns(props.currentQuiz.currentQIndex)
    },[props.currentQuiz.currentQIndex]);

    const displayQuiz = ()=>{
        if(props.currentQuiz.currentQIndex<props.quizList.length){
        return <Fragment>
            <div className='quiz mb-2'>
                  <QuizIcon><img src={quiz}></img></QuizIcon>
                  <QuizText>{props.quizList[props.currentQuiz.currentQIndex].excerpt}</QuizText>
            </div>
            <div className="options mb-3">
                <RadioButtonGroup selectectOption={(value)=>setSelectedAns(value)} 
                defaultChecked={props.quizList[props.currentQuiz.currentQIndex].id}/>
            </div>
            <div>
                <button className="btn btn-primary" onClick={()=>props.onSubmit(selectedAns)} disabled={!isNaN(selectedAns)}>Submit</button>
            </div>
        </Fragment>
    }
    else{
        return <div>
                <Line>Result</Line>
                <Line>Correct Answer : {props.currentQuiz.correntAns}</Line>
                <Line>Wrong Answer : {props.currentQuiz.incorrentAns}</Line>
        </div>
    }

 }
 
 return(
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-body">
            {displayQuiz()}
          </div>
        </div>
      </div>
    </div>
    )
}
const mapStateToPorps = state =>{   
    return {quizList : state.quizList, currentQuiz:state.status}
}
export default connect(mapStateToPorps)(QuizCard);