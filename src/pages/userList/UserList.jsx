import React, { useState } from 'react'
import './userList.css'
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRow } from '../../dummyData';
import { Link } from 'react-router-dom';


const UserList = () => {
    const [data, setData] = useState(userRow)

    const handleDelete =(id)=>{
        setData(data.filter(item=> item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'user', headerName: 'User', width: 160, renderCell:(params)=>{
            return(
                <div className='userList-user'>
                    <img src={params.row.avatar} alt="" className='userList-userImg' />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 160 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 120,
          },
        {
            field:"action",headerName:'Action',
            width:150,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={'/user/'+ params.row.id}>
                    <button className='UserList-edit'>Edit</button></Link>
                    <DeleteOutline className='UserList-delete' onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];
      
      
  return (
    <div className="userList">
        <div className='userList-table'>
        <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
        </div>
    </div>
  )
}

export default UserList