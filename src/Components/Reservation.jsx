import './reservation.scss'
import Anime from './Animation';

export default function Reservation() {
  return (
    <Anime>
      <div className="reservation">
        <div className='heading'>
          <p>Book a Table</p>
        </div>
        <div>
          <div>
            <form>
              <input className="focus:outline-none" type="text" placeholder='Full Name' />
              <input className="focus:outline-none" type="email" placeholder='Email' />
              <input className="focus:outline-none" type="text" placeholder='Reservation Date (dd-mm)' />
              <input className="focus:outline-none" type="text" placeholder='Reservation Time' />
              <input className="focus:outline-none" type="number" placeholder='No. of Persons' />
              <button className="focus:outline-none border-black border-2" type='submit' disabled>Book</button>
            </form>
          </div>
          <img src="src\assets\imgs\bady-abbas-rwkVXYzxmLI-unsplash (1).jpg" alt="Glass on a Table" />
        </div>
      </div>
    </Anime>
  );
}