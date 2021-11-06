import { useState } from "react";
import { useAction } from './../Hooks/useAction';
import { useAppSelector } from './../Hooks/useAppSelector';





const Search: React.FC = () => {
  const [name ,setName] = useState ('')
  const { processProgress } = useAction( )
  const { data , loading , error } = useAppSelector(state => state.firstReducer)
  

  const submit =(event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    processProgress(name);
    }
  return ( 
    <div>
      <form onSubmit ={submit}>
      <input value={name} onChange = {(e) =>setName(e.target.value) }/>
      <button>Search</button>
      </form>
      {error && <h3>{error}</h3> }
      {loading && <h3>Loading ...</h3> }
      {!error &&!loading &&  data.map((user) => {
        return <li key={user.name}>{user.name} </li>
      }) }
    </div>
   );
}
 
export default Search;