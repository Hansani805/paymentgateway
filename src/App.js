import React from 'react';
import './App.css';
import PaymentModal from './PaymentModal/PaymentModal';

function App() {
  return (
    <div className="App">
      <PaymentModal
	// Use a unique value for the orderId
	orderId={45896588}
	name="Single Room"
	amount="1500"
      />
    </div>
  );
}

export default App;