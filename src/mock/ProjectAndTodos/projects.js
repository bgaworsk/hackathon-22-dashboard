import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'

function createData(name, site, todos) {
  return { name, site, todos }
}

const Projects = () => {

  const rows = [
    createData('Swatpants Product Launch', 'Calista', 24),
    createData('Vlog Story #13', 'Calista', 37),
    createData('Clean-up old content', 'SFRA', 24),
    createData('Update terms & conditions', 'Calista', 67),
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

export default Projects