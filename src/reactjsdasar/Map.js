import React from 'react'

const makanan = [
  {
    nama: 'Soto',
    harga: 12000
  },
  {
    nama: 'Bakso',
    harga: 10000
  },
  {
    nama: 'Mie Ayam',
    harga: 7000
  },
  {
    nama: 'Nasi Goreng',
    harga: 15000
  },
];

// reduce
// menghitung total 4 item
const totalBayar = makanan.reduce((totalHarga, makan) => {
  return totalHarga + makan.harga
}, 0)


const Map = () => {
  return (
    <div>
      <h2>Map Sederhana</h2>
      <ul>
        {makanan.map((makan, index) => {
          return (
            <div>
              <li>{index + 1}. Makanan : {makan.nama} - Harga : Rp. {makan.harga}</li>
            </div>
          )
        }
        )}
      </ul>

      <h2>Map Filter Harga yang lebih dari 11.000</h2>
      <ul>
        {makanan
          .filter((makan) => makan.harga > 11000)
          .map((makan, index) => {
            return (
              <div>
                <li>{index + 1}. Makanan : {makan.nama} - Harga : Rp. {makan.harga}</li>
              </div>
            )
          }
          )}
      </ul>

      <h3>Total Harga : Rp. {totalBayar} </h3>
    </div>
  )
}

export default Map