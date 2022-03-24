import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'

const ListAsTable = ({ rows }) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="td" scope="row">
                {row.type}
              </TableCell>
              <TableCell component="td" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.site}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListAsTable