import { useLoaderData, useParams } from 'react-router';

const User = () => {
    const user = useLoaderData();
    const { login } = useParams();

    return (
        <div>
            <h1>User {user.name} ({ login })</h1>
            <img src={user.avatar_url} alt="" />
            <a href={user.blog} target='_blank' rel='noreferrer'>{user.blog}</a>
        </div>
    );
}

export default User;
