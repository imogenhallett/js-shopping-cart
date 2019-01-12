/**
 * Gets the current rating
 * @return the float value of the current rating
 */
function getCurrentRating() {
	let currentRating = $('#current-rating').text()
	return parseFloat(currentRating)
}

/**
 * Gets the current number of votes
 * @return the integer value of the number of votes
 */
function getCurrentVotes() {
	let currentVotes = $('#current-votes').text()
	return parseInt(currentVotes)
}

/**
 * Gets the current stars position in the list of stars
  * @param that the current object
 * @return the integer value of the star position
 */
function getStarIndex(that){
	let starIndex = that.index();
	starIndex++
	starIndex = parseInt(starIndex)
	return starIndex
}

/**
 * Updates the displayed number of votes
 * @param newVotes the number of votes after the user has added a rating
 */
function updateNewVotes(newVotes) {
	$('#current-votes').text(newVotes)
}

/**
 * Updates the displayed rating
 * @param newRating the rating value after the user has added a rating
 */
function updateNewRating(newRating) {
	$('#current-rating').text(newRating)
}

/**
 * Updates the number of stars displayed
 * @param newRating the rating value after the user has added a rating
 */
function outputStars(newRating) {
	let intRating = parseInt(newRating)
	
	$('#rating-stars i').each(function(i) {
		let $this = $(this)
		$this.removeClass('user-rating')
		if (i < intRating) {
			$this.removeClass('far').addClass('fas')
		} else {
			$this.removeClass('fas').addClass('far')
		}
	})
}

/**
 * Calculates the new rating after the user has added a rating
 * @param newRating the rating value after the user has added a rating
 */
function calculateNewRatingScore(newRating) {
	let currentRating = getCurrentRating()
	let currentVotes = getCurrentVotes()
	let newVotes = currentVotes+1
	let calc = (currentRating*currentVotes+newRating)/newVotes
	calc = calc.toFixed(2)
	
	updateNewVotes(newVotes)
	updateNewRating(calc)
	outputStars(calc)
}

$('#rating-stars').on('click', 'i', function(){
	let newRating = getStarIndex($(this))
	calculateNewRatingScore(newRating)
})

$('#rating-stars').on('mouseover', 'i', function(){
	let userRating = getStarIndex($(this))
	$('#rating-stars i').each(function(i) {
		let $this = $(this)
		$this.addClass('user-rating')
		if (i < userRating) {
			$this.removeClass('far').addClass('fas')
		} else {
			$this.removeClass('fas').addClass('far')
		}
	})
}).mouseout(function() {
	let defaultRating = getCurrentRating()
	outputStars(defaultRating)
});