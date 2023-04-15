import { useContext, useState } from "react";
import { AuthContext } from '../../contents/auth';
import Header from "../../components/Header";
import Title from '../../components/Title';
import { FiDatabase, FiEdit2, FiPlus, FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";
import './index.css';
import Modal from '../../components/Modal';

function Dashboard() {
  const { signOut } = useContext(AuthContext);
  const [showPostModal, setShowPostModal] = useState(false);
  const navigate = useNavigate();

  function toggleModal(){
    setShowPostModal(!showPostModal);
  }
  function toggleEdit(e) {
    e.preventDefault();
    navigate("/edit");
  }

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
                <td data-label="Cliente">Padaria</td>
                <td data-label="Assunto">Suporte</td>
                <td data-label="Status">
                  <span className="badge" style={{backgroundColor: '#999'}} >
                    Em aberto
                  </span>
                </td>
                <td data-label="Cadastrado">04/03/2020</td>
                <td data-label="#"></td>
                  <button className="action" style={{backgroundColor: '#3583f6', margin: '0 10px', marginTop: '7px', borderRadius: '5px'}} onClick={() => toggleModal()}>
                    <FiSearch color="#fff" size={17} />
                  </button>
                  <button className="action" style={{backgroundColor: '#f6a935', marginTop: '7px', borderRadius: '5px'}} onClick={toggleEdit}>
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
                <td data-label="Cadastrado">28/11/2021</td>
                <td data-label="#"></td>
                  <button className="action" style={{backgroundColor: '#3583f6', margin: '0 10px', marginTop: '7px', borderRadius: '5px'}} onClick={() => toggleModal()}>
                    <FiSearch color="#fff" size={17} />
                  </button>
                  <button className="action" style={{backgroundColor: '#f6a935', marginTop: '7px', borderRadius: '5px'}} onClick={toggleEdit}>
                    <FiEdit2 color="#fff" size={17} />
                  </button>
              </tr>

              <tr>
                <td data-label="Cliente">Mercado</td>
                <td data-label="Assunto">Estoque</td>
                <td data-label="Status">
                  <span className="badge" style={{backgroundColor: '#008000'}} >
                    Realizado
                  </span>
                </td>
                <td data-label="Cadastrado">30/10/2022</td>
                <td data-label="#"></td>
                  <button className="action" style={{backgroundColor: '#3583f6', margin: '0 10px', marginTop: '7px', borderRadius: '5px'}} onClick={() => toggleModal()}>
                    <FiSearch color="#fff" size={17} />
                  </button>
                  <button className="action" style={{backgroundColor: '#f6a935', marginTop: '7px', borderRadius: '5px'}} onClick={toggleEdit}>
                    <FiEdit2 color="#fff" size={17} />
                  </button>
              </tr>

              <tr>
                <td data-label="Cliente">Serralheria</td>
                <td data-label="Assunto">Peças</td>
                <td data-label="Status">
                  <span className="badge" style={{backgroundColor: '#800000', width: '60px'}} >
                    Pendente
                  </span>
                </td>
                <td data-label="Cadastrado">25/05/2023</td>
                <td data-label="#"></td>
                  <button className="action" style={{backgroundColor: '#3583f6', margin: '0 10px', marginTop: '7px', borderRadius: '5px'}} onClick={() => toggleModal()}>
                    <FiSearch color="#fff" size={17} />
                  </button>
                  <button className="action" style={{backgroundColor: '#f6a935', marginTop: '7px', borderRadius: '5px'}} onClick={toggleEdit}>
                    <FiEdit2 color="#fff" size={17} />
                  </button>
              </tr>
            </tbody>
          </table>
        </>
      </div>

      {showPostModal && (
        <Modal 
          close={() => setShowPostModal(!showPostModal)}
        />
      )}

    </div>
  );
}
  
export default Dashboard;