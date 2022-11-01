import React from 'react';
// import {
//     GridComponent,
//     ColumnsDirective,
//     ColumnDirective,
//     Resize,
//     Sort,
//     ContextMenu,
//     Filter,
//     Page,
//     ExcelExport,
//     PdfExport,
//     Edit,
//     Inject,
// } from '@syncfusion/ej2-react-grids';
import { Box, Typography } from '@mui/material';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';

// import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import Grid from '../components/Charts/Grid';

const Orders = () => {
    const editing = { allowDeleting: false, allowEditing: false };

    const mockDataTeam = [
        {
            id: 1,
            name: 'Jon Snow',
            email: 'jonsnow@gmail.com',
            age: 35,
            phone: '(665)121-5454',
            access: 'admin',
        },
        {
            id: 2,
            name: 'Cersei Lannister',
            email: 'cerseilannister@gmail.com',
            age: 42,
            phone: '(421)314-2288',
            access: 'manager',
        },
        {
            id: 3,
            name: 'Jaime Lannister',
            email: 'jaimelannister@gmail.com',
            age: 45,
            phone: '(422)982-6739',
            access: 'user',
        },
        {
            id: 4,
            name: 'Anya Stark',
            email: 'anyastark@gmail.com',
            age: 16,
            phone: '(921)425-6742',
            access: 'admin',
        },
        {
            id: 5,
            name: 'Daenerys Targaryen',
            email: 'daenerystargaryen@gmail.com',
            age: 31,
            phone: '(421)445-1189',
            access: 'user',
        },
        {
            id: 6,
            name: 'Ever Melisandre',
            email: 'evermelisandre@gmail.com',
            age: 150,
            phone: '(232)545-6483',
            access: 'manager',
        },
        {
            id: 7,
            name: 'Ferrara Clifford',
            email: 'ferraraclifford@gmail.com',
            age: 44,
            phone: '(543)124-0123',
            access: 'user',
        },
        {
            id: 8,
            name: 'Rossini Frances',
            email: 'rossinifrances@gmail.com',
            age: 36,
            phone: '(222)444-5555',
            access: 'user',
        },
        {
            id: 9,
            name: 'Harvey Roxie',
            email: 'harveyroxie@gmail.com',
            age: 65,
            phone: '(444)555-6239',
            access: 'admin',
        },
    ];

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'NAME', flex: 1, cellClassName: 'name-column--cell' },
        { field: 'age', headerName: 'AGE', type: 'number', headerAlign: 'left', align: 'left' },
        { field: 'phone', headerName: 'PHONE NUMBER', flex: 1 },
        { field: 'email', headerName: 'EMAIL', flex: 1 },
        {
            field: 'access',
            headerName: 'Acess Level',
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        width="100%"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={access === 'admin' ? '#3cda61' : '#8d3333'}
                        borderRadius="4px"
                        overflow='hidden'
                    >
                        {access === 'admin' && <AdminPanelSettingsOutlined />}
                        {access === 'manager' && <SecurityOutlined />}
                        {access === 'user' && <LockOpenOutlined />}
                        <Typography color="white" ml="5px">
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];


    return (
        <div className='m-2 md:m-10 mt-24 p-2 lg:p-10 bg-white rounded-3xl' >
            <Header category="Page" title="Orders" />
            <Grid columns={columns} data={mockDataTeam}/>
        </div>
        // <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        //     <GridComponent
        //         id="gridcomp"
        //         dataSource={ordersData}
        //         allowPaging
        //         allowSorting
        //         allowExcelExport
        //         allowPdfExport
        //         contextMenuItems={contextMenuItems}
        //         editSettings={editing}
        //     >
        //         <ColumnsDirective>
        //             {ordersGrid.map((item, index) => (
        //                 <ColumnDirective key={index} {...item} />
        //             ))}
        //         </ColumnsDirective>
        //         <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
        //     </GridComponent>
        // </div>
    );
};
export default Orders;
