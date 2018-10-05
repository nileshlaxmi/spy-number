const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    let num = parseInt(str);
    
    if(str !== ""){
        let  i, j;
        for(i=1; i<=num; i++){
            let c = 0, sum = 0, counter = 0;
            for(j=1; j<=i; j++){
                if(i%j == 0){
                    c++;
                }
            }
            if(c==2){
                let ar = i.toString().split("");
                for(j=0; j<ar.length; j++){
                    sum = sum + parseInt(ar[j]);
                }
    
                for(j=1; j<=sum; j++){
                    if(sum%j == 0){
                        counter++;
                    }
                }
                
                if(counter == 2){
                    var para = document.createElement("p");
                    para.innerHTML = "Howling Prime: "+ i;
                    document.getElementById('opText').appendChild(para);      
                }
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
