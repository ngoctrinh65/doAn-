import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create, SelectInput, ReferenceInput, }


    from "react-admin";
export const listLines = (props) =>
(
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="isHome" />
            <TextField source="category.name" />
            <EditButton />
        </Datagrid>
    </List>
);
export const editLines = (props) =>
(
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <SelectInput source="isHome" choices={[
                { id: 1, name: 'Hiển thị ở trang chủ', value: 1 },

                { id: 0, name: 'Ẩn khỏi trang chủ', value: 0 },
            ]} defaultValue={0} />
            <ReferenceInput label="Category"
                source="category.id"
                reference="categories">

                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
export const createLines = (props) =>
(
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <SelectInput source="isHome" choices={[
                { id: 1, name: 'Hiển thị ở trang chủ', value: 1 },
                { id: 0, name: 'Ẩn khỏi trang chủ', value: 0 },
            ]} defaultValue={0} />
            <ReferenceInput
                label="Category"
                source="category.id"
                reference="categories"
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);