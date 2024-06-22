import React from 'react';
import { AiOutlinePlayCircle } from "react-icons/ai";
import contentUrlGenerator from '../../utils/contentUrlGenerator';

export default function GalleryItem({ item, index, currentOwnerTag, currentTypeTag, setModalItem, openModal }) {
    return (
        <li
            onClick={() => {
                setModalItem(item);
                openModal();
            }}
            className={
                (item.owner === currentOwnerTag ||
                    currentOwnerTag === "") &&
                    (item.type === currentTypeTag ||
                        currentTypeTag === "")
                    ? "portfolio-item active"
                    : "portfolio-item"
            }
            key={index}
        >
            {item.type === "avi" && (
                <AiOutlinePlayCircle className="play-icon" />
            )}
            <img src={contentUrlGenerator(item.content, item.type, true)} alt={item.description} loading="lazy" />
        </li>
    )
}
