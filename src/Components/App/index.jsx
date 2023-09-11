import { Route, Routes } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Bg from '../Bg';
import FAQ from '../../ProductPage/FAQ';
import Gallery from '../../ProductPage/Gallery';
import Home from '../../ProductPage/Home';
import Services from '../../ProductPage/Services';
import NotFound from '../../ProductPage/NotFound';

import '../Styles/index.scss';


// const faqList = [
//   {
//     q: "Lorem ipsum dolor sit amet",
//     a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus cumque officiis, tempora ipsa a.",
//   },
//   {
//     q: "Lorem ipsum dolor sit amet edo bere",
//     a: "Lorem ipsum dolor sit amet sewad elit. Eius accusamus cumque officiis, tempora. Lorem ipsum dolor sit amet edo bere",
//   },
//   {
//     q: "Lorem cotun cedas sit amet wer bere",
//     a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
//   },
//   {
//     q: "Lorem ipsum dolor sit amet edo bere",
//     a: "Lorem ipsum dolor sit amet sewad elit. Eius accusamus cumque officiis, tempora. Lorem ipsum dolor sit amet edo bere",
//   },
//   {
//     q: "Lorem cotun cedas sit amet wer bere",
//     a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
//   },
// ];



function App() {
  return (
    <>
      <div className="App">
       <Bg></Bg>

        <Header></Header>
        <Routes>
          <Route path='/' element = {<Home></Home>}></Route>
          <Route path='/faq' element = {<FAQ></FAQ>} ></Route>
          <Route path='/gallery' element = {<Gallery></Gallery>}></Route>
          <Route path='/services' element = {<Services></Services>}></Route>
          <Route path='*' element = {<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
