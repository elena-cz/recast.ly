var Search = (props) => {
  var query = '';
  return (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick={function(e) { console.log(e.target.value); }}>
      <span className="glyphicon glyphicon-search" ></span>
    </button>
  </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
