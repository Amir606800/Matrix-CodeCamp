import "../assets/CSS/filter.css"

const Filter = (props) => {
  
  
  const chechStat =(e)=>{
    const value = e.target.value
    props.settingChecks((prev)=>{
      if(e.target.checked){
        return([...prev,value])
      }else{
        return(props.checkList.filter(item=>item !=value))
      }
    })
  }

  const brandStat = (e)=>{
    const value = e.target.value
    props.settingBrands((prev)=>{
      if(e.target.checked){
        return([...prev,value])
      }else{
        return(props.brandList.filter(item=>item !=value))
      }
    })
  }

  const categories = props.productlar.map(product => product.category);
  const uniqueCategories = [...new Set(categories)];
  uniqueCategories.sort()
  const brands = props.productlar.map(product => product.brand).flat()
  const uniqueBrands = [...new Set(brands)]
  uniqueBrands.sort()
  return (
    <>
    <div className="Filter d-none d-xl-flex flex-column align-items-start">
        <div className="title fw-bold">Widget price filter</div>
        
        <form method="post">
          <div className="prices ">
            <div className="digital gap-2 d-flex align-items-center justify-content-center">
              <div className="d-flex flex-column">
                <label htmlFor="minPrice">Min price</label>
                <input onChange={(e)=>{props.settingMin(e.target.value)}} type="text" id="minPrice" value={props.minimum} />
              </div>
              <p className="mt-4 fs-2">-</p>
              <div className="d-flex flex-column">
                <label htmlFor="maxPrice">Max price</label>
                <input onChange={(e)=>{props.settingMax(e.target.value)}} type="text" id="maxPrice" value={props.maximum} />
              </div>
            </div>
            <div className="analog">
              <input id="rangeInput" className="custom-range"  step={20} min={0} max={10000} value={props.maximum} onChange={(e)=>{props.settingMax(e.target.value)}} type="range" />
              <label htmlFor="rangeInput"></label>
            </div>
          </div>
          <label className="p-2">Price: ${props.minimum} <span className="w-25">-</span> ${props.maximum} </label>
          <hr />
        </form>
        
        <div className="checkes">
            <div className="cat">
              <div className="head mb-2 fw-bolder fs-5">Product Categories</div>
              <ul className="list-unstyled ">
                {uniqueCategories.map((item,i)=>(
                  <li key={i} className="category-item d-flex gap-2 mb-1"><input onChange={chechStat} id={`catName${i}`} value={item} type="checkbox" /><label htmlFor={`catName${i}`}> {item}</label> </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="brand">
              <div className="head mb-2 fw-bolder fs-5">Filter by Brand</div>
              <ul className="list-unstyled ">
                {uniqueBrands.map((item,i)=>(
                  <li key={i} className="category-item d-flex gap-2 mb-1"><input onChange={brandStat} id={`brandName${i}`} value={item} type="checkbox" /> <label htmlFor={`brandName${i}`}> {item}</label> </li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="stock-aviability">
            <div className="head mb-2 fw-bolder fs-5">Filter by Stock</div>
            <ul className=" list-unstyled">
                <li><input  type="checkbox" /> <label > In Stock </label></li>
                <li><input  type="checkbox" /> <label > On Sale </label></li>
            </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Filter







