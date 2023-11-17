// Use PropTypes to document and enforce the expected types of your component's props. This can help catch potential bugs early.

const GridItemPropTypes = {
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  
  export default GridItemPropTypes;