import 'styled-components'
 
declare module 'styled-components' {
    export interface DefaultTheme { 
        title: string;
        colors: {
            header: string;
            textHeader: string,
            primary: string;
            secondary: string;
            background: string;
            text: string;
            repositories: string;
        }    
    }
}