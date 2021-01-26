import {useEffect, useState} from 'react'

const Pomodoro = () => {
	const [contador, setContador] = useState(60)
	const [minContador, setMinContador] = useState(25)

	useEffect (
		() => {
			setTimeout(
				() => {
					setContador(contador - 1)
					if(contador === 0){
						setContador(60)
						setMinContador (minContador-1)
					}
				}, 1000)
		}, [contador, minContador]
	)

	return (
		<>
			<h1>{minContador}:{contador}</h1>
		</>
	)
}

export default Pomodoro