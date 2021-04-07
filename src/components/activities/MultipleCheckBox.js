export default function Checkbox({activity}) {
    return(
        <div>
            {
                Object.values(activity.activityAlternatives).map(label => {
                    return (
                        <div>
                            <input type="checkbox" id="scales" name="scales"/>
                            <label for={label}>{label}</label>
                        </div>
                    )
                  })
            }
        </div>
    )
}