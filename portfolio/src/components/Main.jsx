import {Route, Routes} from 'react-router-dom'
import AboutMe from './Aboutme'
import Contact from './Contact'
import Resume from './Resume'
import Hobbies from './Hobbies'
import Portfolio from './Portfolio'
import LinkedIn from './Linkedin'
import GitHub from './GitHub'


export default function Main(){
    return(
        <div id='main'>
            <Routes>
            <Route path = "/"></Route>
            <Route path="about-me" element={<AboutMe/>} />
            <Route path ="contact" element={<Contact/>} />
            <Route path ="resume" element={<Resume/>} />
            <Route path ="hobbies" element={<Hobbies/>} />
            <Route path ="portfolio" element = {<Portfolio/>}/>
            <Route path ="linkedin" element= {<LinkedIn/>}/>
            <Route path ="github" element = {<GitHub/>} />
            </Routes>
            
        
        </div>
    )
}