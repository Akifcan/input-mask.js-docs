const copyNpm = document.querySelector('.npm-repository')
const getCdn = document.querySelector('.get-cdn')
const copiedNotification = document.querySelector('.copied-notification')

copyNpm.addEventListener('click', function(){
	navigator.clipboard.writeText('npm i input-mask.js')
	.then(copied => {
		let p = document.createElement('p')
		p.innerText = 'Copied to clipboard: npm i input-mask.js'
		copiedNotification.appendChild(p)
		copiedNotification.style.display = 'flex'
		copyNpm.disabled = 'true'

		setTimeout(() => {
			copiedNotification.style.display = 'none'
			copiedNotification.innerHTML = ''
			copyNpm.removeAttribute('disabled')
		}, 3000)
	})
})

getCdn.addEventListener('click', function(){
		navigator.clipboard.writeText(`${window.location}/mask/mask.js`)
	.then(copied => {
		let p = document.createElement('p')
		p.innerText = `Copied to clipboard: ${window.location}/mask/mask.js`
		copiedNotification.appendChild(p)
		copiedNotification.style.display = 'flex'
		getCdn.disabled = 'true'

		setTimeout(() => {
			copiedNotification.style.display = 'none'
			copiedNotification.innerHTML = ''
			getCdn.removeAttribute('disabled')
		}, 3000)
	})

})
