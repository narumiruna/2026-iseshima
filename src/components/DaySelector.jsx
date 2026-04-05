function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00+09:00`);
  return new Intl.DateTimeFormat('zh-TW', {
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
    timeZone: 'Asia/Tokyo',
  }).format(date);
}

export function DaySelector({ days, activeDayId, onSelectDay }) {
  return (
    <div className="day-selector" aria-label="每日行程選擇">
      {days.map((day, index) => {
        const isActive = day.id === activeDayId;
        return (
          <button
            key={day.id}
            type="button"
            className={`day-pill${isActive ? ' active' : ''}`}
            onClick={() => onSelectDay(day.id)}
            aria-pressed={isActive}
          >
            <span className="day-pill-number">Day {index + 1}</span>
            <span className="day-pill-date">{formatDate(day.date)}</span>
            <span className="day-pill-title">{day.title}</span>
          </button>
        );
      })}
    </div>
  );
}
