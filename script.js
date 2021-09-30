const ipInput = document.querySelector('#ip_input');
const quantityInput = document.querySelector('#quantity_input');
const cpInput = document.querySelector('#cp_input');
const outputBox = document.querySelector('#output_box');
const submitBtn = document.querySelector('#submit-btn');

// Step - Adding Event Listeners
submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
	var initialPrice = Number(ipInput.value);
	var currentPrice = Number(cpInput.value);
	var stocksQuantity = Number(quantityInput.value);

	calculateProfitOrLoss(initialPrice, stocksQuantity, currentPrice);
}

// Step - Calculate profit and Loss
function calculateProfitOrLoss(initial, quantity, current) {
	// loss condition
	if (initial > current) {
		let loss = (initial - current) * quantity;
		let lossPercentage = (loss / (initial * quantity)) * 100;
		outputBox.style.color = 'red';
		outputBox.innerHTML = `! Your loss is ${loss} and loss Percentage is ${lossPercentage}% :(`;
	}
	// profit calculation
	else if (initial < current) {
		let profit = (current - initial) * quantity;
		let profitPercentage = (profit / (initial * quantity)) * 100;
		outputBox.style.color = 'green';
		outputBox.innerHTML = `Your Profit is ${profit.toFixed(
			2
		)} and profit Percentage is ${profitPercentage.toFixed(2)}%`;
	}
	// No profit, no loss
	else {
		outputBox.style.color = 'white';
		outputBox.innerHTML = `No loss and No Profit.... :)`;
	}
}