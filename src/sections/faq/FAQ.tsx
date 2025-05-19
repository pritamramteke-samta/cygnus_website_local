import { Accordion, Box } from '@mantine/core';
import { faqsData } from '@modules/home/data';
import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import FAQItem from './FAQItem';
import './faq.scss';

const FAQ = () => {
  const [value, setValue] = useState<string[]>([faqsData[0].value]);

  const items = faqsData.map((item) => <FAQItem item={item} />);

  return (
    <Box className='footer'>
      <Box className='accordion-cont'>
        <Box className='accordion-title'>Frequently asked questions</Box>

        <Accordion
          multiple
          value={value}
          w={'100%'}
          defaultValue={['Apples']}
          variant='filled'
          onChange={setValue}
          classNames={{
            chevron: 'chevron',
          }}
          chevron={<IoChevronDown className={'icon'} />}
        >
          {items}
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
