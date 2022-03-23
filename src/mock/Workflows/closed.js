import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'

function createData(type, name, from, state) {
  return { type, name, from, state }
}

const Closed = () => {

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  ];


  return (
    <TableContainer>
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.from}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Closed