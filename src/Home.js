import React from 'react'
import './Home.css'
import Product from './Product.js'



function Home() {
    return (
        <div className="home">
            <div className="home_container">
            
                <img className="home_image" alt="Background" src="https://thumbs.dreamstime.com/z/tropical-plant-nursery-4074172.jpg"/>

                <div className="home_row">
                    <Product id={1} title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)" price={20} rating={4}
                    image="https://im.whatshot.in/img/2020/May/nursery-live-1-cropped-1590666438.jpg"/>

                    <Product id={2} title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U" price={20} rating={4}
                    image="https://im.whatshot.in/img/2020/May/rolling-nature-1-cropped-1590666330.jpg"/>
                </div>

                <div className="home_row">
                <Product id={3} title="Toshiba (HDTB420XK3AA) Canvio Basics 2TB Portable External Hard Drive USB 3.0, BlackToshiba" price={20} rating={4}
                    image="https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/Plant-Nursery.jpg"/>

                <Product id={4} title="Seagate Storage Expansion Card for Xbox Series X|S 1TB Solid State Drive " price={20} rating={4}
                    image="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-set-of-3-outdoor-flowering-plants-for-beautiful-garden-16969318301836_512x512.jpg?v=1601351600"/>

                <Product id={5} title="Acer Chromebook Spin 311 Convertible Laptop, Intel Celeron N4020" price={20} rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51xPh3N3wRL.jpg"/>
                </div>

                <div className="home_row">
                <Product id={6} title="Samsung Super Model" price={20} rating={4}
                    image="http://www.nchasia.com/images/Plants.jpg"/>
                </div>

            </div>
        </div>
    )
}

export default Home;
