const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    let num = parseInt(str);
    
    if(str !== ""){
        let  i, j;
        for(i=1; i<=num; i++){
            let ar = i.toString().split("");
            let sum =0, prod = 1;
            for(let j=0; j<ar.length; j++){
                sum = sum + parseInt(ar[j]);
                prod = prod * parseInt(ar[j]);
            }
            
            if(sum === prod){
                var para = document.createElement("p");
                para.innerHTML = "Spy Numbers: "+ i;
                document.getElementById('opText').appendChild(para);      
            }
        }
    }
    else{
        document.getElementById('opText').innerHTML = "Please enter a number";
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
