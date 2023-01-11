import mainStyle from "./homePage.module.css";
import { Link } from 'react-router-dom';

function Home() {

    return (
        <main className={mainStyle.main}>
            <div className={mainStyle.description}>
                <h1>Feel<span>.</span> </h1>
                <h5><span>GET</span> LOST IN THE MUSIC</h5>
                <Link to='/category/electrics'>
                    <button> VIEW PRODUCTS </button>
                </Link>
            </div>
        </main>
    )
}

export default Home;