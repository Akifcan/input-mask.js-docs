const tryInput = document.querySelector('.try')
const code = document.querySelector('.code span')

tryInput.addEventListener('keyup', function(){
	input.dataset.mask = tryInput.value
	code.innerText = tryInput.value
	input.value = ''
})

const input = document.querySelector('.mask')

code.innerText = tryInput.value
input.dataset.mask = tryInput.value

input.addEventListener('keydown', function(e){
	let masks = input.dataset.mask.split('')
	let checkMaskLength = input.value.length
	const numberRegex = new RegExp('^[0-9]$') 
	const letterRegex = new RegExp('^[a-zA-Z]+$')

	let tempRegexMask
	let tempRegexVal

	input.setAttribute('maxLength', masks.length)

	if(masks[checkMaskLength] == '-' || masks[checkMaskLength] == ':'){
		input.value += masks[checkMaskLength]
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
		console.log('ok')
	}else if(e.keyCode != 8){
		e.preventDefault()
	}
})	

