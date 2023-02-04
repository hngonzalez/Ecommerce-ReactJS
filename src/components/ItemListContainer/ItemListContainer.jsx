import { useEffect, useState } from "react";
import NavBar from '../NavBar/NavBar';
import CardItem from '../CardItem/CardItem'
import getAllProducts, { getProduct, getProductByCategory } from "../../services/mockService";
import { exportArray, getProductsByCategory } from "../../services/firebase"
import { useParams } from "react-router-dom";
import mainStyle from "./itemlistcontainer.module.css";

function ItemListContainer(props) {
    const [products, setProduct] = useState([]);

    let ItemCategory = useParams().ItemCategory;

    useEffect(() => {
        /* getProductByCategory(ItemCategory) */
        getProductsByCategory(ItemCategory)
        .then((response) => 
        {
            console.log(response)
            setProduct(response)
        }
            
        ).catch((e) => 
            console.log(e)
        );
        
    }, [ItemCategory]);
    
    return (
        <div>
            <NavBar />
            {/* <button onClick={exportArray}>Exportar productso a DB</button> */}
            <main className={mainStyle.main}>
                <div className={mainStyle.container}>
                    {props.text}
                    {
                        products.map((element) => {
                        const stockVerifier = element.stock < 1 ? "not available" : element.stock;
                            return (
                                <CardItem
                                    allItems={element}
                                    id={element.id}
                                    imgUrl={element.imgUrl}
                                    key={element.id}
                                    brand={element.brand}
                                    model={element.model}
                                    description={element.description}
                                    category={element.category}
                                    price={element.price}
                                    stockInitial={stockVerifier}
                                ></CardItem>
                            );
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default ItemListContainer;