import React, { useState } from 'react'
import useGithub from "../../hooks/github-hooks";


function Header() {

    const { getUser } = useGithub();
    const [username, setUsername] = useState();

    const inputGetUser = () => {
        if (username) getUser(username);
    }
    const changeState = (event) => {
        setUsername(event.target.value); //atualiza o username a ser procurado quando o texto é modificado
    }

    return (
        <header>
            <h1>Interface da API Github</h1>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite o Username a ser pesquisado"
                    aria-label="Username"
                    aria-describedby="button-addon2"
                    onChange={changeState}
                />
                <button type="button" className="btn btn-primary" onClick={inputGetUser}>Buscar</button>
            </div>
        </header>
    )
}

export default Header
