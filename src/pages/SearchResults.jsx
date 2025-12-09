import React, { use } from 'react';
import { Link, useLoaderData } from 'react-router';

const SearchResults = () => {
    const users = useLoaderData();
    // переключення між сторінками + нескінчена прокрутка

    return (
      <div>
        <h1>Search Results</h1>
        <div className="users-list">
          {users.items.map((user) => (
            <div key={user.id}>
              <Link to={`/user/${user.login}`}>
                <img src={user.avatar_url} alt="" />
                <h4>{user.login}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}

export default SearchResults;
