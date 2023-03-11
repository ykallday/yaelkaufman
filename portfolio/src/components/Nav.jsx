import {Link} from 'react-router-dom'


export default function Nav(){
    return(
      <div className = 'navigation'>
      <div id = 'top-nav'>
        <Link to = {'/'}><button className ='link-circle'> </button></Link>
        <Link to = {'/about-me'}><button className ='link-circle'> </button></Link>
        <Link to = {'/contact'}><button className ='link-circle'> </button></Link>
        <Link to = {'/resume'}><button className ='link-circle'> </button></Link>
      </div>
      </div>
    )
}