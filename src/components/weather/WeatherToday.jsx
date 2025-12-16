import {  useSelector } from "react-redux";

const WeatherToday = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      {posts.data.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherToday;
