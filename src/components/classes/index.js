import {Activities} from '../'

export default function classes({user, grade}) {
    return(
        <div className="classes">
            <div className="classes-name">
                <h1>{grade.name}</h1>
            </div>
            {
                Object.values(grade.activities).map(activity => {
                  return <Activities activity={activity} />
                })
            }
        </div>
    )
}