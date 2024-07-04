

const FiguresResults = ({loading, figuresResults}) => {
  return (
    <>
      {loading && <h2 className="loading">Loading...</h2>}
        {figuresResults.length > 0 && !loading && (
          <div>
            <h2 className="result-header">Results</h2>
            <div className="results-box">
              {figuresResults.map((result, index) => (
                <div key={index} className="result-box">
                  <h4>
                    {result.name}: {' '} {result.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
    </>
  )
}

export default FiguresResults;