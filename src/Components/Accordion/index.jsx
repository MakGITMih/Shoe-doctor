
import { useState } from 'react';
import AccordionItem from './accordionItem';
import './accordion.scss'

const faqList = [
  {
    q: "Вопрос № 1",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus cumque officiis, tempora ipsa a.",
  },
  {
    q: "Вопрос № 2",
    a: "Lorem ipsum dolor sit amet sewad elit. Eius accusamus cumque officiis, tempora. Lorem ipsum dolor sit amet edo bere",
  },
  {
    q: "Вопрос № 3",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
  },
  {
    q: "Вопрос № 4",
    a: "Lorem ipsum dolor sit amet sewad elit. Eius accusamus cumque officiis, tempora. Lorem ipsum dolor sit amet edo bere",
  },
  {
    q: "Вопрос № 5",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
  },
  {
    q: "Вопрос № 6",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
  },
  {
    q: "Вопрос № 7",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
  },
];


function Accordion () {

  const [openId, setId] = useState(null);

  // const clickHandler = (id) => {
  //   if (id === openId) setId (null)
  //   else setId (id)
  // }

  return <ul className='accordion'>
    {faqList.map((faqItem,id) =>{
      return (
        <AccordionItem
          onClick={() => (id === openId ? setId(null) : setId(id))}
          faqItem={faqItem}
          
          isOpen={id === openId}
          key={id}>
        </AccordionItem>
      )
    })}
  </ul>
    
};


export default Accordion;