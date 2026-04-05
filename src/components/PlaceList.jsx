export function PlaceList({ day, focusedIndex, onFocusPlace }) {
  return (
    <div className="place-panel">
      <div className="place-panel-head">
        <h2>{day.title}</h2>
        <p>{day.date}</p>
      </div>

      <ol className="place-list">
        {day.places.map((place, index) => {
          const isFocused = focusedIndex === index;
          return (
            <li key={`${day.id}-${place.name}-${index}`}>
              <button
                type="button"
                className={`place-item${isFocused ? ' focused' : ''}`}
                onClick={() => onFocusPlace(index)}
              >
                <span className="place-order">{index + 1}</span>
                <span className="place-texts">
                  <span className="place-name">{place.name}</span>
                  {place.time ? <span className="place-time">{place.time}</span> : null}
                  {place.note ? <span className="place-note">{place.note}</span> : null}
                  <span className="place-address">{place.address}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
