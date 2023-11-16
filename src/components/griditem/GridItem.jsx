/**
 * A component that represents an item in a grid layout.
 * @param {{string}} title - The title of the grid item.
 * @param {{string}} imageSrc - The source URL of the image for the grid item.
 * @param {{string}} text - The text content of the grid item.
 * @param {{string}} category - The category of the grid item.
 * @param {{string}} description - The description of the grid item.
 * @returns A React component representing a grid item.
 */
import React, { useState } from 'react';
import Tab from '../tab/Tab';
import './griditem.scss';

const GridItem = ({ title, imageSrc, text, category, description }) => {
  console.log('GridItem props:', { title, imageSrc, text, category, description });

  const [isTabOpen, setTabOpen] = useState(false);

  const toggleTab = () => {
    setTabOpen(prevState => !prevState);
  };
  
  return (
    <div className="col-4">
      <div className="item-wrapper" id={category}>
        <img src={imageSrc} alt={`Image for ${title}`} />
        <h2>{title}</h2>
        <p>{text}</p>
        <p className="terms">{description}</p>
        <p className="terms">*Termos e condições aplicáveis</p>
        <div className="row">
          <div className="col-12">
          <button className="btn btn-primary btn-primary--bet" onClick={toggleTab}>Participar</button>

          </div>
        </div>
        {isTabOpen && (
          <Tab
            onClose={toggleTab}
            title={title}
            imageSrc={imageSrc}
            text={text}
            description={description}
            category={category}
          />
        )}
      </div>
    </div>
  );
};

export default GridItem;
