import {useEffect, useState} from 'react';
import axios from 'axios';

const app_url = "https://api.restful-api.dev/objects";

function App(){
  const [callbackUsers, setCallbackUsers] = useState([]);
  const [promisedUsers, setPromiseUsers] = useState([]);
  const [asyncUsers, setAsyncUsers] = useState([]);

  const fetchWithCallback = (callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET',app_url);
    xhr.onload = () => {
      if(xhr.status == 200){
        callback(JSON.parse(xhr.responseText));
      } else {
        console.error('Callback fetch failed !')
      }
    };
    xhr.onerror = () => console.log('Callback Error');
    xhr.send();
  };

  const fetchWithPromise = () => {
    return axios.get(app_url).then((response) => setPromiseUsers(response.data)).catch((err) => console.error('Promise fetch failed', err));
  };

  const fetchWithAsyncAwait = async() => {
    try{
      const response = await fetch(app_url);
      const data = await response.json();
      return data;
    } catch(err) {
      console.error('Async/Await fetch failed', err)
    }
  };

  useEffect(() => {
    fetchWithCallback((data) => setCallbackUsers(data));
    fetchWithPromise();
    fetchWithAsyncAwait().then((data) => {
      if (data) setAsyncUsers(data);
    });
  }, []);

  return (
    <div style={{padding: 20}}>
      <h1>Fetching Data Example</h1>

      <section>
        <h2>Callback</h2>
        <UserList users = {callbackUsers} />
      </section>

      <section>
        <h2>Promise</h2>
        <UserList users = {promisedUsers} />
      </section>

      <section>
        <h2>Async/Await</h2>
        <UserList users = {asyncUsers}/>
      </section>
    </div>
  );
}

const UserList = ({users}) => (
  <ul>{users.length === 0 ? <li>Loading.....</li>:users.map(user =>
    <li key = {user.id} > {user.name}</li>
  )}</ul>
);

export default App;
