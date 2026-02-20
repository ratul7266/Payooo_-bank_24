document.getElementById("add-money-btn").addEventListener("click", function () {
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("Please select a bank");
    return;
  }

  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("Invalid Account Number");
    return;
  }

  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);

  const pin = getValueFromInput("add-money-pin");
  if (pin === "7266") {
    alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);

    const history = document.getElementById("history");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
    <div class="card-body card bg-base-100 w-full max-w-sm shrink-0 mx-auto ">
    Add Money Success from ${bankAccount}, acc-no ${accno} at ${new Date()}
    </div>
    `;
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
