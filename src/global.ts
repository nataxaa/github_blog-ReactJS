import styled, {createGlobalStyle} from 'styled-components'
import image1 from '../src/images/Cover.png'


export const GlobalStyle = createGlobalStyle`


:root{
    --blue : #3294F8;
    --base-title: #E7EDF4;
    --base-subtitle: #C4D4E3;
    --base-text: #AFC2D4;
    --base-span: #7B96B2;
    --base-label: #3A536B;
    --base-border: #1C2F41;
    --base-post: #112131;
    --base-profile: #0B1B2B;
    --base-background: #071422;
    --base-input: #040F1A;
}

*{
    margin: 0 ;
    padding: 0 ;
}

body{
    font-family: 'Nunito', sans-serif;
    background-color: var(--base-background) ;
}



`

export const Header = styled.header`

    height:12rem ;
    background-image: url(${image1}) ;
    z-index: 0 ;

`