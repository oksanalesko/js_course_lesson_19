"use strict"

if (confirm("Почати тестування?")) {
	window.onload = function () {
		// Крок 0. Введення даних, позначення величин

		// знаходимо поле для виведення результату
		let divContainer = document.querySelector('.task')

		// Крок 1. Обчислення результатів
		
		// функція, що шукає наступний за тим, на який клікнули, дів і робить всі наступні червоними
		function makeNextDivRed(e) {
			let currentDiv = e.target
			// console.log(currentDiv)
			if (currentDiv.tagName === 'DIV') {
				while (currentDiv.nextElementSibling) {
					currentDiv = currentDiv.nextElementSibling
					currentDiv.style.color = 'red'
				}
			}
		}

		// крок 2. Виведення результатів

		// подію прослуховуємо на контейнері з дівами і делегуємо
		divContainer.addEventListener("click", makeNextDivRed)
	}
}
