import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../SignIn/index.css';
import { toast } from 'react-toastify';

function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email | !password | !nome) {
      setError("Preencha todos os campos");
      toast.warn("Foi detectado campos vazios!");
      return;
    }

    if (email === nome){
      setError("Não é permitido campos iguais");
      toast.warn("Foi detectado campos semelhantes!")
      return;
    }

    toast.success("Cadastro efetuado com sucesso!");
    <Link to="/dashboard" />
  };
  
  return (
    <div className="container-center">
      <div className="login">
        <div className='logo-area'>
          <img src={logo} alt="Sistema Logo" />
        </div>

        <form onSubmit={handleRegister}>
          <h1>Cadastre-se!</h1> 
          <input type="text" placeholder='Seu nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
          <input type="text" placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Cadastrar</button>
        </form>

        <Link to="/">Já tem uma conta? Entre</Link>
      </div>
    </div>
  );
}
  
export default SignUp;