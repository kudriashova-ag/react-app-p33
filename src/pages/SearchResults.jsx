import React, { use, useEffect, useRef, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router";

const SearchResults = () => {
  const users = useLoaderData();
  const lastElementRef = useRef();
  const [page, setPage] = useState(2);
  const location = useLocation();

  // отрумуємо пошуковий запит
  const params = new URLSearchParams(location.search);
  const text = params.get("text");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("visible");
          setPage(page + 1);
        } else {
          console.log("not visible");
        }
      },
      {
        threshold: 0,
        rootMargin: "100px",
      }
    );

    observer.observe(lastElementRef.current);
  }, []);

  // при прокрутці до останнього юзера - новий запит
  // axios.get(`https://api.github.com/search/users?q=${text}+in:login&per_page=10&page=2`);

  return (
    <div>
      <h1>Search Results</h1>
      <div className="users-list">
        {users.items.map((user, index) => (
          <div
            key={user.id}
            ref={index === users.items.length - 1 ? lastElementRef : null}
          >
            <Link to={`/user/${user.login}`}>
              <img src={user.avatar_url} alt="" />
              <h4>{user.login}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
