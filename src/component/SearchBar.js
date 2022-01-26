import React, {useState} from 'react'

const SearchBar=({onFormSubmit})=>{
  const [term,setTerm]=useState('');

  const onSubmit =(event)=>{
    event.preventDefault();

    onFormSubmit(term);
    //console.log(this.state.term)
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="ui field">
          <label className="ui teal label"><h4>Video Search</h4></label>
          <div className="ui action input">
            <input 
              type="text" 
              value={term}
              placeholder="Search..."
              onChange={(event)=>setTerm(event.target.value)}
            />
            <button className="ui green button">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
  
}

export default SearchBar;