import React from 'react';
import { FixedSizeList as List } from 'react-window';
import './ReactWindow.css';
const RowWithFields = ({ index, style }) => {
  return (
    <div style={{ ...style, display: 'flex', gap: '10px', marginBottom: '10px' }}>
      {Array.from({ length: 25 }).map((_, fieldIndex) => (
        <input
          key={fieldIndex}
          type="text"
          placeholder={`Field ${fieldIndex + 1}`}
          className='field-hover'
          style={{ width: '30px', padding: '5px', marginBottom:'5px', }}
          defaultValue={`${index + 1}, ${fieldIndex + 1}`}
        />
      ))}
    </div>
  );
};
const ReactWindow = () => {
  const itemCount = 1000;
  const itemHeight = 50;

  return (
    <div className="custom-scroll-container">
      <List
        height={500}
        itemCount={itemCount}
        itemSize={itemHeight}
      >
        {RowWithFields}
      </List>
    </div>
  );
};

export default ReactWindow;
