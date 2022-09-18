
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
    img{
        width:148px ;
        height:148px ;
        border-radius:7px ;
    }

    span{
        font-size:24px ;
        color: var(--base-title) ;
        margin-bottom:8px ;
    }

    span.bio{
        font-size:16px ;
        color:var(--base-text) ;
        margin-bottom:24px ;
    }

    div.description{
        display:flex ;
        flex-direction:column ;
        margin-left:32px ;
    }

    div.icons{
        display:flex ;
        gap:2rem;
        color:var(--base-text) ;
        p{
            align-items:center ;
            gap:5px;
            display:flex ;
        }
    }
    a{
        font-size:12px ;
        position:relative ;
        right:-23rem ;
        top:-1rem ;
        color:var(--blue) ;
        text-decoration:none ;
        .icon{
            margin-left:7px ;
        }
    }

}

`

export const Publish = styled.div`
    margin: 4rem auto 1rem ;
    width:52rem ;
    display:flex ;
    flex-direction:column ;

    div.repo-search{
        padding:2rem ;
        background-color:var(--base-post) ;
        color:var(--base-title) ;
        border-radius:7px ;
        margin-bottom:2rem ;
        span{
            color:var(--base-text)
        }
        span.date{
            color:var(--base-span) ;
            font-size:12px ;
        }
        p{
            align-items:center ;
            display:flex ;
            justify-content:space-between ;

        }
    }

    button{
        width: 3rem ;
        position:relative ;
        right:-48.5rem ;
        top:-2rem ;
        background:none ;
        color:var(--base-label);
        border:none ;
        font-size:22px ;
        cursor: pointer;
    }

    span{
        color:var(--base-subtitle) ;
        font-size:18px ;
        margin-bottom:12px ;
        display:flex ;
        justify-content:space-between ;
        p{
            font-size:14px ;
            color: var(--base-span)
        }
    }

    input{
        width:96% ;
        align-items:center ;
        padding:12px 16px ;
        background-color: var(--base-input) ;
        outline:none ;
        color:#FFF ;
        border: 1px solid var(--base-border) ;
        border-radius:7px ;
        ::placeholder{
            color: var(--base-label) ;
            font-size:16px ;
        }
    }
`

export const Repositorios = styled.div`
    margin: 0 auto ;
    width:52rem ;
    display:grid ;
    grid-template-columns:1fr 1fr ;
    gap:1rem;

    .links{
        text-decoration:none ;
    }

    div.repo{
        padding:2rem ;
        background-color:var(--base-post) ;
        color:var(--base-title) ;
        border-radius:7px ;
        span{
            color:var(--base-text)
        }
        span.date{
            color:var(--base-span) ;
            font-size:12px ;
        }
        p{
            align-items:center ;
            display:flex ;
            justify-content:space-between ;

        }
    }

    
    
    

`