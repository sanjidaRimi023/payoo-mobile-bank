document.getElementById('cashout-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const agentNumber = document.getElementById('agent-number').value;
    const amount = getInputValue
    if(agentNumber.length === 11){
        if(agentNumber && amount){

        }
        else{
            
        }
    }else{
        alert('Enter valid Agent number');
    }

})