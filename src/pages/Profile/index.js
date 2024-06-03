import './index.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiSettings, FiUpload } from 'react-icons/fi';
import avatar from '../../assets/avatar.png';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Profile(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate();

    function handleGo(e) {
        e.preventDefault();
        navigate("/dashboard");
    }

    function handleSave(e) {
        e.preventDefault();
        
        if (!name | !email) {
            toast.warn("Foi detectado campos vazios!");
            return;
        }
        
        if(name === email){
            toast.warn("Foi detectado campos semelhantes!")
            return;
        }

        toast.success("Alterações salvas com sucesso!");
        navigate("/dashboard");
    }

    return(
        <div className='container-profile'>
            <Header />
            <div className='content'>
                <Title name="Minha conta">
                    <FiSettings size={25} />
                </Title>

                <div className='container'>
                    <form className='form-profile'>
                        <label className="label-avatar">
                            <span>
                                <FiUpload color='#fff' size={15} />
                            </span>

                            <input type="file" accept="image/*" /> <br />
                            <img src={avatar} alt="foto de perfil" width={200} height={200} />
                        </label>

                        <label>Nome:</label>
                        <input type="text" placeholder='Seu nome' value={name} onChange={(e) => setName(e.target.value)}/>

                        <label>Email:</label>
                        <input type="text" placeholder='teste@teste.com' disabled={false} value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <button type='submit' onClick={handleSave}>Salvar</button>
                    </form>
                </div>
                <div className='container'>
                    <button className='logout-btn' onClick={handleGo}>Sair</button>
                </div>
            </div>
        </div>
    )
}