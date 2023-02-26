import './index.css';
import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.png';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';

export default function Header() {
    return (
        <div className='sidebar'>
            <div>
                <img src={avatar} alt="Foto de perfil" />
                
            </div>

            <Link to="/dashboard">
                <FiHome color="#FFF" size={24} />
                Chamados
            </Link>
            <Link to="/costumers">
                <FiUser color="#FFF" size={24} />
                Clientes
            </Link>
            <Link to="/profile">
                <FiSettings color="#FFF" size={24} />
                Configurações
            </Link>
        </div>
    )
}