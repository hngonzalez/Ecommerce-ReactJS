import { useEffect, useState } from "react";
import NavBar from '../NavBar/NavBar';
import CardItem from '../CardItem/CardItem'
import getAllProducts, { getProduct, getProductByCategory } from "../../services/mockService";
import { useParams } from "react-router-dom";
import mainStyle from "./itemlistcontainer.module.css";

function ItemListContainer(props) {
    const [products, setProduct] = useState([]);

    let ItemCategory = useParams().ItemCategory;

    useEffect(() => {
        getProductByCategory(ItemCategory)
        .then((response) => 
            setProduct(response)
        ).catch((e) => 
            console.log(e)
        );
        
    }, [ItemCategory]);

    return (
        <>
            <NavBar />
            <main className={mainStyle.container}>
                
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
            </main>
        </>
    )
}

export default ItemListContainer;