import {useState} from 'react'

const LoginForm = (props) => {
	const [email, setEmail] = useState("")
	const [senha, setSenha] = useState("")

	const imprimeValores = () => {
		console.log(email,senha)
	}

	return (
		<form action="" method=''>
			<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
			<input type="password" value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
			<button type="button" onClick={imprimeValores}>Entrar</button>
		</form>
	)
}

export default LoginForm