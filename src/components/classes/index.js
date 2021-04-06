import {Activities} from '../'

export default function classes({user, grade}) {
    console.log(grade)
    return(
        <div className="classes">
            <div>
                <h1>{grade.name}</h1>
            </div>
            <Activities  activity={grade.activities}/>
        </div>
    )
}