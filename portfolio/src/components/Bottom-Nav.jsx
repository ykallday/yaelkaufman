import { Link } from "react-router-dom"

export default function BottomNav(){
return(
    <div className = 'navigation'>
   <div id = 'bottom-nav'>
  <Link to = {'portfolio'}><button className ='link-circle'> </button></Link>
  <Link to = {'/linkedin'}><button className ='link-circle'> </button></Link>
  <Link to = {'/placeholder'}><button className ='link-circle'> </button></Link>
  <Link to = {'/hobbies'}><button className ='link-circle'> </button></Link>
</div>  
</div>
    )
}
