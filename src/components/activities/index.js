import Checkbox from './Checkbox';
import InputBox from './InputBox';

export default function activities({activity}) {
    return(
        <div className="activities">
            <div className="activities-info">
                <p className="activities-name" >{activity.name}</p>
                <p className="activities-description">{activity.description}</p>
            </div>
            {
                activity.activityType == 'checkbox' ?
                <Checkbox activity={activity}/>
                : activity.activityType == 'inputblock' ? 
                <InputBox />
                : ''
            }
        </div>
    )
}