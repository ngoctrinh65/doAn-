import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create, ReferenceInput, SelectInput }


    from "react-admin";
export const listGallery = (props) =>
(
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="thumbnail" />
            <TextField source="product.title"/>
            <EditButton />
        </Datagrid>
    </List>
);
export const editGallery = (props) =>
(
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>

            <TextInput source="thumbnail" />
            <ReferenceInput label="Product"
                source="product.id"
                reference="products">

                <SelectInput optionText="title" />
                </ReferenceInput>
        </SimpleForm>
    </Edit>
);
export const createGallery = (props) =>
(
    <Create {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>

            <TextInput source="thumbnail" />
            <ReferenceInput label="Product"
                source="product.id"
                reference="products">

                <SelectInput optionText="title" />
                </ReferenceInput>
         
        </SimpleForm>
    </Create>
);