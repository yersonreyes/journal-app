import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
export const ImageGallery = ({ images = [] }) => {
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={164}>
      {images.map((item) => (
        <ImageListItem key={item}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
