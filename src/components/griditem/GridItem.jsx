jsx
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
  // Log the props for debugging purposes
  console.log('GridItem props:', { title, imageSrc, text, category, description });

  // State to track if the tab is open or closed
  const [isTabOpen, setTabOpen] = useState(false);

  // Function to toggle the tab open or closed
  const toggleTab = () => {
    setTabOpen(prevState => !prevState);
  };

  return (
    <div className="col-4">
      <div className="item-wrapper" id={category}>
        {/* Image */}
        <img src={imageSrc} alt={`Image for ${title}`} />

        {/* Title */}
        <h2>{title}</h2>

        {/* Text */}
        <p>{text}</p>

        {/* Description */}
        <p className="terms">{description}</p>

        {/* Terms and conditions */}
        <p className="terms">*Termos e condições aplicáveis</p>

        {/* Button */}
        <div className="row">
          <div className="col-12">
            <button className="btn btn-primary btn-primary--bet" onClick={toggleTab}>Participar</button>
          </div>
        </div>

        {/* Render the Tab component if the tab is open */}
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