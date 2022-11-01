import { useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

function Grid({ columns, data, }) {
    const [pageSize, setPageSize] = useState(5);
  
    return (
        <div className="mb-10">
            <Box>
                <Box
                    m="20px"
                    height="70vh"
                    sx={{
                        // '& .MuiDataGrid-root': { border: 'none' },
                        '& .MuiDataGrid-cell': { borderBottom: 'none' },
                        '& .MuiDataGrid-columnHeaders': { backgroundColor: 'white', borderBottom: 'none' },
                        '& .MuiDataGrid-virtualScroller': { backgroundColor: 'white' },
                        '& .MuiDataGrid-footerContainer': { backgroundColor: '#999', borderTop: 'none' },
                    }}
                >
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        rowsPerPageOptions={[5, 10, 15, 20]}
                    />
                </Box>
            </Box>
        </div>
    );
}

export default Grid;
