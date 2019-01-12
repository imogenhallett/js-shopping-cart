/**
 * Runs on page load to check if the cart already has items.  If so the cart icon counter in the navigation bar is updated with the number of items already in the cart 
 */
function getLocalStorage() {
	let element = document.querySelector('#items-count')
	try{
		if (localStorage.getItem("items-count") !== null) {
			element.innerHTML = localStorage.getItem('items-count')
		}
	}catch(exception){
		console.log(exception)
		//requires cookie fallback
	}
}

/**
 * decreases the number of items which may be added to the cart
 */
function decreaseItems() {
	let element = document.querySelector('#items-to-add')
	let itemsTotal = parseInt(element.innerHTML)
	if (itemsTotal !==0) {
		itemsTotal--
		element.innerHTML = itemsTotal
	}
}

/**
 * Increases the number of items which may be added to the cart
 */
function increaseItems() {
	let element = document.querySelector('#items-to-add')
	let itemsTotal = parseInt(element.innerHTML)
	itemsTotal++
	element.innerHTML = itemsTotal
}

/**
 * Displays an opaque overlay containing the shopping cart contents
 */
function showOverlay() {
	let element = document.querySelector('#overlay')
	element.classList.add('show');
}

/**
 * hides the overlay
 */
function hideOverlay() {
	let element = document.querySelector('#overlay')
	element.classList.remove('show');
}

/**
 * Displays a message in the shopping cart window indicating there are no items in the cart
 */
function noItems() {
	let element = document.querySelector('#no-items')
	element.classList.add('show')
	
	element = document.querySelector('#cart-contents')
	element.classList.remove('show')
}

/**
 * Updates the shopping cart window to include the number of items in the cart and the total cost of the items
 * @param itemsTotal the number of items in the shopping cart
 */
function updateItems(itemsTotal) {
	const pricePerItem = 59.99
	let element = document.querySelector('#cart-contents-total-items')
	let totalPrice = pricePerItem*itemsTotal
	element.innerHTML = itemsTotal
	
	element = document.querySelector('#cart-contents-total-price')
	element.innerHTML = totalPrice
	
	element = document.querySelector('#no-items')
	element.classList.remove('show')
	
	element = document.querySelector('#cart-contents')
	element.classList.add('show')
}

/**
 * Updates the shopping cart icon display with the new number of items in the cart.  Also sets localStorage value for use with page refresh. 
 */
function addToCart() {
	let element = document.querySelector('#items-to-add')
	let itemsTotal = parseInt(element.innerHTML)
	
	element = document.querySelector('#items-count')
	itemsTotal += parseInt(element.innerHTML)
	
	element.innerHTML = itemsTotal
	try{
		localStorage.setItem('items-count', itemsTotal);
	}catch(exception){
		console.log(exception)
		//requires cookie fallback
	}
}

/**
 * Determins whether the cart has items or not
 */
function calculateCart() {
	let element = document.querySelector('#items-count')
	let itemsTotal = parseInt(element.innerHTML)
	if (itemsTotal===0) {
		noItems()
		return false
	}
	updateItems(itemsTotal)
}

/**
 * Removes all items from the shopping cart and sets localStorage value to 0
 */
function emptyCart() {
	let element = document.querySelector('#items-count')
	element.innerHTML = 0
	try{
		localStorage.setItem('items-count', 0)
	}catch(exception){
		console.log(exception)
		//requires cookie fallback
	}

	element = document.querySelector('#no-items')
	element.classList.add('show')
	
	element = document.querySelector('#cart-contents')
	element.classList.remove('show')
}

getLocalStorage()

document.querySelector('#icon-shopping-cart').addEventListener('click', function () {
    calculateCart()
	showOverlay()
})

document.querySelector('#continue-shopping').addEventListener('click', hideOverlay)

document.querySelector('#decrease-items').addEventListener('click', decreaseItems)

document.querySelector('#increase-items').addEventListener('click', increaseItems)

document.querySelector('#add-to-cart').addEventListener('click', addToCart)

document.querySelector('#empty-cart').addEventListener('click', emptyCart)

document.querySelector('.search-title form input[type=text]').addEventListener('click', function(){
	this.value=''
})