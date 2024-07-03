import React, { useState } from 'react';
import Head from 'next/head';
import StoryButton from '../components/StoryButton';

const Home: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('1');

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', alignItems: 'flex-start' }}>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        <select size={3} value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="1">Button</option>
          <option value="2">Neutral Button</option>
          <option value="3">Brand Button</option>
        </select>
      </div>

      <div>
        {selectedOption === '1' && <StoryButton base />}
        {selectedOption === '2' && <StoryButton neutral />}
        {selectedOption === '3' && <StoryButton brand />}
      </div>
    </div>
  );
};

export default Home;
