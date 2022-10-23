import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Badges from '../components/Badges'
import './Home.css'
import Cards from '../components/Cards/Cards'
import { homes } from '../assets/homes'
import { useSearchParams } from 'react-router-dom'
import CustomMap from '../components/Map/GoogleMapWidget'
import { IoMap } from 'react-icons/io5'
import { FaListUl } from 'react-icons/fa'

const Home = () => {

    const [data, setData] = useState([])

    let [searchParams, setSearchParams] = useSearchParams();

    const [selection, setselection] = useState(searchParams.get('category') || 'OMG!')

    useEffect(() => {
        const data = homes.filter((home) => home.category === selection)
        setData(data)
    }, [])

    const filterData = (e) => {
        setselection(e.text)
        const data = homes.filter((home) => home.category === e.text)
        setData(data)
        let params = (e.text);
        setSearchParams({ category: params });
    }

    const [showMap, setshowMap] = useState(false)

    return (
        <section className='home'>
            <div className="header">
                <Header />
            </div>
            <div className='main' style={{ paddingTop: showMap ? "0" : "100px" }}>
                <div className="sticky_header">
                    <Badges
                        active={selection}
                        onClick={(e) => filterData(e)}
                    />
                </div>
                {
                    showMap ?
                        <CustomMap data={data} />
                        :
                        <div className="card_container">
                            {
                                data?.map((home, index) => (
                                    <div className='col' key={index}>
                                        <Cards data={home} />
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>
            {
                !showMap &&
                <div className="footer">
                    <Footer />
                </div>
            }

            <div className='map_btn'
                onClick={() => setshowMap(!showMap)}
            >
                {
                    showMap ?
                        <>
                            <span style={{ fontSize: '13px', fontWeight: '500' }}>Show list</span>
                            <IoMap color='white' />
                        </>
                        :
                        <>
                            <span style={{ fontSize: '13px', fontWeight: '500' }}>Show map</span>
                            <FaListUl color='white' />
                        </>
                }
            </div>
        </section>
    )
}
export default Home
