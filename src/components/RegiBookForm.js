import React, { useCallback, useState } from "react";
import {
  Button,
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent,
  Tooltip,
  IconButton,
  Avatar,
  TextField,
  Divider,
} from "@mui/material";

import axios from 'axios';
import styles from "../styles/RegiBookForm.module.scss";


export default function RegiBookForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [preview, setPreview] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const  handleOnImages = useCallback((e) => {
    const file = e.target.files[0]
    setImage(file);
  }, [])

  const previewImage = useCallback((e) => {
    const file = e.target.files[0]
    setPreview(window.URL.createObjectURL(file))
  }, [])

  const createFormData = () => { 
    const formData = new FormData()
    if (!image) return    
    formData.append('book[name]', name)
    formData.append('book[image]', image)
    return formData
  }

  const onSubmit = async () => {
    const url = 'http://localhost:8000/api/v1/books';
    const data = await createFormData() 

    const confing = { 
      header: { 
        'content-type': 'multipart/form-data'
      }
    }

    axios.post(url, data, confing)
    .then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={11}>
            <Card className={styles.form_card}>
              <CardHeader title="登録フォーム" className={styles.card_header} />
              <Divider />
              <CardContent>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid container spacing={3} item xs={3}>
                    <Grid item xs={12}>
                      <div className={styles.upload_button}>
                        <Tooltip title="add">
                          <IconButton className={styles.icon_button}>
                            <Avatar className={styles.avatar}>
                              <input
                                type="file"
                                onChange={(e) => {
                                  handleOnImages(e)
                                  previewImage(e)
                                }}
                              />
                              { preview ?
                              <img
                                src={preview}
                                alt="preview img"
                                className={styles.preview}
                              />
                              : null
                              }
                            </Avatar>
                          </IconButton>
                        
                        </Tooltip>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid container spacing={3} item xs={9}>
                    <Grid item xs={12}>
                      <TextField
                        margin="normal"
                        label="タイトル"
                        fullWidth
                        className={styles.text_field}
                        onChange={handleNameChange}
                      />
                      <TextField
                        margin="normal"
                        id="birthplace"
                        label="作者"
                        fullWidth
                        className={styles.text_field}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <Box component="span" m={2} className={styles.button_wrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.submit_button}
                  onClick={onSubmit}
                >
                  送信
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  onClick={() => null}
                  className={styles.cancel_button}
                >
                  リセット
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};