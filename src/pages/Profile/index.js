import './index.css';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiSettings, FiUpload } from 'react-icons/fi';
import avatar from '../../assets/avatar.png';
import './index.css';

export default function Profile(){
   
    return(
        <div>
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

                        <label>Nome</label>
                        <input type="text" placeholder='Seu nome' />

                        <label>Email</label>
                        <input type="text" placeholder='teste@teste.com' disabled={false}/>

                        <button type='submit'>Salvar</button>
                    </form>
                </div>
                <div className='container'>
                    <button className='logout-btn'>Sair</button>
                </div>
            </div>
        </div>
    )
}