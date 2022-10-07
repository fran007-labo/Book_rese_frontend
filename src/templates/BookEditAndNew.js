import React, { useCallback, useEffect, useState } from 'react';

// reducks
import { useDispatch } from "react-redux";
// import { saveBook } from "../reducks/books/operations";

// for style 
import {
  PrimaryButton,
  TextInput
} from "../components/Index";
import ImageArea from "../components/Books/ImageArea";

// router
import { useLocation } from "react-router-dom";

// api
import { apiUrl } from "../settings/ApiClient"

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


  const createFormData = () => { 
    const formData = new FormData()
    if (!images) return  
    images.map((image) => {
      formData.append('images[]', image)
    })

    formData.append('stringsData[title]', title)
    formData.append('stringsData[body]', body)
    formData.append('stringsData[author]', author)
    formData.append('stringsData[publisher]', publisher)
    return formData
  }

  const saveBook = async () => {
    const bookRegiInfo = await createFormData()
    const config = {headers: {"Content-Type": "multipart/form-data"}} // 画像ファイルを取り扱うのでform-dataで送信
    apiUrl.post('/books',bookRegiInfo, config).then((r) => { 
      console.log(r)
    })
  }

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
        <div className="module-spacer--small" />
        <div className="center">
          <PrimaryButton
            label={"商品情報を保存"}
            onClick={() =>
              saveBook()
            }
          />
        </div>
      </div>
    </section>
  );
};
