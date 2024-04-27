import React from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';


const FAQ = () => {
    return (
        <Accordion className='my-10 p-5 text-lg'>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='text-red-400'>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='text-red-400'>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What animals are available for adoption?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='text-red-400'>
                        We have a variety of animals available for adoption, including dogs, cats, rabbits, birds, and more. Our selection varies depending on the animals currently in our care.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What are the adoption fees?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='text-red-400'>
                        Our adoption fees vary depending on the type of animal and their age. The fee typically covers vaccinations, spaying/neutering, microchipping, and other medical expenses. Please inquire at our shelter for specific adoption fees.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default FAQ;