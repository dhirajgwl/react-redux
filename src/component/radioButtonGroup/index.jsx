import React,{Fragment,useState,useEffect}  from 'react';
import {connect} from 'react-redux';
import styled  from 'styled-components';

const RadioButton = styled.input.attrs(props =>({
  type:'radio',
  name:'name'
}))`

    width: 1.5rem;
    height: 1.5rem;   
    flex-direction: column;
    margin: 0 0.5rem;
    cursor: pointer;    
    appearance: none;
    border-radius: 15px;
    border: 3px solid green;
    &:checked{
      background-color: #4288a0;
      box-shadow: 0px 0px 9px 3px #4ece2a;
    }
`
const RadioContainer = styled.div`
    display:flex;
`
const RadioLabel = styled.label`
    margin-bottom: 0.5rem;
`

const diasplayRadioutton = (props,selectedOption,setSelectedOption) =>{  
  if(props.options){
     return <Fragment>       
      {props.options.map((option,index) => {          
            return <RadioContainer key={index}>
            <RadioButton checked={selectedOption === option.title}
              value={option.title} onChange={e => setSelectedOption(e.target.value)} 
              onClick={e => props.selectectOption(e.target.value)}/>
            <RadioLabel>{option.title}</RadioLabel>
           </RadioContainer>
         })}
      </Fragment>
      }
      else{
       return <div>No options</div>
      }
}

const RadioButtonGroup = (props) => {  
  const [selectedOption,setSelectedOption] = useState(props.defaultChecked);
  useEffect(()=>{
     setSelectedOption(props.defaultChecked);
     
  },[props.defaultChecked])
  
  return diasplayRadioutton(props,selectedOption,setSelectedOption);
}

const mapStateToPorps = state =>{   
  return {options:state.optionList}
}

export default connect(mapStateToPorps)(RadioButtonGroup);