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

function createData(type, name, from, state) {
  return { type, name, from, state }
}

const Open = () => {

  const rows = [
    createData('Scheduled Publication', 'New Year´s campaign ', 'Jacques Fernet', 'Needs Review'),
    createData('Reviewed Publication', 'Wintersale 2021 #3', 'Rocky Roullier', 'Needs Review'),
    createData('Translation', 'Spring Collection 2021 ', 'Rocky Roullier', 'Needs Translation'),
    createData('Translation', 'Wintersale 2021 #4', 'Caroline Smith', 'Needs Translation'),
    createData('Synchronization', 'Spring Collection shoes: Vegan chelsea boots', 'Rocky Roullier', 'Needs Review'),
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
              <TableCell component="td" scope="row">
                <img src={typeToSvg[row.type]} alt={`Type ${row.type}`} />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.from}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Open