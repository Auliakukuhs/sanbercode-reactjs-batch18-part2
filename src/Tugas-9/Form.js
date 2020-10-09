import React from "react";

class Form extends React.Component {
  render(){
    return(
      <div className="container">
      <h1 className="title">Form Pembelian Buah</h1>
      <div className="nameWrapper">
        <label>Nama Pelanggan</label>
        <input type="text" />
      </div>
      <div className="listWrapper">
        <div className="listTitle">
          <span>Daftar Item</span>
        </div>
        <div className="listContent">
          <input type="checkbox" name="semangka" value="semangka" />
          <label for="vehicle1">semangka</label><br/>
          <input type="checkbox" name="jeruk" value="jeruk" />
          <label for="jeruk">Jeruk</label><br/>
          <input type="checkbox" name="nanas" value="nanas" />
          <label for="nanas">Nanas</label><br/>
          <input type="checkbox" name="salak" value="salak" />
          <label for="salak">Salak</label><br/>
          <input type="checkbox" name="anggur" value="anggur" />
          <label for="anggur">Anggur</label><br/>
        </div>
      </div>
      <button className="submit" type="submit">Kirim</button>
    </div>
    );
  }
}

export default Form;