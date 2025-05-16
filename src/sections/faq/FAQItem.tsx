import { Accordion, Group } from '@mantine/core';
import type React from 'react';
import type { FAQItemProps, FAQProps } from 'sections/sectionsTypes';
import './faq.module.scss';

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const AccordionLabel = ({ value }: FAQProps) => {
    return (
      <Group wrap='nowrap'>
        <div className='accordion-item-title'>{value}</div>
      </Group>
    );
  };

  const AccordionDescp = ({ description }: FAQProps) => {
    return (
      <Group wrap='nowrap'>
        <div className='accordion-item-title'>{description}</div>
      </Group>
    );
  };

  return (
    <Accordion.Item
      key={item.value}
      value={item.value}
      bg={'rgba(255, 255, 255, 0.03)'}
      className={`accordion-item`}
    >
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <AccordionDescp {...item} />
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default FAQItem;
