import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../../redux/reducer/postSlice";
import Post from './../Post/Post'

const PostPreview = () => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.user);
    const { posts } = useSelector(state => state.post);

    useEffect(() => {
        if (!Object.keys(currentUser).length) return;
        dispatch(fetchAllPosts())
    }, [currentUser])
    return (
        <>

            {
                posts.map(el => <Post {...el} />)
            }


        </>
    );
}

export default PostPreview;