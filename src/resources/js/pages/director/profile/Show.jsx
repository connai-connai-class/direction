import { useState } from "react";
import { AuthenticatedLayout } from "@layouts";
import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";
import axios from "axios";



export default function DirectorProfileShow({ auth }) {

  const inputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    const id = e.target.id;
    if (id == "introduction") {
      formData[key] = value;
      let datas = Object.assign({}, formData);
      setFormData(datas);
    } else {
      creditData[key] = value;
      let datas = Object.assign({}, creditData);
      setCreditData(datas);
    }
  }

  const [formData, setFormData] = useState({
    introduction: ""
  });


  const createIntroduction = async () => {
    await axios
      // .post('/api/posts/create',{元の書き方はこっち
      .patch(route('director.profile.update'), {
        introduction: formData.introduction
      })
      .then((res) => {
        const tempPosts = post;
        tempPosts.push(res.data);
        setPosts(tempPosts)
        setFormData('');
      })
      .catch(error => {
        console.log(error);
      })
  };

  const [creditData, setCreditData] = useState({
    name: "",
    card_number: ""
  });

  const createCredit = async () => {
    console.log(creditData);
    await axios
      .post(route('credit_card.update'), {
        name: creditData.name,
        card_number: creditData.card_number
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
              <label>introduction:</label>
            </div>
          </div>
          <textarea id="introduction" name="introduction" type="text" cols="30" rows="2" defaultValue={auth.user.introduction} onChange={inputChange}></textarea>
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
              <div className="credit_card_name flex items-center">
                name:<Input id="credit_card_name" name="name" type="text" onChange={inputChange} />
              </div>
              <div className="credit_card_number">
                number:<Input id="credit_card_number" name="card_number" type="text" onChange={inputChange} />
              </div>
              <p>2024/01</p>
              <Button onClick={createCredit}>追加</Button>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>


  )
}
