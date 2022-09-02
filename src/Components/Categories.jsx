import {useState} from "react";

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    const onClickCategory = (i) => {
        setActiveIndex(i)
    }

    const elements = categories.map((category, index) => {
        return <li key={index} onClick={() => onClickCategory(index)} className={activeIndex === index ? "active" : ""}>{category}</li>
    });
    return (
        <div className="categories">
            <ul>
                {elements}
            </ul>
        </div>
    )
}

export default Categories;