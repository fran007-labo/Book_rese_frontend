import React, { useCallback, useEffect, useState } from 'react';

// reducks
import { useDispatch } from "react-redux";
import { saveBook } from "../../reducks/books/operations";

// for style 
import { 
  PrimaryButton, 
  // SelectBox, 
  TextInput
} from "../UIkit";
import ImageArea from "./ImageArea";

export default function RegiBookForm2() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(""),
        [description, setDescription] = useState(""),
        [images, setImages] = useState([]),
        // [category, setCategory] = useState(""),
        // [categories, setCategories] = useState([]),
        [author, setAuthor] = useState(""),
        [publisher, setPublisher] = useState(""),
        [sizes, setSizes] = useState([]);

  const inputTitle = useCallback((event) => {
    setTitle(event.target.value)
  }, [setTitle])

  const inputDescription = useCallback((event) => {
    setDescription(event.target.value)
  }, [setDescription])

  const inputAuthor = useCallback((event) => {
    setAuthor(event.target.value)
  }, [setAuthor])

  const inputPublisher = useCallback((event) => {
    setPublisher(event.target.value)
  }, [setPublisher])

  return (
    <section>
      <h2 className="u-text__headline u-text-center">商品の登録・編集</h2>
      <div className="c-section-container">
        <ImageArea images={images} setImages={setImages} />
        <TextInput
          fullWidth={true} label={"タイトル"} multiline={false} required={true}
          onChange={inputTitle} rows={1} value={title} type={"text"}
        />
        <TextInput
          fullWidth={true} label={"本の説明"} multiline={true}
          onChange={inputDescription} rows={5} value={description} type={"text"}
        />
        <TextInput
          fullWidth={true} label={"著者"} multiline={false} required={true}
          onChange={inputAuthor} rows={1} value={author} type={"text"}
        />
        <TextInput
          fullWidth={true} label={"出版社"} multiline={false} required={true}
          onChange={inputPublisher} rows={1} value={publisher} type={"text"}
        />
        <div className="module-spacer--small" />
        {/* <SetSizesArea sizes={sizes} setSizes={setSizes} /> */}
        <div className="module-spacer--small" />
        <div className="center">
          <PrimaryButton
            label={"商品情報を保存"}
            onClick={() => dispatch(saveBook(title, description, publisher, sizes, images))}
          />
        </div>
      </div>
    </section>
  );
};
