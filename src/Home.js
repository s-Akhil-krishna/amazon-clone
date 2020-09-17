import React from 'react'
import "./Home.css";
import Product from "./Product.js"

function Home() {
    return (
        <div className="home">
            <img className="home__banner" 
            src="https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg"
            // src="https://images-eu.ssl-images-amazon.com/images/I/41G6zxxNH5L.png"
            // src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F484546%2Fscreen-shot-2018-06-05-at-111429-am.png&w=700&op=resize" 
            alt="Home Image" />
            {/*Pass in props from here to Product component*/}
            {/*Product: id,title,image,price,rating*/}
            <div className="home__row">
                <Product
                    id="123456"
                    title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
                    price={11.89}
                    rating = {4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
                />
                <Product
                    id="19378389443"
                    title="Tony Hawk's Pro Skater 1 + 2 - PlayStation 4"
                    price={678.39}
                    rating = {3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81LSub%2BNDOL._SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="83898787489389"
                    title="Marvel's Avengers for PlayStation 4"
                    price={499.99}
                    rating = {5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81DugevkxJL._SL1500_.jpg"
                />         
                <Product
                    id="89000294934"
                    title="Marvel's Avengers for PlayStation 4"
                    price={499.99}
                    rating = {5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81DugevkxJL._SL1500_.jpg"
                />         
                <Product
                    id="74338987874"
                    title="Ailun Screen Protector for iPhone 8 plus/7 Plus/6s Plus/6 Plus-5.5 Inch 3Pack 2.5D Edge Tempered Glass Compatible with iPhone 8 plus/7 plus/6s Plus/6 Plus-Anti Scratch Case Friendly"
                    price={99.99}
                    rating = {5}
                    image="https://images-na.ssl-images-amazon.com/images/I/816i8xf2UjL._AC_SL1500_.jpg"
                /> 
            </div>

            <div className="home__row">
                <Product
                    id="3498376437"
                    title=
                    "OWILLZ 120 inch Projector Screen 16:9 HD Foldable for Home Theater Cinema Indoor Outdoor"
                    price={49.99}
                    rating = {5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71jr6NXQr8L._AC_SL1500_.jpg"
                />                    
            </div>
            <div className="home__row">
            <Product
              id="12321341"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </div>

          <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        
        </div>
    );
}

export default Home;
