import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie";

function App() {
  const [count, setCount] = useState(0);
  const quoteArray = props.quotes.map((quote) => {
  
  function doSomethingWith(value) {
    console.log(value);
  }

  function countHand() {
    setCount(count+1)
    console.log('salam')
  }

  return (
    <div className="App">
      <div className="container">
       <div className="row my-3">
        <h4>Teach you how to build a movie search engine</h4>
       </div>
       <div>
       <p>Say: {count}</p>
       </div>
       <div className="row mt-5">
        <Movie onClick={countHand} header='Iron Man' img='https://fastly.picsum.photos/id/198/200/300.jpg?hmac=Jnk3eRWYnOUbfVsjK23Mj6kSpEIk-yivwNwNUPZCgiA' year='2008' />
        <Movie onClick={countHand} header='Iron Man 3' img='https://fastly.picsum.photos/id/676/200/300.jpg?hmac=LsUQsWIg599NTNNwcLwXKvaE31ysfQLKYsYFrw_O9o8' year='2013' />
        <Movie onClick={countHand} header='Man of Steel' img='https://fastly.picsum.photos/id/222/200/300.jpg?hmac=owJZdOfXwkUqJHbR-MjF56GoNKbFIp3qGeGkkBS3Ei0' year='2013' />
        <Movie onClick={countHand} header='Iron Man 2' img='https://fastly.picsum.photos/id/196/200/300.jpg?hmac=lnuMbzY_IHjTjCeY77BE28VPk68gKVhse1nRP04R_Js' year='2010' />
       </div>
      </div>
    </div>
  );
});

 return (
  <div className="row my-3">
    <h4>FAVORITS</h4>
    {quoteArray}
  </div>
 );
}

export default App;
