import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const {user} = useContext(AuthContext)

    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/books?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [url])

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete')
        if(proceed){
            fetch(`http://localhost:5000/books/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('delete successfull')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                }
            })
        }
    }

    const handleConfirm = id => {
            fetch(`http://localhost:5000/books/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status:'confirm'})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining]
                    setBookings(newBookings)
                }
            })
    }

    return (
        <div>
            <h1 className="text-3xl">Booking : {bookings.length}</h1>
            <div className="overflow-x-auto ">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
       
       <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>price</th>
      
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        bookings.map(booking => <BookingRow booking={booking} key={booking._id} handleConfirm={handleConfirm} handleDelete={handleDelete}></BookingRow>)
    }
    </tbody>
    
   
    
  </table>
</div>
</div>
       
    );
};

export default Bookings;

