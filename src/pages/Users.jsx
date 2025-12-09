import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';

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
                    <Link to={`/user/${user.login}`}>
                        <img src={user.avatar_url} alt="" />
                        <h4>{user.login}</h4>
                    </Link>
              </div>
            ))}
        </div>
            
        <Link to={`/users/${users[users.length-1].id}`}>Next</Link>
      </div>
    );
}

export default Users;
