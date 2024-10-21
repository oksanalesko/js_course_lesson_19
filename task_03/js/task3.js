"use strict"

if (confirm("Почати тестування?")) {
	window.onload = function () {
		// Введення даних, позначення величин

		const taskBlock = document.querySelector(".condition")
		const colorBtn = document.getElementById("color-list")

		// Обчислення результатів

		// генеруємо нумеровані списки з рандомною кількістю ітемів від 1 до 10
		function generateOLists(num = 5) {
			for (let n = 0; n < num; n++) {
				const list = document.createElement("ol")
				list.classList.add("ol-list")

				const randomLiNum = 1 + Math.floor(Math.random() * 10)
				for (let liNum = 0; liNum < randomLiNum; liNum++) {
					const item = document.createElement("li")
					item.classList.add("ol-item")
					item.innerText = 1 + Math.floor(Math.random() * 100)
					list.append(item)
				}

				if (taskBlock) taskBlock.prepend(list)
				else console.error('Елемент з класом "condition" не знайдено')
			}
		}
		generateOLists()

		// функція, що знаходить кількість елементів у списках та відповідно їх стилізує
		function colorList() {
			const lists = taskBlock.querySelectorAll(".ol-list")
			lists.forEach((list) => {
				// console.log(list)
				const itemsCount = list.children.length
				if (itemsCount % 2 === 0) list.style.color = "green"
				else list.style.color = "red"
			})
		}

		// Виведення результатів

		colorBtn.addEventListener("click", colorList)
	}
}
