import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create, NumberInput, DateInput, ReferenceInput, SelectInput, ImageField } from "react-admin";

export const listProducts = (props) => (
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="discount" />
            <TextField source="price" />
            <TextField source="quantity" />
            <ImageField source="thumbnail" title="title" /> {/* Display image */}
            <TextField source="description" />
            <TextField source="title" />
            <TextField source="update_at" />
            <TextField source="create_at" />
            <TextField source="line.name" />
            <TextField source="deleted" />
            <EditButton />
        </Datagrid>
    </List>
);

export const editProducts = (props) => (
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>
            <DateInput source="create_at" />
            <NumberInput source="deleted" />
            <NumberInput source="discount" />
            <NumberInput source="price" />
            <NumberInput source="quantity" />
            <TextInput source="thumbnail" />
            <TextInput source="description" />
            <TextInput source="title" />
            <DateInput source="update_at" />
            <ReferenceInput label="Lines" source="line.id" reference="lines">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const createProducts = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <NumberInput source="price" />
            <NumberInput source="discount" />
            <NumberInput source="quantity" />
            <TextInput source="thumbnail" />
            <TextInput source="description" multiline fullWidth />
            <DateInput source="create_at" />
            <DateInput source="updated_at" />
            <NumberInput source="deleted" />
            <ReferenceInput label="Lines" source="line.id" reference="lines">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
