
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function UserDetails() {
    const [user, setUser] = useState(null);
    const pf = useRef(null);
    let id=2;

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(res.data.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetch();
  }, [id]);


  console.log(user);

  return (
    <div ref={pf}>
      <h1>User Details</h1>
      {user ? (
        <div>
        <img src={user.avatar} ></img>
          <p>{`EMAIL: ${user.email}`}</p>
          <p>{`FRIST NAME: ${user.first_name}`}</p>
          <p>{`LAST NAME: ${user.last_name}`}</p>

        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
}

export default UserDetails;