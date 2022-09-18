import styled from "styled-components";



export const Container = styled.div`
margin: 0 auto ;
width:52rem ;
    div.profile{
        background-color: var(--base-profile) ;
        z-index:1 ;
        margin-top:-1.5rem ;
        display:flex ;
        padding: 2rem 2.5rem ;
        border-radius:7px ;
        display:flex ;
        flex-direction:column ;

        .icon{
            margin-left:6px ;
            margin-right:6px ;
        }

        .link{
            color:var(--blue) ;
            text-decoration:none ;
            display:flex ;
            justify-content:space-between ;
            font-size:12px ;
            margin-bottom:0.5rem ;
        }

        div.descri{
            display:flex ;
            gap:2rem;
            margin-top:0.5rem ;
        }
        h1{
            color: var(--base-title);
        }
        p{
            color:var(--base-span) ;
            display:flex ;
            align-items:center ;
            gap:6px;
        }


    }

    div.normal-profile{
        margin-top:1.5rem ;
        display:flex ;
        flex-direction:column ;
        gap:1rem;
        span.paragrafo{
            color: var(--base-text) ;
        }
    }

`