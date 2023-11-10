import logo from './logo.svg';
import './App.css';
//import Chiru from './home';
import Home from './home';
import About from './about';
//import Image from './image';
import Service from './service';
import Contact from './contact';
import Menu from './menu';
import Student from './student';
//import { trainee,a } from './person'; // Named export
import { BrowserRouter,Routes,Route } from 'react-router-dom'; //routing b/w the pages for opening the page in another page
import Trainees from './trainess';
import Counts from './counts';
import Events from './events';
import Traineess from './traineess';
import Counter from './counter';
import Hooks from './hooks';
import ColorChangingButton from './geek'
import Component from './component'; 
import Fruitsomponent from './fruitscomponent'; 
import Form from './form';
import Form1 from './form1'
import Product1 from './product1';
import Productcard from './productcard';
import Category from './category'
import Singleproduct from './singleproduct';
import Food from './food';
import Owncount from './owncount';
import Color from './color';
import List from './list';
import Click from './click';
import Hook from './hook';
import Fruitcutting from './fruitcutting';
import Light from './light';
import Clicked from './clicked';
import Calculator from './calculator';
import Listtodo from './listtodo';
import Crud from './crud';
// import Form2 from './form';
import Own from './own';
import Userform from './userform';
import Courseform from './courseform';
import Datalist from './getdata';
import Datauserlist from './getuserdata';
import Datacourselist from './getcoursedata';
import Datacourselist1 from './getcoursedata1';
import Formvalidation from './formvalidation';
import Validateform from './validateform';
import Api from './api';
import Editform from './editform';
import Editform2 from './editform2';
import Editform3 from './editform3';
import Ownex from './ownex';
import Bank from './bank';
import Bank2 from './bank2';
import Houseloan from './houseloan';
import Fcomponent from './fcomponent';
import Cruds from './cruds';
import Form5 from './form5';
import Sign from './sign.js';
import Form6 from './form6';
import Bankwebsite from './bankwebsite';
import Homeloan from './homeloan';
import Apple from './apple';
import Houseloanform from './houseloanform';
import Carloan from './carloan';
import Educationloan from './educationloan';
import Businessloan from './businessloan';
import Goldloan from './goldloan';
import Personalloan from './personalloan';
import Abc from './abc';
import Th from './th';
import Carloanform from './carloanform';
import Educationloanform from './educationloanform';
import Businessloanform from './businessloanform';
import P from './p';
import Goldloanform from './goldloanform';
import Carth from './carth';
import E from './e';
import Gth from './gth';
import Bth from './bth';
import Pth from './pth';
import Pfl from './pfl';
import Homes from './homes';
import Login from './login';
import Signup from './signup';
import Sample from './sample';
import Calci from './calci';
import Calci2 from './calci2';
import Calci3 from './calci3';

import Carcalci from './carcalci1';
import Carcalci2 from './carcalci2';
import Carclci3 from './carcalci3';
import Carcalci3 from './carcalci3';
import Carcalci1 from './carcalci1';
import Educationcalci1 from './educationcalci1';
import Educationcalci2 from './educationcalci2';
import Educationcalci3 from './educationcalci3';
import Businesscalci1 from './businesscalci1';
import  Businesscalci2 from './businesscalci2';
import Businesscalci3 from './businesscalci3';
import Personalcalci1 from './personalcalci1';
import  Personalcalci2 from './personalcalci2';
import  Personalcalci3 from './personalcalci3';
import        Goldcalci1 from './goldcalci1';
import         Goldcalci2 from './goldcalci2';
import          Goldcalci3 from './goldcalci3';
import          Backendloan from './backendloan';
import          Backendgetloan from './backendgetloan';
import   Courseform1 from './courseform1';
import Getcoursedata1 from './getcoursedata1';
import Shop from './shop';
import Shopnew from './shopnew';
import addproduct from './addproduct';
import getcoursedata1 from './getcoursedata1'


import Form7 from './form7';
import Addproduct from './addproduct.js';

function App() {
  return (
   <div className="App">
    <BrowserRouter>
    <Menu/>

    <Routes>
      <Route path="home/"element={<Home/>}/>
      <Route path="/about"element={<About name="padma" rollno="12"/>}/>
      <Route path="/service"element={<Service/>}/>
      <Route path="/contact"element={<Contact name="amma"/>}/>
     
     {/* <Route path="/student"element={<Student name="monisha"/>}/> */}
     <Route path="/trainess"element={<Trainees/>}/>
     <Route path="/counts"element={<Counts/>}/>
     <Route path="/events"element={<Events/>}/>
     <Route path="/traineess"element={<Traineess/>}/>
     <Route path="/geek"element={<ColorChangingButton/>}/>
     <Route path="/counter"element={<Counter/>}/>
     <Route path="/hooks"element={<Hooks/>}/>
     <Route path="/component"element={<Component/>}/>
     <Route path="/fruitscomponent"element={<Fruitsomponent/>}/>
     <Route path="/form"element={<Form/>}/>
    {/* <Route path="/form1"element={<Form1/>}/>
     <Route path="/product1"element={<Product1/>}/>
     <Route path="/productcard"element={<Productcard/>}/>
     {/* <Route path="/category"element={<Category/>}/> */}
     <Route path="/color"element={<Color/>}/>
     <Route path="/list"element={<List/>}/>
     <Route path="/click"element={<Click/>}/>
     <Route path="/hook"element={<Hook/>}/>
     <Route path="/fruitcutting"element={<Fruitcutting/>}/>
     <Route path="/light"element={<Light/>}/>
     <Route path="/clicked"element={<Clicked/>}/>
     <Route path="/calculator"element={<Calculator/>}/>
     {/* <Route path="/form"element={<Form/>}/> */}
     <Route path="/own"element={<Own/>}/>
     <Route path="/form1"element={<Form1/>}/>
     <Route path="/listtodo"element={<Listtodo/>}/>
     <Route path="/crud"element={<Crud/>}/>
     <Route path="/userform" element={<Userform/>}/>
     <Route path="/courseform" element={<Courseform/>}/>
     <Route path="/studentdata" element={<Datalist/>}/>
     <Route path="/userdata" element={<Datauserlist/>}/>


     
     <Route path="/coursedata" element={<Datacourselist/>}/>
     <Route path="/coursedata" element={<Datacourselist1/>}/>
     <Route path="/formvalidation" element={<Formvalidation/>}/>
     <Route path="/validateform" element={<Validateform/>}/>
     <Route path="/api" element={<Api/>}/>
     <Route path="/editform/:id" element={<Editform/>}/>
     <Route path="/editform2/:id" element={<Editform2/>}/>
     <Route path="/editform3/:id" element={<Editform3/>}/>
     <Route path="/homeloan" element={<Homeloan/>}/>
     <Route path="ownex" element={<Ownex/>}/>
     <Route path="bank" element={<Bank/>}/>
     <Route path="bank2" element={<Bank2/>}/>
     <Route path="fcomponent" element={<Fcomponent/>}/>
     <Route path="cruds" element={<Cruds/>}/>
     <Route path="form5" element={<Form5/>}/>
     <Route path="sign" element={<Sign/>}/>
     <Route path="form6" element={<Form6/>}/>
     <Route path="bankwebsite" element={<Bankwebsite/>}/>
     <Route path="houseloan" element={<Houseloan/>}/>
     <Route path="carloan" element={<Carloan/>}/>
     <Route path="apple" element={<Apple/>}/>
     <Route path="houseloanform" element={<Houseloanform/>}/>
     <Route path="educationloan" element={<Educationloan/>}/>
     <Route path="businessloan" element={<Businessloan/>}/>
     <Route path="goldloan" element={<Goldloan/>}/>
     <Route path="personalloan" element={<Personalloan/>}/>
     <Route path="abc" element={<Abc/>}/>
     <Route path="th" element={<Th/>}/>
     <Route path="carloanform" element={<Carloanform/>}/>
     <Route path="educationloanform" element={<Educationloanform/>}/>
     <Route path="businessloanform" element={<Businessloanform/>}/>
     <Route path="goldloanform" element={<Goldloanform/>}/>
     <Route path="p" element={<P/>}/>
     <Route path="carth" element={<Carth/>}/>
     <Route path="e" element={<E/>}/>
     <Route path="gth" element={<Gth/>}/>
     <Route path="bth" element={<Bth/>}/>
     <Route path="pth" element={<Pth/>}/>
     <Route path="pfl" element={<Pfl/>}/>
     <Route path="homes" element={<Homes/>}/>
     <Route path="login" element={<Login/>}/>
     <Route path="signup" element={<Signup/>}/>
     <Route path="sample" element={<Sample/>}/>
     <Route path="calci" element={<Calci/>}/>
     <Route path="calci2" element={<Calci2/>}/>
     <Route path="calci3" element={<Calci3/>}/>
     <Route path="carcalci1" element={<Carcalci1/>}/>
     <Route path="carcalci2" element={<Carcalci2/>}/>
     <Route path="carcalci3" element={<Carcalci3/>}/>
     <Route path="educationcalci1" element={<Educationcalci1/>}/>
     <Route path="educationcalci2" element={<Educationcalci2/>}/>
     <Route path="educationcalci3" element={<Educationcalci3/>}/>
     <Route path="personalcalci3" element={<Personalcalci3/>}/>
     <Route path="personalcalci2" element={<Personalcalci2/>}/>
     <Route path="personalcalci1" element={<Personalcalci1/>}/>
     <Route path="goldcalci3" element={<Goldcalci3/>}/>
     <Route path="goldcalci2" element={<Goldcalci2/>}/>
     <Route path="goldcalci1" element={<Goldcalci1/>}/>
     <Route path="businesscalci3" element={<Businesscalci3/>}/>
     <Route path="businesscalci2" element={<Businesscalci2/>}/>
     <Route path="businesscalci1" element={<Businesscalci1/>}/>
     <Route path="form7" element={<Form7/>}/>
     <Route path="backendloan" element={<Backendloan/>}/>
     <Route path="backendgetloan" element={<Backendgetloan/>}/>
     <Route path="courseform1" element={<Courseform1/>}/>
     <Route path="courseform" element={<Courseform/>}/>
     <Route path="getcoursedata1" element={<Getcoursedata1/>}/>
     <Route path="shop" element={<Shop/>}/>
     <Route path="shopnew" element={<Shopnew/>}/>
     <Route path="addproduct" element={<Addproduct/>}/>
     
     <Route path="getcoursedata1" element={<Getcoursedata1/>}/>
     
     
          <Route path="/singleproduct/:id"element={<singleproduct/>}/>
    </Routes>
    </BrowserRouter>
  {/* <Chiru/> */}
  {/* <Home/>  */}
  {/* <About/> */}
    {/* <About name={a}/> */}
    {/* <Image/> */}
    {/* <Service/> */}
    <Food/>
    </div>
    
    
    

   
  );
}

export default App;