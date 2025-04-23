
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function Home() {
  const [homeAirport, setHomeAirport] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    setResults([]);
    const mock = [
      { summary: 'London → Rome → Jeddah', legs: ['LON → FCO', 'FCO → JED'], wait_time: '3h', total_price: '220 GBP' },
      { summary: 'London → Cairo → Jeddah', legs: ['LON → CAI', 'CAI → JED'], wait_time: '1.5h', total_price: '198 GBP' }
    ];
    setResults(mock);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <img src="/logo.png" alt="Logo" style={{ width: 100, marginBottom: 20, cursor: 'pointer' }} onClick={() => window.location.href = '/'} />
      <h1 style={{ color: '#1e40af' }}>CheapLeaps</h1>
      <input placeholder='From (e.g. LON)' value={homeAirport} onChange={e => setHomeAirport(e.target.value)} />
      <input placeholder='To (e.g. JED)' value={destination} onChange={e => setDestination(e.target.value)} />
      <input type='date' value={departDate} onChange={e => setDepartDate(e.target.value)} />
      <input type='date' value={returnDate} onChange={e => setReturnDate(e.target.value)} />
      <button onClick={handleSearch}>Find Flights</button>
      {results.map((r, i) => (
        <div key={i} style={{ marginTop: 10, background: '#eef', padding: 10 }}>
          <b>{r.summary}</b>
          <div>Legs: {r.legs.join(', ')}</div>
          <div>Wait: {r.wait_time}</div>
          <div>Total: {r.total_price}</div>
          <button style={{ marginTop: 5 }}>Book Now</button>
        </div>
      ))}
    </div>
  );
}
