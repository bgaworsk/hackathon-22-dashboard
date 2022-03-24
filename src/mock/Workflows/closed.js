import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import reviewedPublication from './reviewed-publication.svg'
import scheduledPublication from './scheduled-publication.svg'
import translation from './translation.svg'
import synch from './synch.svg'

const typeToSvg = {
  'Scheduled Publication': scheduledPublication,
  'Reviewed Publication': reviewedPublication,
  'Translation': translation,
  'Synchronization': synch
}

function createData(type, name, from) {
  return { type, name, from }
}

const Closed = () => {

  const rows = [
    createData('Scheduled Publication', 'Update Terms and Conditions', 'Teresa'),
    createData('Translation', 'Translate latest Calista changes', 'Rocky Roullier'),
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
                <img src={typeToSvg[row.type]} alt={`Type ${row.type}`} />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.from}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Closed