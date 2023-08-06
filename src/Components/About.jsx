import './About.scss';
import Anime from "./Animation";

const Card = ({ title, description }) => {
  return (
    <div><h1><em>{title}</em></h1>
      <p>{description}</p></div>
  )
}

export default function About() {
  return (
    <Anime>
      <div className="about">
        <div>
          <Card title={"OUR STORY"} description={`At Little Lemon, we believe that great food is not just about flavors; 
          it's a reflection of passion, craftsmanship, and love for cooking. 
          Our culinary journey began with a dream to create a space where people 
          could come together to savor delectable dishes crafted with the freshest 
          ingredients. Inspired by the vibrant essence of lemons, we set out to create
           a dining experience that leaves a lasting impression on our guests.`} />
          <img className='image1' src='src\assets\imgs\Asset 20@4x.png' alt='Little Lemon Icon Art' />
        </div>
        <div>
          <img className='image2' src='src\assets\imgs\sandwich.jpg' alt='Sandwich' />
          <Card title={"OUR MISSION"} description={`Welcome to Little Lemon, where we bring you a delightful culinary experience
           that is sure to tantalize your taste buds and brighten your day! Located in
            the heart of the city, Little Lemon is a vibrant and cozy restaurant that 
            takes pride in serving the finest dishes with a touch of zest and creativity.`} />
        </div>
      </div>
    </Anime>
  );
}