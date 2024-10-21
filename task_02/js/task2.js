"use strict"

if (confirm("Почати тестування?")) {
	window.onload = function () {
		// Крок 0. Введення даних, позначення величин

		let inputsContainer = document.querySelector(".task")

		// Крок 1. Обчислення результатів

		function handleInputChange(e) {
			// console.log(e.target.tagName)
			if (e.target.tagName === "INPUT") {
				let currentEl = e.target
				// отримуємо введене значення
				let value = parseInt(currentEl.value)
				// перевіряємо, чи коректне введене значення
				if (isNaN(value)) return

				// знаходимо і заповнюємо попередні елементи
				let prevElWrapper = currentEl.closest(".calc-line").previousElementSibling
				let prevValue = value
				while (prevElWrapper && prevElWrapper.querySelector("input")) {
					prevValue--
					prevElWrapper.querySelector("input").value = prevValue
					prevElWrapper = prevElWrapper.previousElementSibling
				}

				// знаходимо і заповнюємо наступні елементи
				let nextElWrapper = currentEl.closest(".calc-line").nextElementSibling
				let nextValue = value
				while (nextElWrapper && nextElWrapper.querySelector("input")) {
					nextValue++
					nextElWrapper.querySelector("input").value = nextValue
					nextElWrapper = nextElWrapper.nextElementSibling
				}
			}
		}

		// крок 2. Виведення результатів

		inputsContainer.addEventListener("input", handleInputChange)
	}
}
