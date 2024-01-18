import { useState } from "react";
import { AuthenticatedLayout } from "@layouts";
import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import axios from "axios";



export default function DirectorProfileShow({ auth }) {

  const inputChange = (e) => {
    // const key = e.target.name;
    // const value = e.target.value;
    // formIntro[key] = value;
    // let datas = Object.assign({}, formIntro);
    setFormIntro(e.target.value);
    console.log(formIntro);
  }

  const [formIntro, setFormIntro] = useState({
    profile_introduction: ""
  });

  const createIntroduction = async () => {
    console.log('success'),
      await axios
        .post('/director/profile/create'), {
          introduction: formIntro.profile_introduction
        }
          .then((res) => {
            const tempPosts = post;
            tempPosts.push(res.data);
            setPosts(tempPosts)
            setFormIntro('');
          })
          .catch(error => {
            console.log(error);
          })
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <div className="flex justify-between rounded-md p-5 ">

        <div className="w-1/2 rounded-md">
          <div id="profile" className="flex items-center border mb-10">
            <Avatar alt="profile" />
            <div className="mx-5">
              <h1>{auth.user.name}</h1>
              <h3>{auth.user.email}</h3>
            </div>
            <h3>ニックネーム</h3>
          </div>
          <div className="text">
            <div className="introduction">
              <p>{auth.user.introduction}</p>
            </div>
          </div>
          <textarea name="introduction" id="introduction" type="text" cols="30" rows="2" onChange={inputChange}></textarea>
          <div className="btn">
            <Button onClick={createIntroduction}>シェアする</Button>
          </div>
        </div>
        <div className="w-1/2 rounded-md">
          bbbbb
          <div className="container w-4/5 mx-auto border">
            <div className="card border rounded-md h-100 bg-blue-100">
              credit card
            </div>
            <div className="cardNumber my-5">
              <p>XXXXXX-XXXXX-XXX</p>
              <p>XXXXXX-XXXXX-XXX</p>
            </div>
            <div className="detail">
              <p>name:<textarea name="name" cols="30" rows="1" className="w-100%">name</textarea></p>
              <p>2024/01</p>
              <Button>追加</Button>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>


  )
}
