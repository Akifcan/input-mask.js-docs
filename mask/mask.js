const inputs = document.querySelectorAll('.mask')

inputs.forEach(input => {
	input.addEventListener('keydown', function(e){
		let masks = input.dataset.mask.split('')


		let checkMaskLength = input.value.length
		const numberRegex = new RegExp('^[0-9]$') 
		const letterRegex = new RegExp('^[a-zA-Z]+$')

		console.log(masks)
		console.log(checkMaskLength)
		console.log(masks[checkMaskLength])

		let tempRegexMask
		let tempRegexVal

		input.setAttribute('maxLength', masks.length)

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
		let check = checkMaskLength + 1
		setTimeout(() => {

			if(e.keyCode != 8){
				if(masks[check] == '-' || masks[check] == ':'){
					input.value += masks[check]
				}
			}

		}, 100)

		if(tempRegexMask == tempRegexVal){
		}else if(e.keyCode != 8){
			e.preventDefault()
		}
	})	
})

