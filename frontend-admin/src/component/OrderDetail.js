import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, Create, NumberInput, ReferenceInput, SelectInput, FunctionField }


    from "react-admin";
function formatPrice(priceInXu) {
    const dong = priceInXu * 1000; // Assuming 1 dong = 100 xu
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
}
export const listOrderDetail = (props) =>
(
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="quantity" />
            <FunctionField
                label="Price"
                render={record => formatPrice(record.price)}
            />              
            <TextField source="product.title" />
            <TextField source="order.fullname" />
            <EditButton />
        </Datagrid>
    </List>
);
export const editOrderDetail = (props) =>
(
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>

            <NumberInput source="quantity" />
            <NumberInput source="price" />
            <ReferenceInput label="Orders"
                source="order.id"
                reference="orders">

                <SelectInput optionText="fullname" />
            </ReferenceInput>
            <ReferenceInput label="Products"
                source="product.id"
                reference="products">

                <SelectInput optionText="title" />

            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
export const createOrderDetail = (props) =>
(
    <Create {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>

            <NumberInput source="quantity" />
            <NumberInput source="price" />
            <ReferenceInput label="Orders"
                source="order.id"
                reference="orders">
                <SelectInput optionText="fullname" />
            </ReferenceInput>
            <ReferenceInput label="Products"
                source="product.id"
                reference="products">
                <SelectInput optionText="title" />

            </ReferenceInput>
        </SimpleForm>
    </Create>
);