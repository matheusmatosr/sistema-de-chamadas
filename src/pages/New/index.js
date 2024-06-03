import { FiPlusCircle } from "react-icons/fi";
import Header from "../../components/Header";
import Title from "../../components/Title";
import './index.css';
import { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function New(){

    const [complemento, setComplemento] = useState('');
    const [assunto, setAssunto] = useState('Suporte');
    const [status, setStatus] = useState('Aberto');

    function handleOptionChange(e){
        setStatus(e.target.value);
    }

    function handleChangeSelect(e){
        setAssunto(e.target.value);
    }

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
    
        if (!assunto | !status | !complemento) {
          toast.warn("Foi detectado campos vazios!");
          return;
        }
    
        toast.success("Chamada criada com sucesso!");
        navigate("/dashboard")
    };

    return(
        <div className="container-new">
            <Header />

            <div className="content">
                <Title name="Novo chamado">
                    <FiPlusCircle size={25}/>
                </Title>

                <div className="container" onSubmit={handleRegister}>
                    <form className="form-profile">
                        <label>Clientes:</label>
                        <select>
                            <option key={1}>Mercado</option>
                            <option key={2}>Loja</option>
                        </select>
                
                        <label>Assunto:</label>
                        <select value={assunto} onChange={handleChangeSelect}>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita tecnica">Visita tecnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <label>Status:</label>
                        <div className="status">
                            <input
                                type="radio"
                                name="radio"
                                value="Aberto"
                                onChange={handleOptionChange}
                                checked={ status === 'Aberto'}
                            />
                            <span>Aberto</span>
                            
                            <input
                                type="radio"
                                name="radio"
                                value="Progresso"
                                onChange={handleOptionChange}
                                checked={ status === 'Progresso'}
                            />
                            <span>Progresso</span>
                            
                            <input
                                type="radio"
                                name="radio"
                                value="Atendido"
                                onChange={handleOptionChange}
                                checked={ status === 'Atendido'}
                            />
                            <span>Atendido</span>
                        </div>
                        <label>Complemento:</label>
                        <textarea
                            type="text"
                            placeholder="Descreva seu problema..."
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                        />

                        <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}