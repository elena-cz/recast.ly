class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
    this.handleEnterSubmit = this.handleEnterSubmit.bind(this);
    
    this.debouncedHandleButtonSubmit = _.debounce(this.handleButtonSubmit, 500, {'leading': true});
    this.debouncedHandleEnterSubmit = _.debounce(this.handleEnterSubmit, 500, {'leading': true});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleButtonSubmit(event) {
        
    this.props.onSearch(this.state.value);
    // event.preventDefault();
  }
  
  handleEnterSubmit(event) {
    if (event.key === 'Enter') {
      this.props.onSearch(this.state.value);
    }
  }
  
  
  render() {
    return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.debouncedHandleEnterSubmit} />
      <button className="btn hidden-sm-down" type="submit" onClick={this.debouncedHandleButtonSubmit} >
        <span className="glyphicon glyphicon-search" ></span>
      </button>
    </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
