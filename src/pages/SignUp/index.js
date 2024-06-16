import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../SignIn/index.css';
import { toast } from 'react-toastify';
import Footer from '../../components/Footer';

function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email | !password | !nome) {
      toast.warn("Foi detectado campos vazios!");
      return;
    }

    if (email === nome){
      toast.warn("Foi detectado campos semelhantes!")
      return;
    }

    toast.success("Cadastro efetuado com sucesso!");
    navigate("/")
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

        <Link to="/">Já tem uma conta? <a style={{color:'blue'}}>Entre</a></Link>
      </div>
      <Footer />
    </div>
  );
}
  
export default SignUp;