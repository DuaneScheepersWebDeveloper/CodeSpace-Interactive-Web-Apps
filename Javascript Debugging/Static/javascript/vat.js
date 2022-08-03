const netPrice = document.getElementById('net-price');
const vatRate = document.getElementById('vat-rate');
const incAmount = document.getElementById('inc-amount');
const calcBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');

const VATInclusiveAmount = (price, rate) => {
	let totalAmount = price + price * (rate / 100);
	return totalAmount.toFixed(2);
};

calcBtn.addEventListener('click', function () {
	if (netPrice.value === '' || isNaN(netPrice.value)) {
		netPrice.style.border = '1px solid red';
		setTimeout(function () {
			netPrice.style.border = '1px solid transparent';
		}, 1500);
		netPrice.value = '';
	}

	if (vatRate.value === '' || isNaN(vatRate.value)) {
		vatRate.style.border = '1px solid red';
		setTimeout(function () {
			vatRate.style.border = '1px solid transparent';
		}, 1500);
		vatRate.value = '';
	}

	let finalAmount = VATInclusiveAmount(
		Number(netPrice.value),
		Number(vatRate.value)
	);
	incAmount.value = finalAmount;
});

resetBtn.addEventListener('click', function () {
	netPrice.value = '';
	vatRate.value = '';
	incAmount.value = '';
});
