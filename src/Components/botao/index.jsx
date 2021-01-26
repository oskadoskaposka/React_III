import {useState} from 'react'

const Botao = (props) => {

	const [textoBotao, escolherTexto] = useState(false)

	return(
		<div className="textoBotao">
			<button onClick ={() => escolherTexto(!textoBotao)}>Valor: {textoBotao.toString()}</button>
		</div>

	)
}

export default Botao