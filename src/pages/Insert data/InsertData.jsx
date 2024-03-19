import React, { useState } from "react";
import { database, imgDB } from "../../database/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";

import { v4 } from "uuid";

const InsertData = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [iconUrl, seticonUrl] = useState("");
  const [imgUrl, setimgUrl] = useState([""]);

  const value = collection(database, "features");

  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    const imgs = ref(imgDB, `Product/${name}/icon/${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data, "imgs");
      getDownloadURL(data.ref).then((val) => {
        seticonUrl(val);
      });
    });
  };
  const createData = async (e) => {
    e.preventDefault();
    await addDoc(value, {
      category: category,
      description: description,
      name: name,
      iconUrl: iconUrl,
      imgUrl: imgUrl,
    });
    alert("data inserted Successfully");
    setCategory("");
    setDescription("");
    setName("");
    seticonUrl("");
    setimgUrl([""]);
  };
  return (
    <div>
      <form onSubmit={createData}>
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Category</p>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <p>description</p>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p>iconUrl</p>
        <input type="file" onChange={(e) => handleUpload(e)} />
        <p>imgUrl</p>
        <input
          type="text"
          value={imgUrl}
          onChange={(e) => setimgUrl(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InsertData;
