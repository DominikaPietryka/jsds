import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import StoryButton from '../components/StoryButton';
import StoryCard from '../components/StoryCard';
import StoryAccordion from '../components/StoryAccordion'; 
import useLocalStorage from '../hooks/useLocalStorage';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const [selectedOption, setSelectedOption] = useLocalStorage('selectedOption', '1');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  const accordionItems = [
    { label: 'Accordion summary a', content: 'Accordion details - A' },
    { label: 'Accordion summary b', content: 'Accordion details - B' },
    { label: 'Accordion summary c', content: 'Accordion details - C' },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <link rel="stylesheet" href="https://starter-kit-demo.herokuapp.com/styles/index.css" />
      </Head>
      <div>
        <select size={7} value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="1">Button</option>
          <option value="2">Neutral Button</option>
          <option value="3">Brand Button</option>
          <option value="4">Card</option>
          <option value="5">Collapsed Card</option>
          <option value="6">Loading Card</option>
          <option value="7">Accordion</option> {/* Add option for accordion */}
        </select>
      </div>

      <div className={styles.wrapper}>
        {selectedOption === '1' && <StoryButton base />}
        {selectedOption === '2' && <StoryButton neutral />}
        {selectedOption === '3' && <StoryButton brand />}
        {selectedOption === '4' && (
          <StoryCard
            imgLink="https://img.icons8.com/?size=100&id=86128&format=png&color=7950F2"
            header={<span>Accounts</span>}
            body={<span>Anything can go into the card body</span>}
          />
        )}
        {selectedOption === '5' && (
          <StoryCard
            collapsed
            imgLink="https://img.icons8.com/?size=100&id=86128&format=png&color=7950F2"
            header={<span>Accounts</span>}
          />
        )}
        {selectedOption === '6' && (
          <StoryCard
            loading
            imgLink="https://img.icons8.com/?size=100&id=86128&format=png&color=7950F2"
            header={<span>Accounts</span>}
          />
        )}
        {selectedOption === '7' && <StoryAccordion items={accordionItems} />} {/* Add Accordion */}
      </div>
    </div>
  );
};

export default Home;
