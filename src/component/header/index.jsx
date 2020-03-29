import React from 'react';
import {connect} from 'react-redux';
import styled  from 'styled-components';
import Timer from '../timer'

const HeaderContainer = styled.div`
margin-bottom:10px;
background-color: aquamarine;
padding: 10px 20px;
display:flex;

`
const QuizCounter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const Header =(props)=>{
    let _headerText;
    if(props.currentQuiz.currentQIndex<props.quizList.length){
        _headerText =  <QuizCounter>Quiz {props.currentQuiz.currentQIndex+1} of {props.quizList.length}</QuizCounter>
    }
    else{
        _headerText = <QuizCounter>Result</QuizCounter>
    }
    return(
        <HeaderContainer>            
           {_headerText}
           <Timer></Timer>
        </HeaderContainer>
    )
}

const mapStateToPorps = state =>{   
    return {quizList : state.quizList,currentQuiz:state.status}
}
export default connect(mapStateToPorps)(Header)