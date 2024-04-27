import "../styles/home.css";
import { useEffect, useState } from "react";
import * as Contentstack from "contentstack";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
 
const Home = () => {
  const stack = Contentstack.Stack(
    "blta9eaaf90aa1f0b99",
    "cs75ac97f792cd9581f678aaea",
    "website"
  );
 
  const [donateBanner, setdonateBanner] = useState([]);
  const [heroBanner, setHeroBanner] = useState([]);
  const [communityBanner, setCommunityBanner] = useState([]);
 
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const query = stack.ContentType("home").Query();
        const response = await query.toJSON().find();
        const data = response[0][0].components[0].hero_banner.slides;
        data.forEach((banner) => {
          const bannerType = banner.banner_type;
          switch (bannerType) {
            case "DonateBanner":
              setdonateBanner((prevState) => [
                ...prevState,
                {
                  title: banner.banner_title,
                  description: banner.banner_description,
                  longDescription: banner.banner_long_description,
                  cta: banner.cta,
                  image: banner.banner_image,
                },
              ]);
              break;
            case "HeroBanner":
              setHeroBanner((prevState) => [
                ...prevState,
                {
                  title: banner.banner_title,
                  description: banner.banner_description,
                  cta: banner.cta,
                  image: banner.banner_image,
                },
              ]);
              break;
            case "CommunityBanner":
              setCommunityBanner((prevState) => [
                ...prevState,
                {
                  title: banner.banner_title,
                  description: banner.banner_description,
                  longDescription: banner.banner_long_description,
                  cta: banner.cta,
                  image: banner.banner_image,
                },
              ]);
              break;
            default:
              break;
          }
        });
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
 
    getAllEntries();
  }, []);
 
  console.log("herobanner", heroBanner);
 
  // const heroBannerTitle = heroBanner[0].title
  // const heroBannerDescription = heroBanner[0].description
  // const heroBannerImage = heroBanner[0].image.url
 
  return (
    <div className="homePage">
      <Header />
 
      <main>
        {heroBanner.length > 0 && (
          <section className="heroBanner">
            <div
              style={{
                width: "100%",
                height: "100vh",
                backgroundImage: `url(${heroBanner[0].image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="heroBanner_Text">
                <h1>{heroBanner[0].title}</h1>
                <p>{heroBanner[0].description}</p>
              </div>
            </div>
            {/* <img src={heroBanner[0].image.url} alt="Poster" /> */}
          </section>
        )}
 
        {communityBanner.length > 0 && (
          <section className="communitySection">
            <img src={communityBanner[0].image.url} alt="Poster" />
            <div>
              <h1>{communityBanner[0].title}</h1>
              <p>{communityBanner[0].description}</p>
            </div>
          </section>
        )}
        {donateBanner.length > 0 && (
          <section className="donateBanner">
            <div>
              <h1>{donateBanner[0].title}</h1>
              <p>{donateBanner[0].description}</p>
            </div>
            <img src={donateBanner[0].image.url} alt="Poster" />
          </section>
        )}
      </main>
 
      <footer>
        <div className="footer-container">
         
          <div className="copyright">
            <p>&copy; 2024 Repurpose. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
 
export default Home;