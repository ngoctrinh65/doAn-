import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create, NumberInput, DateInput, SelectInput, ReferenceInput, FunctionField }


    from "react-admin";
function formatPrice(priceInXu) {
    const dong = priceInXu * 1000; // Assuming 1 dong = 100 xu
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
}
export const listOrders = (props) =>
(
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="address" />
            <TextField source="email" />
            <TextField source="fullname" />
            <TextField source="note" />
            <TextField source="order_date" />
            <TextField source="phone_number" />
            <TextField source="status" />
            <FunctionField
                label="Price"
                render={record => formatPrice(record.total_money)}
            />

            <TextField source="user.fullname" />

            <EditButton />
        </Datagrid>
    </List>
);
export const editOrders = (props) =>
(
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>

            <TextInput source="address" />
            <TextInput source="email" />
            <TextInput source="fullname" />
            <TextInput source="note" />
            <DateInput source="order_date" />
            <NumberInput source="phone_number" />
            <TextInput source="status" />
            <NumberInput source="total_money" />
            <ReferenceInput label="User"
                source="user.id"
                reference="users">

                <SelectInput optionText="fullname" />
            </ReferenceInput>

        </SimpleForm>
    </Edit>
);
export const createOrders = (props) =>
(
    <Create {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>

            <TextInput source="address" />
            <TextInput source="email" />
            <TextInput source="fullname" />
            <TextInput source="note" />
            <DateInput source="order_date" />
            <NumberInput source="phone_number" />
            <TextInput source="status" />
            <SelectInput source="isHome" choices={[
                { id: 0, name: 'Chờ xác nhận', value: 0 },
                { id: 1, name: 'Đã xác nhận', value: 1 },
                { id: 2, name: 'Đang vận chuyển', value: 2 },
                { id: 3, name: 'Đã giao hàng', value: 3 },

            ]} defaultValue={0} />
            <NumberInput source="total_money" />
            <ReferenceInput label="User"
                source="user.id"
                reference="users">

                <SelectInput optionText="fullname" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);