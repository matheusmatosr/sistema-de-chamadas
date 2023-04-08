import { FiX } from 'react-icons/fi';
import './index.css';

export default function Modal({ close }){
    return (
        <div className='modal'>
            <div className='container'>
                <button className='close' onClick={close}>
                    <FiX size={25} color="#FFF"/>
                    Voltar
                </button>

                <main>
                    <h2>Detalhes do chamado</h2>

                    <div className='row'>
                        <span>
                            Cliente: <i>Mercado</i>
                        </span>
                    </div>

                    <div className='row'>
                        <span>
                            Assunto: <i>Suporte</i>
                        </span>
                        <span>
                            Cadastrado em: <i>22/03/2023</i>
                        </span>
                    </div>

                    <div className='row'>
                        <span>
                            Status: <i>Aberto</i>
                        </span>
                    </div>

                    <>
                        <h3>Complemento:</h3>
                        <p>Referente ao consumo de energia</p>
                    </>
                </main>
            </div>
        </div>
    )
}