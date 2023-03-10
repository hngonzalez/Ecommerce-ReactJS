import NavBar from '../NavBar/NavBar';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/mockService";
import { getProductById } from '../../services/firebase';

function ItemDetailContainer() {
    const notFound = {
        imgUrl:
          "https://www.zeldadungeon.net/wp-content/uploads/2013/10/error3.jpg",
        title: "No existe ese producto",
    }
    const [detail, setDetail] = useState([]);
    let params = useParams();
  
    useEffect(() => {
        getProductById(params.itemId)
        .then((resp) => {
            setDetail(resp)
        }).catch((err) => 
            setDetail(notFound)
        )
    }, [ ]);
  
    return (
        <div>
            <NavBar />
            <div>
                <h1>{detail.brand} {detail.model}</h1>
            </div>
        </div>
    )
}

export default ItemDetailContainer