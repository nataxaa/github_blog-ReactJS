import { Container, Publish, Repositorios } from "./style";
import {useEffect, useState} from 'react'
import { api } from "../../services/api";
import {AiFillGithub} from 'react-icons/ai'
import {FaBuilding} from 'react-icons/fa'
import {MdGroups} from 'react-icons/md'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import { Link } from "react-router-dom";
import {BiSearch} from 'react-icons/bi'


interface repoProps{
    id: number
    name:string
    description: string
}

export function Home(){

    const [usuario, setUsuario] = useState<any>()
    const [repo, setRepo] = useState<any[]>()
    const [input, setInput] = useState('')
    const [item, setItem] = useState<any>()
    

    useEffect(() => {
        (async ()=>{
            const response = await api.get('nataxaa');
            const response2 =  await api.get('nataxaa/repos')
            setUsuario(response.data);
            setRepo(response2.data)
        })();
    },[])
   
    function handleSearch(){
        setItem(repo?.find(props => props.name == input))
      if(input == ''){
        alert('Escreva algo!')
      }
      
    }


    return(
        <Container>
            <div className="profile">
               <img src={usuario?.avatar_url} alt="imagem de perfil" />

               <div className="description">

                  <span>{usuario?.name} <a href="https://github.com/nataxaa">GITHUB<BsBoxArrowUpRight className="icon"/></a></span>
                  <span className="bio">{usuario?.bio}</span>
               <div className="icons">
                  <p><AiFillGithub/>{usuario?.login}</p>
                  <p><FaBuilding/>Nenhum</p>
                  <p><MdGroups/>{usuario?.followers}</p>
               </div>

               </div>
            </div>

            <Publish>
                <span>Publicações <p>{usuario?.public_repos} Publicações</p></span>
                <input 
                    type="text" 
                    placeholder='Buscar Conteudo'
                    value={input}
                    onChange={e=>setInput(e.target.value)}
                />
                <button onClick={handleSearch}><BiSearch/></button>

                {item && (
                    <div className="repo-search">
                        <p>{item.name} <span className="date">Há 1 dia</span></p>
                        <span>{item.description}</span>
                    </div>
                )}
            </Publish>

            <Repositorios>
                {repo?.map((props:repoProps)=>(
                    <Link className="links" to={`Repositorio/${props.id}`}>
                    <div className="repo">
                        <p>{props.name} <span className="date">Há 1 dia</span></p>
                        <span>{props.description}</span>
                    </div>
                    </Link>
                ))}
            </Repositorios>

        </Container>
    )
}