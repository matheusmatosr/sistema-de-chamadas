import { FiPlusCircle } from "react-icons/fi";
import Header from "../../components/Header";
import Title from "../../components/Title";
import './index.css';

export default function New(){
    return(
        <div>
            <Header />

            <div className="content">
                <Title name="Novo chamado">
                    <FiPlusCircle size={25}/>
                </Title>

                <div className="container">
                    <form className="form-profile">
                        <label>Clientes</label>
                        <select>
                            <option key={1}>Mercado</option>
                            <option key={2}>Loja</option>
                        </select>
                    </form>

                    <form>
                        <label>Assunto</label>
                        <select>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita tecnica">Visita tecnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>
                    </form>

                    <form>
                        <label>Status</label>
                        <input
                            type="radio"
                            name="radio"
                            value="Aberto"
                        />
                        <span>Em aberto</span>
                        <input
                            type="radio"
                            name="radio"
                            value="Progresso"
                        />
                        <span>Progresso</span>
                        <input
                            type="radio"
                            name="radio"
                            value="Atendido"
                        />
                        <span>Atendido</span>
                    </form>
                </div>

                <label>Complemento</label>
                <textarea
                    type="text"
                    placeholder="Descreva seu problema"
                />

                <button type="submit">Registrar</button>
            </div>
        </div>
    )
}