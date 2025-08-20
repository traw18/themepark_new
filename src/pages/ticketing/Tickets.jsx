// src/App.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "../../css/tickets.css";
// import './App.css'; // Assuming Tailwind CSS is included via CDN or local setup
    // <link
    //   href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    //   rel="stylesheet"
    // />

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [tickets, setTickets] = useState({
    adult: 0,
    child: 0,
    senior: 0,
  });

  // Ticket prices (mock data, replace with API data)
  const ticketPrices = {
    adult: 390, // HKD
    child: 190, // HKD
    senior: 160, // HKD
  };

  // Handle ticket quantity changes
  const handleQuantityChange = (type, action) => {
    setTickets((prev) => ({
      ...prev,
      [type]: action === 'increment' ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  // Calculate total price
  const totalPrice = () => {
    return (
      tickets.adult * ticketPrices.adult +
      tickets.child * ticketPrices.child +
      tickets.senior * ticketPrices.senior
    );
  };

  // Check if the user can proceed to checkout
  const canProceed = selectedDate && (tickets.adult + tickets.child + tickets.senior > 0);

  return (
    <div className="tickets min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="w-full max-w-4xl mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-900">
          Admission Tickets
        </h1>
        <img src="/image/robots04.webp" alt="" className="tickets-banner" style={{ width: '100%'}}/>
      </header>

      <main className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {/* Date Picker Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Select Visit Date</h2>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            className="w-full p-2 border rounded-md"
            placeholderText="Choose a date"
            dateFormat="MMMM d, yyyy"
          />
        </section>

        {/* Ticket Selection Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Select Tickets</h2>
          <div className="space-y-4">
            {/* Adult Ticket */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Adult ( Ages 12-64 )</h3>
                <p className="text-gray-600">HK${ticketPrices.adult}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange('adult', 'decrement')}
                  className="px-3 py-1 bg-gray-200 rounded-md"
                  disabled={tickets.adult === 0}
                >
                  -
                </button>
                <span>{tickets.adult}</span>
                <button
                  onClick={() => handleQuantityChange('adult', 'increment')}
                  className="px-3 py-1 bg-gray-200 rounded-md"
                >
                  +
                </button>
              </div>
            </div>

            {/* Child Ticket */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Child ( Ages 3-11 )</h3>
                <p className="text-gray-600">HK${ticketPrices.child}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange('child', 'decrement')}
                  className="px-3 py-1 bg-gray-200 rounded-md"
                  disabled={tickets.child === 0}
                >
                  -
                </button>
                <span>{tickets.child}</span>
                <button
                  onClick={() => handleQuantityChange('child', 'increment')}
                  className="px-3 py-1 bg-gray-200 rounded-md"
                >
                  +
                </button>
              </div>
            </div>

            {/* Senior Ticket */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Senior ( Ages 65+ )</h3>
                <p className="text-gray-600">HK${ticketPrices.senior}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange('senior', 'decrement')}
                  className="px-3 py-1 bg-gray-200 rounded-md"
                  disabled={tickets.senior === 0}
                >
                  -
                </button>
                <span>{tickets.senior}</span>
                <button
                  onClick={() => handleQuantityChange('senior', 'increment')}
                  className="px-3 py-1 bg-gray-200 rounded-md"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="ticket-summary space-y-2">
            <p>
              <span className="font-medium">Visit Date:</span>{' '}
              {selectedDate ? selectedDate.toLocaleDateString() : 'Not selected'}
            </p>
            <p>
              <span className="font-medium">Adult Tickets:</span> {tickets.adult} x HK$
              {ticketPrices.adult}
            </p>
            <p>
              <span className="font-medium">Child Tickets:</span> {tickets.child} x HK$
              {ticketPrices.child}
            </p>
            <p>
              <span className="font-medium">Senior Tickets:</span> {tickets.senior} x HK$
              {ticketPrices.senior}
            </p>
            <p className="ticket-total text-lg font-bold">
              Total: HK${totalPrice()}
            </p>
          </div>
        </section>

        {/* Checkout Button */}
        <button
          className={`ticket-checkout-button w-full py-3 rounded-md text-white ${
            canProceed ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!canProceed}
          onClick={() => alert('Proceeding to checkout...')}
        >
          Proceed to Checkout
        </button>
      </main>
    </div>
  );
};

export default App;