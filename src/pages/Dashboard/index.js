import { useContext } from "react";
import { AuthContext } from '../../contents/auth';
import Header from "../../components/Header";
import Title from '../../components/Title';
import { FiDatabase, FiEdit2, FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from "react-router-dom";
import './index.css';

function Dashboard() {
  const { signOut } = useContext(AuthContext);

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Title name="Dashboard">
          <FiDatabase size={25} />
        </Title>

        <>
          <Link to="/new" className="new">
            <FiPlus color="#fff" size={25} />
            Novo chamado
          </Link>

          <table>
            <thead>
              <tr>
                <th scope="col">Cliente</th>
                <th scope="col">Assunto</th>
                <th scope="col">Status</th>
                <th scope="col">Cadastrado</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Cliente">Mercado esquina</td>
                <td data-label="Assunto">Suporte</td>
                <td data-label="Status">
                  <span className="badge" style={{backgroundColor: '#999'}} >
                    Em aberto
                  </span>
                </td>
                <td data-label="Cadastrado">04/03/2020</td>
                <td data-label="#"></td>
                  <button className="action" style={{backgroundColor: '#3583f6'}}>
                    <FiSearch color="#fff" size={17} />
                  </button>
                  <button className="action" style={{backgroundColor: '#f6a935'}}>
                    <FiEdit2 color="#fff" size={17} />
                  </button>
              </tr>


              <tr>
                <td data-label="Cliente">Pousada Lr</td>
                <td data-label="Assunto">Hotelaria</td>
                <td data-label="Status">
                  <span className="badge" style={{backgroundColor: '#999'}} >
                    Em aberto
                  </span>
                </td>
                <td data-label="Cadastrado">04/03/2020</td>
                <td data-label="#"></td>
                  <button className="action" style={{backgroundColor: '#3583f6'}}>
                    <FiSearch color="#fff" size={17} />
                  </button>
                  <button className="action" style={{backgroundColor: '#f6a935'}}>
                    <FiEdit2 color="#fff" size={17} />
                  </button>
              </tr>
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
}
  
export default Dashboard;