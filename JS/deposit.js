document.getElementById('btn-deposit').addEventListener('click', function(){
   
    // step-2: get the deopsit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDeopsitAmountString = depositField.value;
   const newDeopsitAmount = parseFloat(newDeopsitAmountString);

    // step-3: get the current deposit total

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDeopsitAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get current balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);

    // step-6: calculate cuurent balance total

    const currentBalanceTotal = previousBalanceTotal + newDeopsitAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


    // clear the deposit field
    depositField.value = '';

})