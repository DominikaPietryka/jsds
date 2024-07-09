import React from 'react';
import Head from 'next/head';
import StoryButton from '../components/StoryButton';
import useLocalStorage from '../hooks/useLocalStorage';

const Home: React.FC = () => {
  const [selectedOption, setSelectedOption] = useLocalStorage('selectedOption', '1');

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
        {selectedOption === '1' && <StoryButton base className="custom-class-base" />}
        {selectedOption === '2' && <StoryButton neutral className="custom-class-neutral" />}
        {selectedOption === '3' && <StoryButton brand className="custom-class-brand" />}
      </div>
    </div>
  );
};

export default Home;
