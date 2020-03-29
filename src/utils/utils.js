
  
  export const randomUniqueList = (list) => {
    let tmp,current;
    let top = list.length;        
    if(top){
        while(--top){
            current = Math.floor(Math.random() * (top + 1));
            tmp = list[current];
            list[current] = list[top];
            list[top] = tmp;
        }
    } 
    return list;
  } 

  export const randomList = (list,noOfElement)=>{
    let randomListLength = noOfElement || list.length;
    let randomValueList = [];   
    while(randomValueList.length < randomListLength){
      let randomNum = Math.floor(Math.random() * Math.floor(list.length));
      let isValueMatch = false;
       for(let i=0;i<randomValueList.length;i++){
          if(list[randomNum].id === randomValueList[i].id){
             isValueMatch = true;
          }
       }
       if(!isValueMatch) randomValueList.push(list[randomNum]);
    }
   
    return randomValueList;
 }

