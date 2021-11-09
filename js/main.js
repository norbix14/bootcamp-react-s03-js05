document.addEventListener('DOMContentLoaded', () => {
	const toTop = document.querySelector('#toTop')

	window.addEventListener('scroll', controlScroll)

	function controlScroll() {
		const st = document.body.scrollTop || document.documentElement.scrollTop
		const display = toTop.style.display
		const cl = toTop.classList
		if (st > 300) {
			toTop.style.display = 'block'
			cl.remove('hide')
			cl.add('show')
			setTimeout(() => {cl.add('rotate')}, 2100)
	  } else {
			if (display === 'block') {
				cl.remove('show')
				cl.add('hide')
				setTimeout(() => {
					cl.remove('rotate')
					toTop.style.display = 'none'
				}, 2000)
			}
	  }
	}

	toTop.addEventListener('click', () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	})

	const ej01 = (digits) => {
		return String(digits).split('').reduce((acc, cur) => acc += parseInt(cur), 0)
	}
	const ej02 = (op) => {
		return String(op).split('+').reduce((acc, cur) => acc += parseInt(cur), 0)
	}
	const ej03 = (limit = 10) => {
		return Math.round(Math.random() * limit)
	}

	document.addEventListener('click', e => {
		const { target: { tagName, id } } = e
		if (tagName === 'BUTTON') {
			switch (id) {
				case 'ej01':
					const p1 = prompt('Ingresá algunos digitos. Ej: 123, 456: ')
					return alert(`La suma de todos los dígitos es: ${ej01(p1)}`)
				case 'ej02':
					const p2 = prompt('Ingresá una operación de suma. Ej: 10 + 20 ')
					return alert(`La suma es: ${ej02(p2)}`)
				case 'ej03':
					const num3 = ej03()
					let p3 = parseInt(prompt('Adiviná un número del 1 al 10: '))
					while (num3 !== p3) {
						p3 = parseInt(prompt('Adiviná un número del 1 al 10: '))
					}
					if (num3 === p3) {
						return alert(`¡Adivinaste! El número era ${p3}`)
					}
				default:
					console.log('ELEGIR EJERCICIO')
			}
		}
	})

})
