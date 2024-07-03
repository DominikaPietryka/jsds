import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('1');

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px', alignItems: 'center' }}>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        <select size={2} value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
          <option value="1">button 1</option>
          <option value="2">button 2</option>
        </select>
      </div>

      {selectedOption === '1' && (
        <div>
          <button className="slds-button">Button</button>
        </div>
      )}

      {selectedOption === '2' && (
        <div>
          <button className="slds-button slds-button_neutral">Button</button>
        </div>
      )}
    </div>
  );
}
