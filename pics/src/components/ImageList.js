import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = (props) =>{





  console.log(props.images);

    // const images = props.images.map(({description, id, urls}) =>{
    // return <img alt = {description} key = {id} src={urls.regular} />;

    const images = props.images.map((image)=>{
    return<ImageCard key = {image.id}  image = {image}/>;
  });
  return <div className = 'image-list'> {images}</div>;


}

export default ImageList;
