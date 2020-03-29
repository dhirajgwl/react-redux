import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchQuizList, submitUserResponse,setOptionList} from '../actions';
import {randomUniqueList} from '../utils/utils'
import 'bootstrap/dist/css/bootstrap.css';
import QuizCard from './quizcard'
import Header from './header'

class App extends Component{
  constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {quizCounter:1};
    }

    componentDidMount(){
        this.props.fetchQuizList();       
    }
    componentDidUpdate(){
        this.props.setOptionList(this.getOptionsList(this.props.quizList,this.props.currentQuiz.currentQIndex))
    }
    getOptionsList(list,quizCurrentIndex){
        let optList = [];
        for(let i=0;i<4;i++ ){
          if((quizCurrentIndex+i) >= list.length ){
            optList.push(list[i]);
          }else{
            optList.push(list[quizCurrentIndex+i]);
          }
        }  
        return randomUniqueList(optList);
     }

    onSubmit(value){        
        let obj = {...this.props.currentQuiz}
        if(this.props.quizList[obj.currentQIndex].title ===value) obj.correntAns +=1; 
        else obj.incorrentAns +=1;
        obj.currentQIndex +=1;
        this.props.submitUserResponse(obj);
    }
    bootStrapCopm(){
        if(this.props.quizList.length===0){
            return(
            <div className="container-fluid">
                Loading...
            </div>)
        }

        return(<Fragment>
            <Header />
            <div className="container-fluid">
              <QuizCard onSubmit={this.onSubmit} />
            </div>
            </Fragment>
        )
    }

    render(){      
        return(            
            this.bootStrapCopm()
        )
    }
}
const mapStateToPorps = state =>{   
    return {quizList : state.quizList,currentQuiz:state.status}
}
export default connect(mapStateToPorps,{fetchQuizList,submitUserResponse,setOptionList})(App);