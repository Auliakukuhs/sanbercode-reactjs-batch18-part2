import React from "react";
import { convertKilogram, capitalize } from '../utils/helpers'

function TableData(props){
  const { lists } = props;
  return lists.map((list, index) => {
    const { nama, harga, berat } = list;
    return (
       <tr key={index}>
          <td>{nama}</td>
          <td>{harga}</td>
          <td>{convertKilogram(berat)}</td>
       </tr>
    )
 })
}

function TableHeader(props){
  const { headers } = props;
  let headerData = Object.keys(headers[0]);
  return headerData.map((code, index) => {
    return <th key={index}>{capitalize(code)}</th>
  })
}

class Table extends React.Component {
  render(){
    let dataHargaBuah = [
      {nama: "Semangka", harga: 10000, berat: 1000},
      {nama: "Anggur", harga: 40000, berat: 500},
      {nama: "Strawberry", harga: 30000, berat: 400},
      {nama: "Jeruk", harga: 30000, berat: 1000},
      {nama: "Mangga", harga: 30000, berat: 500}
    ];

    return(
      <div className="tableWrapper">
        <h1 className="title">Tabel Harga Buah</h1>
        <table id='lists'>
          <tbody>
            <tr><TableHeader headers={dataHargaBuah} /></tr>
            <TableData lists={dataHargaBuah} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;