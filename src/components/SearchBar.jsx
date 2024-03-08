import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Paper,IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <Paper
    component="form"
    onSubmit={()=>{}}
    sx={{borderRadius:20,
    border:'1px solid #e3e3e3',
    boxShadow:'none',
    mr:{sm:5},
    paddingX:'20px',
    display:'flex',
    }}>
        <input type="text" className='search-bar outline-none' placeholder='Search...' value="" onChange={()=>{}} />
        <IconButton type='submit' sx={{p:'5px' ,color:'red',}}>
            <SearchIcon />
        </IconButton>
    </Paper>
  )
}

export default SearchBar