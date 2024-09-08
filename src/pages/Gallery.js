import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import serverConfig from '../serverConfig';
import Images from './Images';
import './Gallery.css'; // Ensure you have this file for custom CSS

const Gallery = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchImages = useCallback(async () => {
    try {
      setLoading(true);
      const [kitchenResponse, bathroomResponse, livingRoomResponse,
        flooringResponse, constructionResponse, plasterResponse, plumbingResponse, electricityResponse
      ] = await Promise.all([
        axios.get(`${serverConfig.SERVER_URL}/images/kitchen`),
        axios.get(`${serverConfig.SERVER_URL}/images/bathroom`),
        axios.get(`${serverConfig.SERVER_URL}/images/living-room`),
        axios.get(`${serverConfig.SERVER_URL}/images/flooring`),
        axios.get(`${serverConfig.SERVER_URL}/images/construction`),
        axios.get(`${serverConfig.SERVER_URL}/images/plaster`),
        axios.get(`${serverConfig.SERVER_URL}/images/plumbing`),
        axios.get(`${serverConfig.SERVER_URL}/images/electricity`)
      ]);

      const fetchedImages = {
        kitchen: kitchenResponse.data,
        bathroom: bathroomResponse.data,
        livingRoom: livingRoomResponse.data,
        flooring: flooringResponse.data,
        construction: constructionResponse.data,
        plaster: plasterResponse.data,
        plumbing: plumbingResponse.data,
        electricity: electricityResponse.data
      };
      console.log("Kitchen images response:", kitchenResponse.data);
      console.log("Bathroom images response:", bathroomResponse.data);
      console.log("Living Room images response:", livingRoomResponse.data);

      setImages(fetchedImages);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!images) {
      fetchImages();
    }
  }, [images, fetchImages]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleCategorySelect = (chosenCategory) => {
    setSelectedCategory(chosenCategory);
  };

  const categories = [
    { name: 'kitchen', displayName: 'מטבח' },
    { name: 'bathroom', displayName: 'אמבטיה' },
    { name: 'livingRoom', displayName: 'סלון' },
    { name: 'flooring', displayName: 'ריצוף' },
    { name: 'construction', displayName: 'בנייה' },
    { name: 'plaster', displayName: 'גבס' },
    { name: 'plumbing', displayName: 'אינסטלציה' },
    { name: 'electricity', displayName: 'חשמל' }
  ];

  return (
    <div className="gallery">
      {!selectedCategory ? (
        <div className="category-selection">
          {categories.map((category) => (
            <div key={category.name} className="category-card" onClick={() => handleCategorySelect(category.name)}>
              <div className="category-image-wrapper">
                <img src={`${process.env.PUBLIC_URL}/${category.name}.jpg`} alt={`${category.displayName}`} className="category-image" />
                <div className="category-overlay">
                  <span className="category-title">{category.displayName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="image-display">
          <Images imageList={images[selectedCategory]} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
