import logo from '/world.svg'
import './PreSearchBrand.css';

const PreSearchBrand = (props) => {
  return (
    <>
        <div>
            <a href="/">
            <img src={logo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>{props.title}</h1>
    </>
  )
}

export default PreSearchBrand;