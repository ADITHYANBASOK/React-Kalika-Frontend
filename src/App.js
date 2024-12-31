import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import DisabledUser from './Pages/Home/SignUp/DisabledUser';
import Aboutpage from './Pages/Home/Aboutpage';
import Doctorregpage from './Pages/Home/SignUp/Doctorregpage';
import Userregpage from './Pages/Home/SignUp/Userregpage';
import Login from './Pages/Home/Login/Login';
import DisabledHome from './Pages/Disableduser/DisabledHome';
import Addproducts from './Pages/Disableduser/Product/Addproducts';
import DuserProductDetails from './Pages/Disableduser/Product/DuserProductDetails';
import DuserUpdateproductInfo from './Pages/Disableduser/Product/DuserUpdateproductInfo';
import ViewProductOrderHistory from './Pages/Disableduser/Product/ViewProductOrderHistory';
import Makeappointments from './Pages/Disableduser/Appointment/Makeappointments';
import MakeAppointmentForm from './Pages/Disableduser/Appointment/MakeAppointmentForm';
import DuserCurrentAppointment from './Pages/Disableduser/Appointment/DuserCurrentAppointment';
import DuserAppointmenthistory from './Pages/Disableduser/Appointment/DuserAppointmenthistory';
import DuserViewProfile from './Pages/Disableduser/Profile/DuserViewProfile';
import DuserUpdateProfile from './Pages/Disableduser/Profile/DuserUpdateProfile';
import DoctorHome from './Pages/Doctor/DoctorHome';
import AppointmentApproval from './Pages/Doctor/Appointment/AppointmentApproval';
import ApprovedAppointmentpage from './Pages/Doctor/Appointment/ApprovedAppointmentpage';
import DoctorSharinglink from './Pages/Doctor/Appointment/DoctorSharinglink';
import Doctorprofilepage from './Pages/Doctor/Profile/Doctorprofilepage';
import Updatedoctorprofilepage from './Pages/Doctor/Profile/Updatedoctorprofilepage';
import UserHome from './Pages/User/UserHome';
import ProductView from './Pages/User/Product/ProductView';
import Cartview from './Pages/User/Product/Cartview';
import OrderhistoryView from './Pages/User/Product/OrderhistoryView';
import UserprofilePage from './Pages/User/Profile/UserprofilePage';
import UserUpdateProfilepage from './Pages/User/Profile/UserUpdateProfilepage';
import PaymentSuccessfullpage from './Pages/User/Product/PaymentSuccessfullpage';
import UserFeedbackpage from './Pages/User/UserFeedbackpage';
import AdminHomepage from './Pages/Admin/AdminHomepage';
import AdminPendingRequestpage from './Pages/Admin/AdminPendingRequestpage';
import AdminDisableduserPage from './Pages/Admin/Disableduser/AdminDisableduserPage';
import AdminDoctorprofileViewpage from './Pages/Admin/Doctor/AdminDoctorprofileViewpage';
import AdminUserprofileviewpage from './Pages/Admin/User/AdminUserprofileviewpage';
import AdminDisableduserProductDetailspage from './Pages/Admin/Disableduser/Product/AdminDisableduserProductDetailspage';
import AdminViewAppointmentpage from './Pages/Admin/Appointment/AdminViewAppointmentpage';
import AdminViewFeedbackpage from './Pages/Admin/Feedback/AdminViewFeedbackpage';
import Doctorphotopage from './Pages/Admin/Verification/Doctorphotopage';
import AdminDoctorDocVerification from './Pages/Admin/Verification/AdminDoctorDocVerification';
import AdminDisableduserphotoVerification from './Pages/Admin/Verification/AdminDisableduserphotoVerification';
import AdminDisableduserDocVerification from './Pages/Admin/Verification/AdminDisableduserDocVerification';
import Prescriptionpage from './Pages/Doctor/Prescription/Prescriptionpage';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* AdminPages */}
      <Route path='/adminhome' element={<AdminHomepage/>}/>
      <Route path='/adminpendingreq' element={<AdminPendingRequestpage/>}/>

      <Route path='/admindisableduser' element={<AdminDisableduserPage/>}/>
      <Route path='/admindoctor' element={<AdminDoctorprofileViewpage/>}/>
      <Route path='/adminpublicuser' element={<AdminUserprofileviewpage/>}/>
      <Route path='/admindisableduserproduct/:id' element={<AdminDisableduserProductDetailspage/>}/>

      <Route path='/adminappointmentview' element={<AdminViewAppointmentpage/>}/>
      <Route path='/adminviewfeedback' element={<AdminViewFeedbackpage/>}/>

      <Route path='/doctorphotoverification/:id' element={<Doctorphotopage/>}/>
      <Route path='/doctordocverification/:id' element={<AdminDoctorDocVerification/>}/>
      <Route path='/duserphotoverification/:id' element={<AdminDisableduserphotoVerification/>}/>
      <Route path='/duserdocverification/:id' element={<AdminDisableduserDocVerification/>}/>
      {/* End of AdminPages */}


      {/* Homepages */}
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<Aboutpage/>}/>

      <Route path='/duserreg' element={<DisabledUser/>}/>
      <Route path='/doctorreg' element={<Doctorregpage/>}/>
      <Route path='/userreg' element={<Userregpage/>}/>

      <Route path='/login' element={<Login/>}/>
      {/* End of Homepages */}

      {/* Disableduserpage */}
      <Route path='/disableduserhome' element={<DisabledHome/>}/>

      <Route path='/addproduct' element={<Addproducts/>}/>
      <Route path='/viewouruploadproduct' element={<DuserProductDetails/>}/>
      <Route path='/viewouruploadproduct/updateproductdetails/:id' element={<DuserUpdateproductInfo/>}/>
      <Route path='/viewduserorderhistory' element={<ViewProductOrderHistory/>}/>

      <Route path='/dusermakeappointment' element={<Makeappointments/>}/>
      <Route path='/appointment/:id' element={<MakeAppointmentForm/>}/>
      <Route path='/dusercurrentappoint' element={<DuserCurrentAppointment/>}/>
      <Route path='/duserappointmenthistory' element={<DuserAppointmenthistory/>}/>

      <Route path='/duserviewprofile' element={<DuserViewProfile/>}/>
      <Route path='/updateduserprofile' element={<DuserUpdateProfile/>}/>
      {/* End of Disableduserpages */}

      {/* Doctorpages */}
      <Route path='/doctorhome' element={<DoctorHome/>}/>
      
      <Route path='/doctorappointment' element={<AppointmentApproval/>}/>
      <Route path='/doctormakeappointment' element={<ApprovedAppointmentpage/>}/>
      <Route path='/linksharing/:id' element={<DoctorSharinglink/>}/>

      <Route path='/dprofile' element={<Doctorprofilepage/>}/>
      <Route path='/dprofile/updatedoctorprofile/:id' element={<Updatedoctorprofilepage/>}/>

      <Route path='/makeprescription/:id' element={<Prescriptionpage/>}/>

      {/* End of Doctorpages */}

      {/* Userpages */}
      <Route path='/userhome' element={<UserHome/>}/>

      <Route path='/userproductview/:category' element={<ProductView/>}/>
      <Route path='/viewcart' element={<Cartview/>}/>
      <Route path='/orderview' element={<OrderhistoryView/>}/>

      <Route path='/viewuserprofile' element={<UserprofilePage/>}/>
      <Route path='/viewuserprofile/updatepuserprofile/:id' element={<UserUpdateProfilepage/>}/>

      <Route path='/paymentsuccesfull' element={<PaymentSuccessfullpage/>}/>
      <Route path='/feedback' element={<UserFeedbackpage/>}/>

      

      {/* End of Userpages */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
