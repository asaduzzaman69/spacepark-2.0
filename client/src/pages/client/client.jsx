import Header from "../../components/header/Header";
import LeftNav from "../../components/navbar/LeftNav";
import RightNav from "../../components/navbar/RightNav";
import Mainlayout from "../../Layout/MainLayout";
import { ClientContainer, ClientContent } from "./client.styled";
import { Route, Switch } from "react-router-dom";
import Homepage from "../homepage/homepage";
import People from "../People/People";

const Client = () => {
/*   const { isPostModalOpen } = useSelector(state => state.post)
  const dispatch = useDispatch() */

  return (

    <ClientContainer>
      <ClientContent>
        <Header />
        <Mainlayout
          left={<LeftNav />}
          right={<RightNav />}
          middle={
            <Switch>
            <Route exact path='/client' component={Homepage}  />
            <Route exact path='/client/people' component={People}  />
            </Switch>
          }
        />

      </ClientContent>
    </ClientContainer>
  );
}

export default Client;