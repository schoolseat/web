import Login from '../login' 
import Link from 'next/link'
import {lucas} from '../../services/users.json'
import {um} from '../../services/classes.json'

let user = lucas;

export default function classes() {
    return(
        <div className="classes">
            {um.name}
    </div>
    )
}