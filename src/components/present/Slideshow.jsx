
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './present.css';



const spanStyle = {
    padding: '20px',
    zIndex: 1,
    textAlign: 'center',
    color: 'rgb(255, 255, 255)', 
    position: 'relative', 
    fontFamily: '"Lilita One", sans-serif',
    letterSpacing: '5px',
    fontSize: '2rem',
    
  };
  
const divStyle = {
  display: 'flex',
  alignItems: 'center',
  top:'50px',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '70vh'
}
const slideImages = [
  {
    url: 'https://res.cloudinary.com/dvnhn35l4/image/upload/v1712591388/Ecommerce/Banner_Home_Escritorio_ziy9wk.png',
   /*  caption: 'Slide 1' */
  },
  {
    url: 'https://res.cloudinary.com/dvnhn35l4/image/upload/v1712174306/Ecommerce/banner-negro_pwyf2v.jpg',
    /* caption: 'Slide 2' */
  },
  {
    url: 'https://res.cloudinary.com/dvnhn35l4/image/upload/v1712188152/Ecommerce/2-slide-1708555912721-4296818172-c3f969716bb0e3f905fb71748aad8a6c1708555923-1920-1920_1_azdlls.jpg',
   /*  caption: 'Slide 3' */
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      
       
      </div>
    )
}
export default Slideshow 