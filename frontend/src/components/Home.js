import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css'
function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://reqres.in/api/users?page=2');
                setUsers(response.data.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);
    console.log(users);


    return (
        <div>
            <h1>Home</h1>
            <div class="all">
                <div class="cards">
                    {users.map((obj) => (
                        <div key={obj.id}>
                            <div>
                                <img className="user-avatar" src={obj.avatar} alt="User Avatar" />
                            </div>
                            <div class="card shadow-1" >

                                <div>id: {obj.id}</div>
                                <div>email:{obj.email} </div>
                                <div>first name: {obj.first_name}</div>
                                <div>last name: {obj.last_name}</div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Home;
