import React from 'react';

export default function Checkbox(activity) {
  const { isMutiple, activityAlternatives } = activity;
  return (
    <div className="checkbox">
      <select multiple={isMutiple} className="checkbox-select">
        {
                Object.values(activityAlternatives).map((label) => <option value={label} className="checkbox-label">{label}</option>)
                }
      </select>
    </div>
  );
}
