import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background: ${props => props.theme.colors.header};
    color: ${props => props.theme.colors.textHeader};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`