import "./../scss/product.scss";

document.addEventListener("DOMContentLoaded", () => {
	// Selecting all product cards
	const productCards = document.querySelectorAll(".product-card");

	productCards.forEach((card) => {
		card.addEventListener("click", () => {
			alert(`Product selected: ${card.dataset.name}`);
		});
	});
});
