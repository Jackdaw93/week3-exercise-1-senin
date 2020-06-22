class BangunDatar {
  constructor(sisi, tinggi, lebar, panjang, alas, jari) {
    this.lebar = lebar;
    this.panjang = panjang;
    this.sisi = sisi;
    this.tinggi = tinggi;
    this.alas = alas;
    this.jari = jari;
  }
  persegiLuas() {
    let luas = this.sisi * this.sisi;
    return luas;
  }
  persegiKeliling() {
    let Kper = 4 * this.sisi;
    return Kper;
  }
  persegiPanjangLuas() {
    let lPanjang = this.panjang * this.lebar;
    return lPanjang;
  }
  persegiPanjangKeliling() {
    let KperP = 2 * (this.panjang + this.lebar);
    return KperP;
  }

  segitigaSikuSiku() {
    let Lsikusiku = (1 / 2) * this.alas * this.tinggi;
    return Lsikusiku;
  }
  segitigaKeliling() {
    let Ksikusiku = this.sisi + this.sisi + this.sisi;
    return Ksikusiku;
  }
  lingkarangLuas() {
    const asli = 3.14;
    let Lling = asli * this.jari * this.jari;
    return Lling;
  }
  lingkarangKel() {
    const asli1 = 3.14;
    let lingKel = 2 * asli1 * this.jari;
    return lingKel;
  }
}
// Luas Persegi
const persegi1 = new BangunDatar(3, 3);
console.log(persegi1.persegiLuas());
//Keliling Persegi
const persegi1 = new BangunDatar(3, 3);
console.log(persegi1.persegiKeliling());

//Luas PersegiPanjang
const persegiP1 = new BangunDatar(3, 3);
console.log(persegiP1.persegiPanjangLuas());
//Keliling PersegiPanjang
const persegiP2 = new BangunDatar(3, 3);
console.log(persegiP2.persegiPanjangKeliling());

//Luas PersegiPanjang
const persegiP1 = new BangunDatar(3, 3);
console.log(persegiP1.persegiPanjangLuas());
//Keliling PersegiPanjang
const persegiP2 = new BangunDatar(3, 3);
console.log(persegiP2.persegiPanjangKeliling());
