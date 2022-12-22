import mainStyle from "./itemlistcontainer.module.css";

function ItemListContainer(props) {

    return (
        <main className={mainStyle.main}>
            {props.text}
        </main>
    )
}

export default ItemListContainer;