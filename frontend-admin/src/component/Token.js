import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create, DateInput, ReferenceInput, SelectInput }


    from "react-admin";
export const listToken = (props) =>
(
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="token" />
            <TextField source="create_at" />
            <TextField source="user.fullname" />
            <EditButton />
        </Datagrid>
    </List>
);
export const editToken = (props) =>
(
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>

            <TextInput source="token" />
            <DateInput source="create_at" />
            <ReferenceInput label="Users"
                source="user.id"
                reference="users">
                <SelectInput optionText="fullname" />
            </ReferenceInput>

        </SimpleForm>
    </Edit>
);
export const createToken = (props) =>
(
    <Create {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>

            <TextInput source="token" />
            <DateInput source="create_at" />
            <ReferenceInput label="Users"
                source="user.id"
                reference="users">
                <SelectInput optionText="fullname" />
                </ReferenceInput>
        </SimpleForm>
    </Create>
);