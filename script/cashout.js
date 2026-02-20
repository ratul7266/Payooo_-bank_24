document.getElementById("withdraw-btn").addEventListener('click', function(){
    const cashoutNumber = getValueFromInput('cashout-number')
    if(cashoutNumber.length !=11){
    alert("Invalid Agent Number");
        return;
  }

    const cashoutAmount = getValueFromInput('cashout-amount')
    
  const currentBalance = getBalance();

    const newBalance = currentBalance - Number(cashoutAmount);
    if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  const pin = getValueFromInput("cashout-pin")
  if (pin === "7266") {
    alert("cashout successfull");
    setBalance(newBalance)
  } else {
    alert("Invalid Pin");
    return;
  }
})



// document.getElementById("withdraw-btn").addEventListener("click", function () {
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//   if(cashoutNumber.length !=11){
//     alert("Invalid Agent Number");
//         return;
//   }

//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);

//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);

//   const newBalance = Number(balance) - Number(cashoutAmount);

//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }

//   const cashoutPinInput = document.getElementById("cashout-pin");

//   const pin = cashoutPinInput.value;
//   if (pin === "7266") {
//     alert("cashout successfull");
//     console.log("new balance:", newBalance);
//     balanceElement.innerText = newBalance;
//   } else {
//     alert("Invalid Pin");
//     return;
//   }
// });
