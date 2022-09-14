import React, { useCallback } from 'react';
import { makeStyles } from "@mui/styles";
import { storage } from "../../settings/firebase"
import IconButton from '@mui/material/IconButton';
import { useDispatch } from "react-redux";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// import { showLoadingAction, hideLoadingAction } from "../../reducks/loading/actions";
import ImagePreview from "./ImagePreview";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

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
  const images = props.images;

  const deleteImage = useCallback(async (id) => {
    const ret = window.confirm('この画像を削除しますか？')
    if (!ret) {
      return false
    } else {
      const newImages = images.filter(image => image.id !== id)
      props.setImages(newImages);

      const targetDelete = ref(storage, `images/${id}`);
      return deleteObject(targetDelete);
    }
  }, [props.images])

  const uploadImage = useCallback((event) => {
    // dispatch(showLoadingAction("uploading..."))
    const file = event.target.files;
    let blob = new Blob(file, { type: "image/jpeg" });

    // Generate random 16 digits strings
    const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N = 16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n % S.length]).join('')

    const uploadRef = ref(storage, `images/${fileName}`);
    const uploadTask = uploadBytes(uploadRef, blob)
    
    uploadTask.then(() => {
      getDownloadURL(uploadRef).then((url) => { 
        const newImage = { id: fileName, path: url };
        props.setImages((prevState => [...prevState, newImage]));
      });
    })
  }, [props.setImages]);

  return (
    <div>
      <div className="p-grid__list-images">
        {props.images.length > 0 && (
          props.images.map((image, index) => {
            return <ImagePreview delete={deleteImage} path={image.path} key={index} />
          })
        )}
      </div>
      <div className="u-text-right">
        <span>商品画像を登録する</span>
          <IconButton className={classes.icon}>
            <label>
              <AddAPhotoIcon />
              <input 
                className="u-display-none" type="file" id="image"
                onChange={(e) => uploadImage(e)}
              />
            </label>
          </IconButton>
      </div>
    </div>
  );
};
