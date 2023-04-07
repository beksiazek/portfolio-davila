import React from 'react';
import ImageSlider from '../components/imageSlider/ImageSlider';
import { SliderData } from '../components/imageSlider/SliderData';

export default function Home() {
  return (
    <ImageSlider  slides={SliderData} />
  )
}
