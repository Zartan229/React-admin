import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import userList from './components/userList';
import { PostList, PostEdit, PostCreate } from "./components/posts";
import { UserShow } from './components/show';
import TestComposant  from './components/test';

export const App = () => 
  (<><Admin dataProvider={dataProvider}>
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  <Resource name="users" list={userList} show={UserShow} recordRepresentation="name" />

  </Admin>
    <TestComposant></TestComposant></>);
