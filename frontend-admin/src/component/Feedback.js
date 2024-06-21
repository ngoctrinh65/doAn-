import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create, NumberInput, DateInput }


    from "react-admin";
export const listFeedback = (props) =>
(
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="create_at" />
            <TextField source="email" />
            <TextField source="firstname" />
            <TextField source="lastname" />
            <TextField source="note" />
            <TextField source="phone_number" />
            <TextField source="status" />
            <TextField source="subject_name" />
            <TextField source="update_at" />
            <EditButton />
        </Datagrid>
    </List>
);
export const editFeedback = (props) =>
(
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>

 
            <DateInput source="create_at" />
            <TextInput source="email" />
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="note" />
            <NumberInput source="phone_number" />
            <TextInput source="status" />
            <TextInput source="subject_name" />
            <DateInput source="update_at" />
        </SimpleForm>
    </Edit>
);
export const createFeedback = (props) =>
(
    <Create {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>

      
        <DateInput source="create_at" />
            <TextInput source="email" />
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="note" />
            <NumberInput source="phone_number" />
            <TextInput source="status" />
            <TextInput source="subject_name" />
            <DateInput source="update_at" />
        </SimpleForm>
    </Create>
);