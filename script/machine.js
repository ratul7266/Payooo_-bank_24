function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("current balance:", Number(balance));
  return Number(balance);
}

function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

function showOnly(id) {
  const addmoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const sendmoney = document.getElementById("send-money");
  const getbonus = document.getElementById("get-bonus");
  const paybill = document.getElementById("pay-bill");
  const transactions = document.getElementById("history");

  addmoney.classList.add("hidden");
  cashout.classList.add("hidden");
  sendmoney.classList.add("hidden");
  getbonus.classList.add("hidden");
  paybill.classList.add("hidden");
  transactions.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
