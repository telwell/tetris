// Namespace everything under Tetris
//  avoid cluttering our global namespace
var Tetris = Tetris || {}

// Get access to CONST
var CONST = CONST || {}

// Tetris Controller Module
Tetris.Model = (function(Blocks){

	var currentBlock
	var placedBlocks = []

	function init(){
		currentBlock = _randomBlock();
	}

	function getCurrentBlock(){
		return currentBlock;
	}

	// Remove the class 'current-block' from the current block
	//  add the 'placed-block' class, and add the currentBlock 
	//  to the array of placed blocks. Create new currentBlock.
	function placeCurrentBlock(){
		$('.current-block').removeClass('current-block').addClass('placed-block')
		placedBlocks.push(currentBlock);
		currentBlock = _randomBlock();
	}

	function getPlacedBlocks(){
		return placedBlocks;
	}

	function dropCurrentBlock(){
		var blockCoords = currentBlock.coords;
		for(var i=0;i<blockCoords.length;i++){
			blockCoords[i].y--;
		}
	}

	// Give our starting block a random X coord
	function _randomX(){
		return Math.floor((Math.random() * 10));
	}

	// Build a random block from our array of block constructors
	function _randomBlock(){
		var i = Math.floor((Math.random() * 5));
		var blocks = [Blocks.SquareBlock, Blocks.LineBlock, Blocks.LLeftBlock, Blocks.LRightBlock, Blocks.SRightBlock, Blocks.SLeftBlock];
		return new blocks[i];
	}

	return {
		init: init, 
		getCurrentBlock: getCurrentBlock,
		placeCurrentBlock, placeCurrentBlock, 
		getPlacedBlocks: getPlacedBlocks, 
		dropCurrentBlock, dropCurrentBlock
	}

})(Tetris.Blocks)