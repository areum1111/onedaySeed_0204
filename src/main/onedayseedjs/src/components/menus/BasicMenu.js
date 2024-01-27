import { Link } from "react-router-dom"

const BasicMenu = ()=> {
  return (
    <>
        <nav class="navbar navbar-expand-lg" id="nav" >
    <div class="container-fluid" id="nav-form">
      <Link to = {'/'} className="navbar-brand" id='logo'>OnedaySeed</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={'/about'} class="nav-link active" aria-current="page" >About Us</Link>
        </li>
        <li class="nav-item">
          <Link to={'/mypage'} class="nav-link">My Page</Link>
        </li>
        <li class="nav-item">
          <Link to={'/login/'} class="nav-link disabled" aria-disabled="true">Login</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input className="form-control me-2 " id="search-input" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success " id='search-btn' type="submit">Search</button>
      </form>
    </div>
  </div>
 </nav>
 <hr/>
    </>
  )
}
export default BasicMenu;