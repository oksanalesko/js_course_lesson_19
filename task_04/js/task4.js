"use strict"

if (confirm("Почати тестування?")) {
	window.onload = function () {
		
		const taskBlock = document.querySelector(".condition")

		// функція для створення трьох таблиць
		function createTableRandomNumbers(tableNum = 3, rowNum = 3, colNum = 3, min = 1, max = 100) {
			for (let n = 0; n < tableNum; n++) {
				// робимо контейнер для таблиці
				const tableContainer = document.createElement("div")
				tableContainer.className = "table-container"
				tableContainer.setAttribute("data-clicks", 0) // додамо атрибут для кількості кліків

				// робимо назву таблиці
				const tableTitle = document.createElement("h3")
				tableTitle.className = "table-title"
				tableTitle.innerText = `Таблиця №${n + 1}`

				// додаємо спан для виводу кількості кліків
				const span = document.createElement("span")
				span.innerText = 'Кліків: '
				tableTitle.append(span)
				tableContainer.prepend(tableTitle)

				// створюємо власне таблицю 3х3 з випадковими числами
				const tableEl = document.createElement("table")
				tableEl.classList.add("table")

				for (let row = 0; row < rowNum; row++) {
					const tableRow = document.createElement("tr")
					tableRow.classList.add("table-row")

					for (let col = 0; col < colNum; col++) {
						const tableCol = document.createElement("td")
						tableCol.classList.add("table-col")
						tableCol.innerText = min + Math.floor(Math.random() * (max - min + 1))
						tableRow.append(tableCol)
					}

					tableEl.append(tableRow)
				}

				tableContainer.append(tableEl)
				taskBlock.append(tableContainer)
			}
		}

		createTableRandomNumbers()

		// Функція, що при кліці додає червону рамку відповідній таблиці і рахує кліки
		function onClickTableBorder(e) {
			const targetEl = e.target
			const tableContainer = targetEl.closest(".table-container")
			const span = tableContainer.querySelector("span")

			if (targetEl.tagName === "TD") {
				let clickCount = parseInt(tableContainer.getAttribute("data-clicks")) + 1
				tableContainer.setAttribute("data-clicks", clickCount)
				span.innerText = `Кліків: ${clickCount}`
				targetEl.closest(".table").style.border = "2px solid red"
			}
		}

		// Виведення результатів
		taskBlock.addEventListener("click", onClickTableBorder)
	}
}
