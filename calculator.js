 function calMath(){
    var x = $("#value1").val();
     var y=$("#value2").val();
     let result1=calcPower(x,y);
     $("#result").val(result1);
 }
 function calcPower(x,y){
     
     if(isNaN(x)||isNaN(y))
        {
            alert("Please enter any number.");
            throw Error('The given argument is not a number');
        }
        var calculation = Math.pow(x, y);
        if(!isNaN(calculation)){       
           return calculation;
        }
     else{
         alert("please enter valid number");
         throw Error('The given argument is null');
     }
     
  }
