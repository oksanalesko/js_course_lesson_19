"use strict"
if (confirm("Почати тестування?")) {
	window.onload = function () {
		// Введення даних, позначення величин
		const athletes = [
			{name: "Олена Сабов"},
			{name: "Олексій Сабадош"},
			{name: "Антон Коваленко"},
			{name: "Марія Іванів"},
			{name: "Габріела Цяпець"},
		]
		const taskBlock = document.querySelector(".condition")

		// Обчислення результатів
		// Функція для створення блоків зі списками спортсменів
		function createAthleteLists() {
			const container = document.createElement("div")
			container.className = "athlete-container"

			const athleteList = document.createElement("ul")
			athleteList.className = "athlete-list"

			const selectedList = document.createElement("ul")
			selectedList.className = "selected-list"

			// Заповнення списку спортсменів
			for (let i = 0; i < athletes.length; i++) {
				const athleteItem = document.createElement("li")
				athleteItem.className = "athlete-item"
				athleteItem.innerText = athletes[i].name

				const selectButton = document.createElement("button")
				selectButton.className = "select-button"
				selectButton.innerHTML = "→"
				selectButton.style.color = "green"
				athleteItem.append(selectButton)
				athleteList.append(athleteItem)
			}
			container.append(athleteList)
			container.append(selectedList)
			taskBlock.append(container)
		}

		// Функція для переміщення спортсмена
		function moveAthleteItems(e) {
			const targetEl = e.target
			// якщо клік на елемент з тегом button
			if (targetEl.tagName === "BUTTON") {
				const athleteItem = targetEl.closest(".athlete-item")
				const isSelected = targetEl.classList.contains("select-button")

				// якщо клік на зелену кнопку
				if (isSelected) {
					targetEl.remove()
					const deselectButton = document.createElement("button")
					deselectButton.className = "deselect-button"
					deselectButton.innerHTML = "←"
					deselectButton.style.color = "red"
					athleteItem.append(deselectButton)
					document.querySelector(".selected-list").append(athleteItem)
				} else { // якщо клік на червону кнопку
					targetEl.remove()
					const selectButton = document.createElement("button")
					selectButton.className = "select-button"
					selectButton.innerHTML = "→"
					selectButton.style.color = "green"
					athleteItem.append(selectButton)
					document.querySelector(".athlete-list").append(athleteItem)
				}
			}
		}

		// Виведення результатів
		// Створюємо списки на сторінці
		createAthleteLists()

		document.querySelector(".athlete-container").addEventListener("click", moveAthleteItems)
	}
}
