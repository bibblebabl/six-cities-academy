import React from 'react';
import { Offer } from '../../types';

type PropertyGalleryProps = {
  offer?: Offer | null;
};

function PropertyGallery({ offer }: PropertyGalleryProps): JSX.Element {
  const galleryImages = offer?.images.slice(0, 6);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {galleryImages?.map((image) => (
          <div key={image} className="property__image-wrapper">
            <img className="property__image" src={image} alt={offer?.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(
  PropertyGallery,
  (prevProps, nextProps) => prevProps.offer?.images === nextProps.offer?.images
);
