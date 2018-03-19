import Search from './Search';

var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search searching={props.query}/>
    </div>
  </nav>
);

export default Nav;
