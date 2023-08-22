import About from "../../components/About/About";
import BestSellers from "../../components/Bestsellers/BestSellers";
import Categories from "../../components/Categories/Categories";
import Slider from "../../components/Slider/Slider";

export const Home = () => {
    return(
        <>
            <Slider/>
            <BestSellers/>
            <About/>
            <Categories/>
        </>
    )
}