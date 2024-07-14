import './EventsResults.css'
import './../../Common/Common.css'

function EventsResults({ isAnyResult, isLoading, eventResults }) {
  const getMonthName = (monthNumber) => {
    const monthNames = [
      "",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (monthNumber > 0 && monthNumber < 13) {
      return monthNames[monthNumber];
    } else return "Invalid month";
  };
  const handleYear = (year) => {
    if (year < 0) return year * -1 + " BC";
    return year + " AD";
  };

  return (
    <>
      {isLoading && <h2 className="loading"> Loading...</h2>}
      {isAnyResult && eventResults.length > 0 && !isLoading && (
        <div>
          <h2 className="result-header">Historical Events</h2>
          <div className="results-box">
            {eventResults.map((result, index) => (
              <div key={index} className="result-box">
                <h4>
                  <span className="result-dates">{result.day}</span>{" "}
                  <span className="result-dates">
                    {getMonthName(parseInt(result.month))}
                  </span>{" "}
                  <span className="result-dates">
                    {handleYear(parseInt(result.year))}
                  </span>
                </h4>
                <p>{result.event}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default EventsResults;
