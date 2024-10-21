"use strict"

if (confirm("Почати тестування?")) {
	window.onload = function () {
		// Введення даних, позначення величин

		const products = [
			{name: "Ноутбук", title: "ASUS TUF Gaming", model: "A15 FA506NC-HN026", price: 36999, label: "АКЦІЯ", imagePath: 'img/01.webp'},
			{name: "Ноутбук", title: "HP Dark Ash Silver", model: "255 G9 (9M3H1AT)", price: 18999, label: "ТОП ПРОДАЖІВ", imagePath: 'img/02.webp'},
			{name: "Ноутбук", title: "Apple MacBook Air", model: "M3 8/256GB 2024", price: 49999, label: "ТОП ПРОДАЖІВ", imagePath: 'img/03.webp'},
			{
				name: "Ноутбук",
				title: "Lenovo IdeaPad Cloud Grey",
				model: "1 15AMN7 (82VG00KJRA)",
				price: 17999,
				label: "ТОП ПРОДАЖІВ", imagePath: 'img/04.webp'
			},
		]

		const taskBlock = document.querySelector(".condition")

		// Обчислення результатів

		// функція для створення карток товарів
		function createProductList(productsArr) {
			const productList = document.createElement('ul')
			productList.className = 'product-list'
			for (let itemsNum = 0; itemsNum < productsArr.length; itemsNum++) {
				const productItem = document.createElement('li')
				productItem.className = 'product-item'

				const productCard = document.createElement('div')
				productCard.className = 'product-card'
				productItem.append(productCard)

				const productImage = document.createElement('a')
				productImage.className = 'product-image'
				productImage.setAttribute("href", "#")
				productCard.prepend(productImage)

				const productPic = document.createElement('img')
				productPic.className = 'product-pic'
				productPic.setAttribute("src", `${productsArr[itemsNum].imagePath}`)
				productPic.setAttribute("alt", "image")
				productImage.append(productPic)

				const productDescription = document.createElement('div')
				productDescription.className = 'product-description'
				productCard.append(productDescription)

				const productTitle = document.createElement('h3')
				productTitle.className = 'product-title'
				productDescription.prepend(productTitle)

				const productLink = document.createElement('a')
				productLink.className = 'product-link'
				productLink.setAttribute("href", "#")
				productLink.innerText = `${productsArr[itemsNum].name} ${productsArr[itemsNum].title}`
				productTitle.append(productLink)

				const productModel = document.createElement('div')
				productModel.className = 'product-model'
				productModel.innerText = `${productsArr[itemsNum].model}`
				productDescription.append(productModel)

				const productPrice = document.createElement('div')
				productPrice.className = 'product-price'
				productPrice.innerText = `${productsArr[itemsNum].price} грн.`
				productDescription.append(productPrice)

				const productLabel = document.createElement('div')
				productLabel.className = 'product-label'
				productLabel.innerText = `${productsArr[itemsNum].label}`
				if (productLabel.innerText === 'АКЦІЯ') productLabel.style.backgroundColor = 'red'
				else productLabel.style.backgroundColor = 'green'
				productCard.append(productLabel)

				productList.append(productItem)
			}
			taskBlock.append(productList)
		}
		createProductList(products)
		
		// функція, що додає при кліці клас (за яким до обраного товару додається зелена рамка) і забирається при повторному кліці
		function chooseProduct(e) {
			const targetEl = e.target
			const productCard = targetEl.closest('.product-card')
			if (productCard) productCard.classList.toggle('choose')
			else console.error('Картки продукту не виявлено')
		}

		// Виведення результатів
		document.querySelector('.product-list').addEventListener('click', chooseProduct)
	}
}
