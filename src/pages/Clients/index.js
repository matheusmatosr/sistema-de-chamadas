import { useContext, useState } from "react";
import { AuthContext } from '../../contents/auth';
import Header from "../../components/Header";
import Title from '../../components/Title';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Client() {
  const { signOut } = useContext(AuthContext);
  const [ nome, setNome ] = useState('');
  const [ cnpj, setCnpj ] = useState('');
  const [ endereco, setEndereco ] = useState('');
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    e.preventDefault();
        
    if (!nome | !cnpj | !endereco) {
      toast.warn("Foi detectado campos vazios!");
      return;
    }
    
    if(cnpj === endereco){
      toast.warn("Foi detectado campos semelhantes!")
      return;
    }

    toast.success("Alterações salvas com sucesso!");
    navigate("/dashboard");
  }

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Title name="Clientes">
          <FaUser size={25} />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleRegister}>
            <label>Nome fantasia</label>
            <input 
              type="text"
              placeholder="Nome da empresa" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)}  
            />

            <label>CNPJ</label>
            <input 
              type="text"
              placeholder="Digite o CNPJ" 
              value={cnpj} 
              onChange={(e) => setCnpj(e.target.value)}  
            />

            <label>Endereço</label>
            <input 
              type="text"
              placeholder="Endereço da empresa" 
              value={endereco} 
              onChange={(e) => setEndereco(e.target.value)}  
            />

            <button type="submit">
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
  
export default Client;