import React, { useCallback } from 'react';
import { makeStyles } from "@mui/styles";
import IconButton from '@mui/material/IconButton';
import { useDispatch } from "react-redux";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ImagePreview from "./ImagePreview";

const useStyles = makeStyles({
  icon: {
    marginRight: 8,
    height: 48,
    width: 48
  }
})

export default function ImageArea(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deleteImage = useCallback((index) => {
    const ret = window.confirm('この画像を削除しますか？')
    if (!ret) {
      return false
    } else {
      const newImages = []
      props.setImages(newImages);
    }
  }, [props.images])
  
  const uploadImage = useCallback((event) => {
    const file = event.target.files;
    const newImage = file[0]
    props.setImages((prevState => [...prevState, newImage]));
  }, [props.setImages]);
  
  return (
    <div>
      <div className="p-grid__list-images">
      <p>画像一枚まででお願いします。<br/>(今後複数アップ出来ます。）<br/>画像クリックで削除</p>
        {props.images.length > 0 && (
          props.images.map((image, index) => 
            <ImagePreview 
              delete={deleteImage}
              image={image}
              index={index}
              key={index} 
            />
          )
        )}
      </div>
      <div className="u-text-right">
        <span>商品画像を登録する(必須)</span>
        <IconButton className={classes.icon}>
          <label>
            <AddAPhotoIcon />
            <input 
                className="u-display-none" id="image"
                accept="image/*" multiple type="file"
                onChange={(e) => uploadImage(e)}
              />
          </label>
        </IconButton>
      </div>
    </div>
  );
};
