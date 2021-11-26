import { useContext } from "react"
import { Container } from "./styles"
import { ThemeContext } from 'styled-components'
import { SwitchTheme } from "../SwitchTheme"

interface Props {
    toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext)

    return <Container>
        <h1>Github API Interface</h1>
        <SwitchTheme
            toggleTheme={toggleTheme}
            title={title}
            primaryColor={colors.primary}
            secondaryColor={colors.secondary}
        />
    </Container>
}