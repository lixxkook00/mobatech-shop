import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import './style.scss'

function BasicPagination() {
  let x = 1
  window.innerWidth < 1024 && (x = 0)
  return (
    <div className="container d-flex justify-content-center c-container">
      <Stack spacing={2}>
        <Pagination
          count={10}
          siblingCount={x}
          variant="outlined"
          color="primary"
          size="large"
        />
      </Stack>
    </div>
  )
}

export default BasicPagination
