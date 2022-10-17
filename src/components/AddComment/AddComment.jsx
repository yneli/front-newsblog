import React from "react";

import styles from "./AddComment.module.scss";

import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { fetchComment } from "../../redux/slices/commentSlice";

export const AddComment = ({url}) => {

  const [ input, setInput ] = React.useState("");

  const disptach = useDispatch();
  
  return (
    <>
      <div className={styles.root}>
        <Avatar
          classes={{ root: styles.avatar }}
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <div className={styles.form}>
          <TextField
            label="Написать комментарий"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <Button onClick={() => disptach(fetchComment({params: input,url: url}))} variant="contained">Отправить</Button>
        </div>
      </div>
    </>
  );
};