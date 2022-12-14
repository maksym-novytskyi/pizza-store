import './scss/app.scss'
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import PizzaBlock from "./Components/PizzaBlock/PizzaBlock";

import {useEffect, useState} from "react";
import Skeleton from "./Components/PizzaBlock/Skeleton";

function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://631242feb466aa9b03875d19.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                console.log(json);
                setItems(json);
                setIsLoading(false)
            })
    }, [])

    return (<div id="root">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories/>
                            <Sort/>
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {isLoading
                                ? [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
                                : items.map((p, i) => <PizzaBlock key={i} pizzaData={p}/>)
                            }
                        </div>
                        <ul className="Pagination_root__uwB0O">
                            <li className="previous disabled">
                                <a className=" " tabIndex="-1" role="button"
                                   aria-disabled="true"
                                   aria-label="Previous page" rel="prev">&lt;</a>
                            </li>
                            <li className="selected">
                                <a rel="canonical" role="button" tabIndex="-1"
                                   aria-label="Page 1 is your current page"
                                   aria-current="page">1</a>
                            </li>
                            <li><a rel="next" role="button" tabIndex="0" aria-label="Page 2">2</a></li>
                            <li><a role="button" tabIndex="0" aria-label="Page 3">3</a></li>
                            <li className="next"><a className="" tabIndex="0" role="button" aria-disabled="false"
                                                    aria-label="Next page" rel="next">&gt;</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
