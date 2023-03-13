
import './App.css';
import Medicine from './medicinedetails';
import Event from './eventdetails';
import Invitation from './invitation';
import Payment from './payments';
import Kumar from './kumar';
import BookingMedicine from './bookingmedicine';
import BookingEvents from './bookingEvents';
import BookingInvites from './bookingInvitation';
import BookingPayments from './bookingPayments';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App()
 {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Kumar/>}/>
        <Route path ='/event' element={<Event/>}/>
        <Route path ='/medicine' element={<Medicine/>}/>
        <Route path ='/invitation' element={<Invitation/>}/>
        <Route path ='/payment' element={<Payment/>}/>
        <Route path ='/bookingmedicine' element={<BookingMedicine/>}/>
        <Route path ='/bookingevents' element={<BookingEvents/>}/>
        <Route path ='/bookinginvitation' element={<BookingInvites/>}/>
        <Route path ='/bookingpayments' element={<BookingPayments/>}/>
        </Routes>
        </BrowserRouter>
      
        
    </div>
  );
}

export default App;
