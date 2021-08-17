import { useEffect } from "react";


// reusable component
import PeopleItem from "../../components/people-item/people-item";

// styled component
import { Label } from "../../shared-styles/typography";

// redux
import  {useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from "../../redux/reducer/userSlice";
import { ApiCore } from "../../services/api/core";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const People = () => {
    const { allUsers } = useSelector(state => state.user)
    const dispatch  = useDispatch()

    useEffect(() => {
        dispatch(fetchAllUsers())
    },   [])


    const makeFriendRequest = async (id,cb) => {
        
        cb('pending')
        const user = JSON.parse(localStorage.getItem('user'));
        const api = new ApiCore({ createOne: true});
        await api.createOne(`users/${id}/friends`, user.token);
        cb("success")

    }
    
    return ( 
        <div>
            <Label> <span><FontAwesomeIcon icon={faArrowLeft} style={{
                marginRight: '10px'
            }} /> Connect</span> </Label>
            {
                
                allUsers.map(el => <PeopleItem  handleClick={(cb) => makeFriendRequest(el._id, cb)} {...el} />)
            }
            
        </div>
     );
}
 
export default People;