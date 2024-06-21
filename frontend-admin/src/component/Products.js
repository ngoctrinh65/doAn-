import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create, NumberInput, DateInput, ReferenceInput, SelectInput, ImageField, DateField, FunctionField } from "react-admin";
function formatPrice(priceInXu) {
    const dong = priceInXu * 1000; // Assuming 1 dong = 100 xu
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
}
export const listProducts = (props) => (
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="discount" />
            <FunctionField
                label="Price"
                render={record => formatPrice(record.price)}
            />            
            <TextField source="quantity" />
            <ImageField source="thumbnail" title="title" /> {/* Display image */}
            <TextField source="description" />
            <TextField source="title" />
            <DateField source="updated_at" showTime={false} options={{ day: 'numeric', month: 'long', year: 'numeric' }} />
            <DateField source="created_at" showTime={false} options={{ day: 'numeric', month: 'long', year: 'numeric' }} />
            <TextField source="line.name" />
            <EditButton />
        </Datagrid>
    </List>
);

export const editProducts = (props) => (
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>
            <DateInput source="create_at" />
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
            <TextInput source="description" />
            <DateInput source="create_at" />
            <DateInput source="updated_at" />
            <ReferenceInput label="Lines" source="line.id" reference="lines">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
