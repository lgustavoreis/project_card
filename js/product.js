document.addEventListener("DOMContentLoaded", () => {
	const productCards = document.querySelectorAll(".product-card");

	productCards.forEach((card) => {
		card.addEventListener("click", () => {
			alert(`Product selected: ${card.dataset.name}`);
		});
	});
});
