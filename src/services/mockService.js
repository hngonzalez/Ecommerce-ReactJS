import BNXTT from "../assets/img/boden+nxtruetemperament.webp";
import BPNX6EG from "../assets/img/bpnx6eg.webp"
import BBP4B from "../assets/img/bbp4b.webp"
import LTDLP from "../assets/img/glespaul.png"
import SE1FRS from "../assets/img/se1frs.png"
import SHHC1FRLH from "../assets/img/shhc1frlh.png"

const products = [
    {
        id: 1,
        imgUrl: BNXTT,
        brand: "Strandberg",
        model: "BODEN+ NX 7",
        color: "TRUE TEMPERAMENT GLACIER BLUE",
        description: "Aggressive and sophisticated, the Prog NX models are an extension of the Original model design with the new improved EGS Pro Rev7 Tremolo System and the smooth and slick-playing Richlite fretboard. With a more cutting tone than the Original, the Prog models are ideal for modern progressive and metal players using high-gain amplification systems. The versatile Suhr™ pickups and switching system provide a wide range of sounds for virtually any playing style and musical genre.",
        category: "Electrics",
        price: 16000,
        stock: 8,
    },
    {
        id: 2,
        imgUrl: SE1FRS,
        brand: "Schecter",
        model: "E-1 FR S Special Edition",
        color: "",
        description: "",
        category: "Electrics",
        price: 15000,
        stock: 10,
    },
    {
        id: 3,
        imgUrl: BPNX6EG,
        brand: "Strandberg",
        model: "BODEN PROG NX 6",
        color: "EARTH GREEN",
        description: "Aggressive and sophisticated, the Prog NX models are an extension of the Original model design with the new improved EGS Pro Rev7 Tremolo System and the smooth and slick-playing Richlite fretboard. With a more cutting tone than the Original, the Prog models are ideal for modern progressive and metal players using high-gain amplification systems. The versatile Suhr™ pickups and switching system provide a wide range of sounds for virtually any playing style and musical genre.",
        category: "Electrics",
        price: 18000,
        stock: 5,
    },
    {
        id: 4,
        imgUrl: LTDLP,
        brand: "Gibson",
        model: "Les Paul",
        color: "",
        description: "The new Les Paul™ Standard 50s Faded returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50s features a satin nitrocellulose lacquer finish that gives it the look and feel of a long-treasured musical companion. It has a solid mahogany body with an AA figured maple top and a rounded 50s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1 Tune-O-Matic bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and gold Top Hat knobs with dial pointers. The open-coil Burstbucker™ 1 (neck) and Burstbucker 2 (bridge) pickups are . . .",
        category: "Electrics",
        price: 17000,
        stock: 10,
    },
    {
        id: 5,
        imgUrl: SHHC1FRLH,
        brand: "Hellraiser Hybrid C-1 FR LH",
        model: "Schecter",
        color: "Trans Black Burst",
        description: "The new Les Paul™ Standard 50s Faded returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard 50s features a satin nitrocellulose lacquer finish that gives it the look and feel of a long-treasured musical companion. It has a solid mahogany body with an AA figured maple top and a rounded 50s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1 Tune-O-Matic bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and gold Top Hat knobs with dial pointers. The open-coil Burstbucker™ 1 (neck) and Burstbucker 2 (bridge) pickups are . . .",
        category: "Electrics",
        price: 17000,
        stock: 10,
    },
    {
        id: 6,
        imgUrl: BBP4B,
        brand: "Strandberg",
        model: "BODEN BASS PROG 4",
        color: "BROWN",
        description: "The Boden Bass Prog model was developed for bass players who seek a more modern and aggressive sound that can be fine-tuned with the utmost precision. Featuring a lightweight chambered Swamp Ash body with solid Flame Maple top and Roasted Maple neck with Ebony fretboard, the natural acoustic sound is balanced with plenty of girth but with a bright cutting edge when needed with the bass’s onboard preamp equalization well as the controls on the amplifier. The Ebony fretboard is slick and fast to play, while also providing a lot of highs that help you cut through the mix.",
        category: "Basses",
        price: 18000,
        stock: 5,
    }
];

const getAllProducts = () => {
    return (
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 1800);
      })
    );
  };
  
const getProduct = (idSelected) => {
    return new Promise((resolve, reject) => {
        const reqProd = products.find((item) => item.id === Number(idSelected));
        setTimeout(() => {
            reqProd ? resolve(reqProd) : reject("No se encontró");
        }, 1000);
    });
};

const getProductByCategory = (ItemCategory) => {
    return new Promise((resolve, reject) => {
        let reqProd = products.filter(item => item.category.toLocaleLowerCase() === ItemCategory.toLocaleLowerCase());
        setTimeout(() => {
        reqProd ? resolve(reqProd) : reject("La categoria no existe");
        }, 1000);
    })
}


export { getProduct, getProductByCategory };
export default getAllProducts;