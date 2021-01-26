import {useState} from 'react'

const FormularioCadastro = () => {
	const [nome, setNome] = useState ("")
	const [email, setEmail] = useState ("")
	const [username, setUsername] = useState ("")
	const [senha, setSenha] = useState ("")
	const [confSenha, setConfSenha] = useState ("")
	const [numContato, setNumContato] = useState ("")
	
	const imprimeValores = () => {
		console.log(nome, email, username, senha, confSenha, numContato)
	} 

	return(
		<form>
			<input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
			<input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
			<input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
			<input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
			<input type="password" placeholder="Confirmação de senha" value={confSenha} onChange={(e) => setConfSenha(e.target.value)}/>
			<input type="text" placeholder="Numero de Contato" value={numContato} onChange={(e) => setNumContato(e.target.value)}/>
			<button type="button" onClick={imprimeValores}>Cadastrar</button>
		</form>
)
}

export default FormularioCadastro