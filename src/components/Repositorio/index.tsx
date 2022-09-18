import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Container } from "./style";
import {BsChevronLeft, BsBoxArrowUpRight} from 'react-icons/bs'
import {AiFillGithub, AiFillCalendar} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'


export function Repositorio(){

    const {id} = useParams();
    const [repo2, setRepo2] = useState<any[]>()
    
    useEffect(() => {
        (async ()=>{
            const response2 =  await api.get('nataxaa/repos')
            setRepo2(response2.data)
        })();
    },[])

    
        const item = repo2?.find((props)=>props.id == id)
        console.log(item)
    
    

    return(
        <Container>
            <div className="profile">
                <div className="link">
                    <Link className="link" to={'/'}><BsChevronLeft className="icon"/> VOLTAR</Link>
                    <a className="link" href={item?.html_url}>VER NO GITHUB<BsBoxArrowUpRight className="icon"/></a>
                </div>
                <h1>{item?.name}</h1>
                <div className="descri">
                    <p><AiFillGithub/>nataxaa</p>
                    <p><AiFillCalendar/>Há 1 dia</p>
                    <p><FaComment/>{item?.watchers}</p>
                </div>
            </div>
            <div className="normal-profile">
                <span className="paragrafo">Programming languages all have built-in data structures, but these often differ from one 
                    language to another. This article attempts to list the built-in data structures available in
                     JavaScript and what properties they have. These can be used to build other data structures.
                      Wherever possible, comparisons with other languages are drawn.
                </span>
                <span className="paragrafo">
                <a className="link-noway" href="">Dynamic typing</a>
                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated
                 with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                </span>

            </div>
        </Container>
    )
}