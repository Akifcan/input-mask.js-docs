const inputs = document.querySelectorAll('.mask')

inputs.forEach(input => {
	input.addEventListener('keydown', function(e){
		let masks = input.dataset.mask.split('')
		let checkMaskLength = input.value.length
		const numberRegex = new RegExp('^[0-9]$') 
		const letterRegex = new RegExp('^[a-zA-Z]+$')

		let tempRegexMask
		let tempRegexVal

		input.setAttribute('maxLength', masks.length)

		if(masks[checkMaskLength] == '-'){
			input.value += '-'
		}

		if(numberRegex.test(masks[checkMaskLength])){
			tempRegexMask = 'number'
		}else{
			tempRegexMask = 'letter'
		}

		if(numberRegex.test(e.key)){
			tempRegexVal = 'number'
		}else{
			tempRegexVal = 'letter'
		}

		if(tempRegexMask == tempRegexVal){
			console.log('OK!')
		}else if(e.keyCode != 8){
			e.preventDefault()
		}
	})	
})

