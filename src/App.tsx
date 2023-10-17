import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import userList from './components/userList';
import { PostList, PostEdit } from "./components/posts";
import { UserShow } from './components/show';


export const App = () => 
  (<Admin dataProvider={dataProvider}>
  <Resource name="posts" list={PostList} edit={PostEdit} />
  <Resource name="users" list={userList} show={UserShow} recordRepresentation="name" />
  
  </Admin>);
