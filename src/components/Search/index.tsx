import React, { useState } from 'react';
import * as S from './styles'
import useGithub from "../../hooks/github-hooks";

export const Search = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState('');

    const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameForSearch(event.currentTarget.value)
    };

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    const handleKeyPress = (event: React.KeyboardEvent) => { 
        if(event.key === 'Enter') submitGetUser(); 

    }

    return <S.Wrapper>
        <S.Input
            placeholder="Digite o username para pesquisa..."
            onChange={handleChangeUser}
            onKeyUp={handleKeyPress}
        />
        <S.Button onClick={submitGetUser} />
    </S.Wrapper>
}