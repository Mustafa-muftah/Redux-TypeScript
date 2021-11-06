import { Provider } from "react-redux";
import { store } from './../State/store';
import Search from './Search';





const App =() => {
  return( 
  <Provider store={store}>
  <div>
 <h1>Search For Category</h1>
 <Search/>
</div>
</Provider>
  )
}

export default App;