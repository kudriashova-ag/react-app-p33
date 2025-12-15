import React, { useEffect, useRef, useState } from "react";
import { Link, useFetcher, useLoaderData, useLocation } from "react-router";

const SearchResults = () => {
  const initialData = useLoaderData();
  
  const [users, setUsers] = useState(initialData.items);

  const [page, setPage] = useState(2);
  const fetcher = useFetcher();

  const lastElementRef = useRef();

  // отрумуємо пошуковий запит
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const text = params.get("text");

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      if(fetcher.data.items.length > 0){
        setUsers([...users, ...fetcher.data.items]);
        setPage(page + 1);
      }
    }
  }, [fetcher.state, fetcher.data]);

  useEffect(() => {
    if (fetcher.state === "loading") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetcher.load(`/search?text=${text}&page=${page}`);
        } else {
          // console.log("not visible");
        }
      },
      {
        threshold: 0,
        rootMargin: "100px",
      }
    );

    observer.observe(lastElementRef.current);
  }, [page, text]);


  useEffect(() => {
    setUsers(initialData.items);
    setPage(2)
  }, [initialData]);


  return (
    <div>
      <h1>Search Results</h1>
      <div className="users-list">
        {users.map((user, index) => (
          <div
            key={user.id}
            ref={index === users.length - 1 ? lastElementRef : null}
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
