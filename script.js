class BangunDatar {
  constructor(sisi, tinggi, lebar, panjang, alas, jari) {
    this.sisi = sisi;
    this.tinggi = tinggi;
    this.lebar = lebar;
    this.panjang = panjang;
    this.alas = alas;
    this.jari = jari;
  }
  //Persegi
  persegiLuas() {
    let luas = this.sisi * this.sisi;
    return luas;
  }
  persegiKeliling() {
    let Kper = 4 * this.sisi;
    return Kper;
  }

  //Persegi panjang
  persegiPanjangLuas() {
    let lPanjang = this.lebar * this.panjang;
    return lPanjang;
  }
  persegiPanjangKeliling() {
    let KperP = 2 * (this.lebar + this.panjang);
    return KperP;
  }

  //Siku-Siku
  segitigaLuasSiku() {
    let Lsikusiku = (1 / 2) * this.tinggi * this.alas;
    return Lsikusiku;
  }
  segitigaKeliling() {
    let Ksikusiku = this.sisi + this.sisi + this.sisi;
    return Ksikusiku;
  }

  //Lingkaran
  lingkaranLuas() {
    let Lling = Math.PI * this.jari * this.jari;
    return Lling;
  }
  lingkaranKel() {
    let lingKel = 2 * Math.PI * this.jari;
    return lingKel;
  }
}

// class Volume extends BangunDatar {
//   constructor(sisi, panjang, lebar, tinggi, alas) {
//     super(sisi, panjang, lebar, tinggi, alas);
//   }
//   volKubus() {
//     let vol1 = this.sisi * this.sisi * this.sisi;
//     return vol1;
//   }
//   luasKubus() {
//     let luasK = 6 * this.sisi;
//     return luasK;
//   }
//   kelKubus() {
//     let kelKub = 12 * this.sisi;
//     return kelKub;
//   }
//   volBalok() {
//     let volBal = this.panjang * this.lebar * this.tinggi;
//     return volBal;
//   }
//   luasBalok() {
//     let luasBal =
//       2 *
//       (this.panjang * this.tinggi +
//         this.panjang * this.tinggi +
//         this.lebar * this.tinggi);
//     return luasBal;
//   }
//   kelBalok() {
//     let kelBal = 4 * (this.panjang + this.lebar + this.tinggi);
//     return kelBal;
//   }
// }

//Luas Persegi
const persegi1 = new BangunDatar(3, 3);
console.log("Luas Persegi: " + persegi1.persegiLuas());
//Keliling Persegi
const persegi2 = new BangunDatar(3, 3);
console.log("Kel Persegi: " + persegi2.persegiKeliling());

//Luas PersegiPanjang
const persegiPan1 = new BangunDatar(null, null, 4, 3);
console.log("Luas Persegi Panjang: " + persegiPan1.persegiPanjangLuas());
//Keliling PersegiPanjang
const persegiPan2 = new BangunDatar(null, null, 4, 3);
console.log("Kel  Persegi Panjang: " + persegiPan2.persegiPanjangKeliling());

//Luas Siku-Siku
const sikuSiku1 = new BangunDatar(null, 4, null, null, 3, null);
console.log("Luas Segitiga Siku2: " + sikuSiku1.segitigaLuasSiku());
//Keliling Siku-Siku
const sikuSiku2 = new BangunDatar(3, 3, 3);
console.log("Kel Segitiga Siku2: " + sikuSiku2.segitigaKeliling());

//Luas Lingkaran
const Lingkaran1 = new BangunDatar(null, null, null, null, null, 4, 3);
console.log("Luas Lingkaran: " + Lingkaran1.lingkaranLuas());
//Keliling Lingkaran
const Lingkaran2 = new BangunDatar(null, null, null, null, null, 4);
console.log("Kel Lingkaran: " + Lingkaran2.lingkaranKel());

// //Volume Kubus
// const volKub = new Volume(3, 3, 3);
// console.log(volKub.volKubus());
// //Luas Kubus
// const luasKub = new Volume(3, 3, 3);
// console.log(luasKub.luasKubus());
// //Keliling Kubus
// const kelKub = new Volume(3);
// console.log(kelKub.kelKubus());

// //Volume Balok
// const volBalk = new Volume(null, 3, 3, 3);
// console.log(volBalk.volBalok());
// //Luas Balok
// const luasBalk = new Volume(null, 3, 3, 3);
// console.log(luasBalk.luasBalok());
// //Keliling Balok
// const kelBalk = new Volume(null, 3, 3, 3);
// console.log(kelBalk.kelBalok());
