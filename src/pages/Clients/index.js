import { useContext } from "react";
import { AuthContext } from '../../contents/auth';
import Header from "../../components/Header";
import Title from '../../components/Title';
import { FiDatabase } from 'react-icons/fi';

function Client() {
  const { signOut } = useContext(AuthContext);

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Title name="Clientes">
          <FiDatabase size={25} />
        </Title>
      </div>
      <button onClick={() => signOut() }>Logout</button>
    </div>
  );
}
  
export default Client;