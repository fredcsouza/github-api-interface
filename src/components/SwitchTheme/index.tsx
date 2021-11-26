import * as S from './styles'
import lightIcon from '../../assets/img/sunny.png'
import darkIcon from '../../assets/img/night.png'

interface Props {
    toggleTheme(): void;
    title: string;
    primaryColor: string;
    secondaryColor: string;
}

export const SwitchTheme = (props: Props) => {
    return <S.CustomSwitch
        onChange={props.toggleTheme}
        checked={props.title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        checkedHandleIcon={<S.LightIcon src={lightIcon} />}
        uncheckedHandleIcon={<S.DarkIcon src={darkIcon} />}
        height={13}
        width={35}
        handleDiameter={28}
        offColor={props.secondaryColor}
        onColor={props.secondaryColor}
    />

}