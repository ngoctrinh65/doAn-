import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, Create, NumberInput, ReferenceInput, SelectInput } from "react-admin";
export const listCart = (props) =>
(
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="user.fullname" />
            <EditButton />
        </Datagrid>
    </List>
);
export const editCart = (props) =>
(
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>
            <ReferenceInput label="User"
                source="user.id"
                reference="users">
                <SelectInput optionText="fullname" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
export const createCart = (props) =>
(
    <Create {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>
            <ReferenceInput label="User"
                source="user.id"
                reference="users">
                <SelectInput optionText="fullname" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);