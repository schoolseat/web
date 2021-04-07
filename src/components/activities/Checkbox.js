export default function Checkbox({activity}) {
    return(
        <div>
            <select>
                {
                Object.values(activity.activityAlternatives).map(label => {
                    return <option value={label}>{label}</option>
                  })
                }
            </select>
        </div>
    )
}