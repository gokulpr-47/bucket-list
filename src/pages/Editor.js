import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Editor.css";
import { useLocation } from "react-router-dom";
import { onValue, ref, serverTimestamp, update } from "firebase/database";
import { db } from "../util/initFirebase";
// import useEditing from "../hooks/useEditing";
import useAuth from "../hooks/useAuth";

export default function Editor() {
  const [value, setValue] = useState(""); //storing the values entered in the editor.
  const [user, setUser] = useState(); //storing active user to check if there is an active user in the editor
  // const { pathname, setPathname } = useEditing();
  const help = useRef("");

  const { userid } = useAuth(); // id of the logged in user

  const quill = useRef();

  const location = useLocation();

  const listname = location.state.listName;
  const path = location.state.path;
  const bucket = location.state.bucket;
  const uuid = location.state.uuid;

  // let help = "";

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const dbvalue = snapshot.val();
      if (dbvalue !== null) {
        var bucketObj = Object.values(dbvalue.bucket).find(
          (buckets) => buckets.bucketName === bucket,
        );
        const editorObj =
          bucketObj.list &&
          Object.values(bucketObj.list).find((list) => list.uuid === uuid);
        setValue(editorObj.value);
        setUser(editorObj.activeUser);
        help.current = JSON.stringify(editorObj.activeUser);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return async () => {
      help === JSON.stringify(userid) &&
        (await update(ref(db, path), {
          activeUser: null,
          lastedit: serverTimestamp(),
        }));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (value && value.length > 0 && user === userid) {
      update(ref(db, path), {
        value,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  let modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  let formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div className="editor-container">
      <h1>{listname}</h1>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        ref={quill}
        modules={modules}
        formats={formats}
        readOnly={user !== userid ? true : false}
      />
    </div>
  );
}
