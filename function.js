// First of all , you can use eval function to convert strings like testStr and secondText to get result.

var testStr = "12+23/4-3/2*6";
var secondText = "5/5*2+333/2/2/2"
var firstPriorityOperators = ["/" , "*"]
var secondPriorityOperators = ["+" , "-"]




function createArray(str){
 let num = ""
 var resultArrayOrigin = [];  
    for(i=0; i < str.length; i++){
        if(!/[-+*/]/.test(str[i])){
            num = num + str[i]    
        }
        if(/[-+*/]/.test(str[i])){
            resultArrayOrigin.push(parseInt(num))
            resultArrayOrigin.push(str[i])
            
            num = ""
        }
         
     }
     resultArrayOrigin.push(parseInt(num))
     return resultArrayOrigin
}



function checkArrayHasPriority(resultArr){
    if(secondPriorityOperators.some(elem=> resultArr.includes(elem)) 
    && (firstPriorityOperators.some(elem=> resultArr.includes(elem)))){
           
            return completeArray(formatArray(resultArr))



        }
        else{
            
            return completeArray(resultArr)
        }
}


function formatArray(resultArray){
var paramFormatResult;
for (var i=0 ; i < resultArray.length; i++){           
            if(resultArray[i] === "*"){
                 paramFormatResult = resultArray[i-1] * resultArray[i+1]
                 resultArray.splice(i-1,3) 
                 resultArray.splice(i-1 , 0 , paramFormatResult) 
                 formatArray(resultArray)
   
                    
            }
            else if(resultArray[i] === "/"){
                paramFormatResult = resultArray[i-1] / resultArray[i+1]
                resultArray.splice(i-1,3) 
                resultArray.splice(i-1 , 0 , paramFormatResult) 
                formatArray(resultArray)

            }


}
return resultArray;
}

 function completeArray(resultArray){
     var paramResult;   
     for (var i=0 ; i < resultArray.length; i++){           
             if(resultArray[i] === "*"){
                 paramResult = resultArray[i-1] * resultArray[i+1]
                  resultArray.splice(i-1,3) 
                  resultArray.splice(i-1 , 0 , paramResult) 
                  completeArray(resultArray)
   
                    
             }
             else if(resultArray[i] === "/"){
                 paramResult = resultArray[i-1] / resultArray[i+1]
                 resultArray.splice(i-1,3) 
                resultArray.splice(i-1 , 0 , paramResult) 
                 completeArray(resultArray)

             }
             else if(resultArray[i] === "+"){
                 paramResult = resultArray[i-1] + resultArray[i+1]
                 resultArray.splice(i-1,3) 
                 resultArray.splice(i-1 , 0 , paramResult) 
                 completeArray(resultArray)

             }
             else if(resultArray[i] === "-"){
                 paramResult = resultArray[i-1] - resultArray[i+1]
                 resultArray.splice(i-1,3) 
                 resultArray.splice(i-1 , 0 , paramResult) 
                 completeArray(resultArray)

             }

        
     }

   
 return resultArray
 }

//  console.log(completeArray(formatArray([2,"+", 3,"*",5 ,"*",5,"-",234])))
//  console.log(completeArray(formatArray([2,"+", 3,"*",5 ,"+",5,"*",234])))
//  console.log(formatArray([1,"*",2,"*",2]))
 