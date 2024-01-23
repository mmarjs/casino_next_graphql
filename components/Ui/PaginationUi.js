import React, {useEffect, useState} from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import { useRouter } from 'next/router';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  link:{
    textDecoration:"none"
  }
}));

export default function PaginationUi(props) {
  const classes = useStyles();
  const router = useRouter();
  const [page, setPage] = React.useState(router.query.page!==undefined?parseInt(router.query.page):1);

  const { pathname, totalItems, pageSize, size } = props;

  const [queryParams, setQueryParams] = useState("")

  let totalPages = (parseInt(totalItems/pageSize))
  const remainder = totalItems%pageSize

  if(remainder > 0){
    totalPages = totalPages + 1
  }
  
  const handleChange = (event, value) => {
    setPage(value)
    router.push({
        pathname: pathname,
        query: { ...router.query, page: value }
      })
  };

  useEffect(()=>{
    if(page){
      let newQuery = {...router.query}
      delete newQuery.page
      let queryParams = new URLSearchParams({...newQuery}).toString();
      setQueryParams(queryParams)
    }
  },[page])
  

  return (
    totalPages > 1 &&
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" className={classes.root}>
      <Pagination 
        color="primary" 
        count={totalPages} 
        page={page} 
        onChange={handleChange}
        size={size?size:"large"} 
        renderItem={(item) => {
          return(
            <a className={classes.link} href={`${pathname}/?${queryParams}&page=${item.page}`}>
              <PaginationItem {...item} />
            </a>
          )
        }}
      />
    </Box>
  );
}