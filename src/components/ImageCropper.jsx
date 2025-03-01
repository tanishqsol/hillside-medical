import React, { useState, useRef } from 'react';
import './ImageCropper.css';

const ImageCropper = ({ image, onComplete }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const imageRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: position.x + e.movementX,
        y: position.y + e.movementY
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const newScale = scale + (e.deltaY > 0 ? -0.1 : 0.1);
    setScale(Math.max(0.5, Math.min(3, newScale)));
  };

  const handleComplete = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 100;
    canvas.height = 100;

    // Draw circular mask
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, Math.PI * 2);
    ctx.clip();

    // Draw and transform image
    const img = imageRef.current;
    const centerX = 50 - (position.x * scale);
    const centerY = 50 - (position.y * scale);
    ctx.drawImage(
      img,
      centerX,
      centerY,
      img.width * scale,
      img.height * scale
    );

    onComplete(canvas.toDataURL('image/jpeg'));
  };

  return (
    <div className="image-cropper">
      <div 
        className="crop-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
      >
        <div className="crop-circle" />
        <img
          ref={imageRef}
          src={image}
          alt="Crop preview"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        />
      </div>
      <div className="crop-controls">
        <button className="crop-btn" onClick={handleComplete}>
          Crop Image
        </button>
      </div>
    </div>
  );
};

export default ImageCropper; 