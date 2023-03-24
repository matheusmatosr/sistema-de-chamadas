import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './index.css';
import { toast } from 'react-toastify';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault();

    if (!email | !password) {
      setError("Preencha todos os campos");
      toast.warn("Foi detectado campos vazios!");
      return;
    }

    if (email === password){
      setError("Não é permitido campos iguais");
      toast.warn("Foi detectado campos semelhantes!")
      return;
    }
  
    toast.success("Login efetuado com sucesso!");
    navigate("/dashboard");
  };
  
  return (
    <div className="container-center">
      <div className="login">
        <div className='logo-area'>
          <img src={logo} alt="Sistema Logo" />
        </div>

        <form onSubmit={handleLogin}>
          <h1>Entrar</h1>
          <input type="text" placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type='submit'>Acessar</button>
        </form>

        <Link to="/register">Criar uma nova conta</Link>
      </div>
      <p className='detalhe'>@ 2023 by  <a className='myName' href="https://www.linkedin.com/in/matheus-matos-1a523221b/">Matheus Matos</a></p>
    </div>
  );
}
  
export default SignIn;