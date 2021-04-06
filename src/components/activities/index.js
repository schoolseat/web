export default function activities({activity}) {
    return(
        <div className="activities">
            <p>{activity.name}</p>
            <p>{activity.description}</p>
            {
                activityType == 'checkbox' ?
                <Checkbox alternatives={activity.activityAlternatives} answer={activity.activityAnswer}/>
                : activityType == 'inputblock' ? 
                <InputBox answer={activity.activityAnswer}/>
                : ''
            }
        </div>
    )
}
export default function Checkbox({alternatives, answer}) {
    return(
        <div>
            <p>{alternatives}</p>
            <p>{answer}</p>
        </div>
    )
}
export default function InputBox({answer}) {
       return(
        <div>
            <p>{answer}</p>
        </div>
    )
}