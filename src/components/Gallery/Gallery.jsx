import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import "./gallery.css";

export default function Gallery(props) {
    const { galleryIsLoading, portfolioData } = props;
    
    return (
        <div className={"gallery-container" + (galleryIsLoading ? " gallery-is-loading" : "")}>
            <ul className="masonry-gallery">
                {portfolioData.map((item, index) => {
                    return (
                        <GalleryItem key={index} item={item} index={index} {...props} />
                    );
                })}
            </ul>
        </div>
    )
}
