import './FiguresResults.css'

const FiguresResults = ({isAnyResult, isloading, figuresResults}) => {
  return (
    <>
      {isloading && <h2 className="loading">Loading...</h2>}
        {isAnyResult && figuresResults.length > 0 && !isloading && (
          <div>
            <h2 className="result-header">Historical Figures</h2>
            <div className="results-box">
              {figuresResults.map((result, index) => (
                <div key={index} className="result-box">
                  <div className="name">
                    {result.name}
                  </div>
                  <p className="title">{result.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
    </>
  )
}

export default FiguresResults;