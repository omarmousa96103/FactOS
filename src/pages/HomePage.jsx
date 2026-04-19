import NavBar from '../components/NavBar/NavBar'
import CategoryTabs from '../components/HomePageComponents/CategoryTab'
import TrendingStrip from '../components/HomePageComponents/TrendingStrip'
import Sidebar from '../components/HomePageComponents/Sidebar'
import HeroCard from '../components/HomePageComponents/HeroCard'
import NewsGrid from '../components/HomePageComponents/NewsGrid'
import { mockNews } from './data/mockNews'
import './HomePage.css'

function HomePage() {
    const hero = mockNews.find((n) => n.featured)
    const grid = mockNews.filter((n) => !n.featured)

    return (
        <>
            <NavBar />
            <CategoryTabs />
            <TrendingStrip />
            <div className="hp-body">
                <Sidebar />
                <main className="hp-main">
                    <HeroCard article={hero} />
                    <NewsGrid articles={grid} />
                </main>
            </div>
        </>
    )
}

export default HomePage