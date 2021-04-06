import Login from '../login' 
import Link from 'next/link'
import {lucas} from '../../services/users.json'
let user = lucas;

export default function navBar() {
    return(
        <div className="navBar">
            <Link href='/#'>
                   <a className="title">Escola +</a>      
            </Link>
            <div className="buttons">
                <ul>
                    <Login className="login" user={user}/>
                </ul>
            </div>
    </div>
    )
}