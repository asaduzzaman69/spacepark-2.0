import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../../redux/reducer/postSlice";
import Post from './../Post/Post'

const PostPreview = () => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.user);
    const { posts } = useSelector(state => state.post);
    console.log(posts)

    useEffect(() => {
        if(!Object.keys(currentUser).length) return;
        dispatch(fetchAllPosts())
    }, [currentUser])
    return ( 
        <> 

{
            posts.map(el => <Post />)
        } 
        

        </>
     );
}
 
export default PostPreview;