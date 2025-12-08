import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    /* const [users, setUsers] = useState([]);

    useEffect(() => { 
        const getUsers = async () => { 
            const response = await axios.get("https://api.github.com/users");
            setUsers(response.data);
        }
        getUsers()
    }, []) */


    const users = useLoaderData();

    return (
      <div>
        <h1>Users</h1>
        <div className="users-list">
            {users.map((user) => (
              <div key={user.id}>
                    <img src={user.avatar_url} alt="" />
                    <h4>{user.login}</h4>
              </div>
            ))}
        </div>
      </div>
    );
}

export default Users;
