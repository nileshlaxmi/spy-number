const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    if(str !== ""){
        let num = parseInt(str);
        let sum = 0,  prod = 1, i;

        let ar = str.split("");
        for(i=0; i<ar.length; i++){
            let num = parseInt(ar[i]);
            sum = sum + num;
            prod = prod * num;
        }
        if(sum === prod){
            document.getElementById('opText').innerHTML = "Spy Number";        
        }
        else{
            document.getElementById('opText').innerHTML = "Not a Spy Number";
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
