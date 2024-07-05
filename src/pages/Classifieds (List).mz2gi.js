// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixData from 'wix-data';
$w('#resetButton').hide();
$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function searchButton_click(event) {
	search();
}

function search() {

	wixData.query("Courses")
		.contains("coursePrice1",String($w('#dropdown1').value))
		.and(wixData.query("Courses").contains("title", $w('#input1').value))
		
		.find()
		.then(results => {
			$w('#listRepeater').data = results.items; 
		});
		$w('#resetButton').show();
		$w('#resetButton').enable();
		$w('#searchButton').hide();

}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function resetButton_click(event) {
	$w('#dynamicDataset').setFilter(wixData.filter());
	$w('#dropdown1').value=undefined;
	$w('#input1').value=undefined;
	$w('#searchButton').show();
	$w('#searchButton').enable();
	$w('#resetButton').hide();

}