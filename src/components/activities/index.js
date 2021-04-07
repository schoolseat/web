import Checkbox from './Checkbox';
import InputBox from './InputBox';
import MultCheckbox from './MultipleCheckBox'

export default function activities({activity}) {
    return(
        <div className="activities">
            <p>{activity.name}</p>
            <p>{activity.description}</p>
            {
                activity.activityType == 'checkbox' ?
                <Checkbox activity={activity}/>
                : activity.activityType == 'inputblock' ? 
                <InputBox activity={activity}/>
                : activity.activityType == 'multicheckbox' ? 
                <MultCheckbox activity={activity}/>
                : ''
            }
        </div>
    )
}