import React, { useCallback, useEffect, useState } from 'react';

// reducks
import { useDispatch } from "react-redux";
import { saveBook } from "../reducks/books/operations";

// for style 
import {
  PrimaryButton,
  // SelectBox, 
  TextInput
} from "../components/Index";
import ImageArea from "../components/Books/ImageArea";

// router
import { useLocation } from "react-router-dom";

export default function BookEditAndNew() {

  const dispatch = useDispatch();
  const paramsFromLink = useLocation();

///////
  // /book/edit/[:id]のpath時。
  // parameter名がstateの中身格納されている。
  const sentEditBookInfo = paramsFromLink.state
///////

  const 
    [id, setId] = useState(""),
    [title, setTitle] = useState(""),
    [body, setBody] = useState(""),
    [images, setImages] = useState([]),
    [author, setAuthor] = useState(""),
    [publisher, setPublisher] = useState("")

  const inputTitle = useCallback((event) => {
    setTitle(event.target.value)
  }, [setTitle])

  const inputBody = useCallback((event) => {
    setBody(event.target.value)
  }, [setBody])

  const inputAuthor = useCallback((event) => {
    setAuthor(event.target.value)
  }, [setAuthor])

  const inputPublisher = useCallback((event) => {
    setPublisher(event.target.value)
  }, [setPublisher])

  useEffect(() => {
    if (sentEditBookInfo) {
      setId(sentEditBookInfo.id)
      setTitle(sentEditBookInfo.title)
      setBody(sentEditBookInfo.body)
      setImages(sentEditBookInfo.imageUrl)
      setAuthor(sentEditBookInfo.author)
      setPublisher(sentEditBookInfo.publisher)
    }
  }, [sentEditBookInfo])

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
          onChange={inputBody} rows={5} value={body} type={"text"}
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
            onClick={() =>
              dispatch(saveBook(title, body, publisher, author, images))
            }
          />
        </div>
      </div>
    </section>
  );
};
