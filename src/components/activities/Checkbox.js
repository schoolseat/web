export default function Checkbox({activity}) {
    return(
        <div className="checkbox">
            <select multiple={activity.isMutiple} className="checkbox-select">
                {
                Object.values(activity.activityAlternatives).map(label => {
                    return <option value={label} className="checkbox-label">{label}</option>
                  })
                }
            </select>
        </div>
    )
}