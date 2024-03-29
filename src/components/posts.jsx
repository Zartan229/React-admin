// in src/posts.tsx
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Create,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
    useRecordContext,
} from "react-admin";

const PostTitle = () => {
      const record = useRecordContext();
      return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };

export const PostList = () => (
    <List>
   <Datagrid>
     <TextField source="id" />
            <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5} />
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
      <Create>
        <SimpleForm>
          <ReferenceInput source="userId" reference="users" />
          <TextInput source="title" />
          <TextInput source="body" multiline rows={5} />
        </SimpleForm>
      </Create>
    );