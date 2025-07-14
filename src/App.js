import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import CsImage from './CS.jpg';
import SeImage from './Se.png';
import MlImage from './ml.jpg';
import QeImage from './Qe.png';
import SdImage from './Sd.png';
import SaImage from './Sa.png';

function App(){
const HomeContent= [
  {
   id:1,
   Name: "Computer Science",
   Description:"Find What Computer Science",
   img:CsImage
},

{
  id:2,
  Name: "Software Engineering",
  Description:" Find What Software Engineering",
  img:SeImage
},

{
id:3,
Name:"Machine Learning",
Description:"Find What Machine Learning",
img:MlImage
},

{
  id:4,
  Name:"SoftWare Quality Assurance",
  Description:"Find What Software Quality Assurance",
  img:QeImage
},

{
  id:5,
  Name:"Software Development Life Cycle",
  Description:"Find What Software Development Life Cycle",
  img:SdImage
},

{
  id:6,
  Name:"Software Architecture and Design Patterns",
  Description:" Find what Software Architecture and Design Patterns",
  img:SaImage
}

]

  return(
    <div>
 <Header/>
  <Home list={HomeContent}/>
  <Footer/>
    </div>
  )
}

export default App;