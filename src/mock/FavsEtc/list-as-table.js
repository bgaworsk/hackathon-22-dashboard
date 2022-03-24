import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import articleSvg from './article.svg'
import pictureSvg from './picture.svg'
import teaserSvg from './teaser.svg'
import searchSvg from './search.svg'

const typeAsSvg = {
  'Article': articleSvg,
  'Picture': pictureSvg,
  'Teaser': teaserSvg,
  'Search': searchSvg
}

const ListAsTable = ({ rows }) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
            >
              <TableCell component="td" scope="row">
                <img src={typeAsSvg[row.type]} alt={`Type ${row.type}`} style={{ width: 16, height: 16 }}/>
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