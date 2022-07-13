import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

function KPIDisplay({target}) {
    const columns  = [
        { field: 'id', headerName: 'STT', width: 70 },
        { field: 'title', headerName: 'Tên mục tiêu', width: 300 },
        { field: 'measurement', headerName: 'Tiêu chí đánh giá', width: 400 },
        {
          field: 'weight',
          headerName: 'Trọng số đánh giá',
          type: 'number',
          width: 150,
        }
      ];
  return (
    <DataGrid
        autoHeight 
        rows={target}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
    />
  )
}

export default KPIDisplay