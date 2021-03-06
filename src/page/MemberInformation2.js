import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '@material-tailwind/react';
import { API_URL } from '../utils/config';
import axios from 'axios';

const MemberInformation = () => {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    nickname: 'aaa',
    name: 'aaa',
    email: '123@com',
    phone: '0912345678',
    birthday: '',
    photo: '',
  });
  console.log(member);
  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value });
  }

  function handlePhoto(e) {
    setMember({ ...member, photo: e.target.files[0] });
  }

  async function handleSubmit(e) {
    try {
      let response = axios.post(`${API_URL}/user/page`, member);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex h-full flex-nowrap">
      {/* Sidebar starts */}
      <div className="flex-col justify-between hidden w-64 md:h-full sm:flex md:block">
        <div className="px-8">
          <div className="flex items-center w-full h-16 mt-10">
            <img
              className="mx-auto"
              src={
                process.env.PUBLIC_URL +
                '/images/memberInformation/user_small.png'
              }
              alt=""
            />
          </div>
          <ul className="mt-14">
            <li className="flex items-center justify-between w-full mb-6 text-gray-300 cursor-pointer hover:text-gray-500">
              <butto
                onClick={() => {
                  navigate('/main/member/information');
                }}
                className="flex mx-auto p"
              >
                我的帳戶
              </butto>
            </li>
            <li className="flex items-center justify-between w-full mb-6 text-gray-300 cursor-pointer hover:text-gray-500">
              <butto
                onClick={() => {
                  navigate('/main/member/order');
                }}
                className="flex mx-auto p"
              >
                訂單查詢
              </butto>
            </li>
            <li className="flex items-center justify-between w-full mb-6 text-gray-300 cursor-pointer hover:text-gray-500">
              <butto
                onClick={() => {
                  navigate('/main/member/collection');
                }}
                className="flex mx-auto p"
              >
                蒐藏清單
              </butto>
            </li>
          </ul>
        </div>
      </div>
      {/* Sidebar ends */}

      <div className="container w-11/12 h-full px-6 mx-auto md:w-4/5">
        <div className="w-full h-full border-gray-300 rounded">
          <div className="px-2">
            <h2 className="py-2 border-b-2 h2 border-line">我的檔案</h2>
            <div className="flex justify-around mx-1 mt-10">
              <form>
                <div className="mb-2 md:flex md:items-center">
                  <div className="md:w-1/4">
                    <label
                      className="block pr-4 mb-1 md:mb-0"
                      for="inline-full-name"
                    >
                      暱稱
                    </label>
                  </div>
                  <div className="mx-4">
                    <Input
                      id="nickname"
                      name="nickname"
                      variant="standard"
                      color="brow"
                      placeholder
                      type="text"
                      required
                      value={member.nickname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-2 md:flex md:items-center">
                  <div className="md:w-1/4">
                    <label
                      className="block pr-4 mb-1 md:mb-0"
                      for="inline-full-name"
                    >
                      姓名
                    </label>
                  </div>
                  <div className="mx-4">
                    <Input
                      variant="standard"
                      color="brown"
                      placeholder
                      type="text"
                      required
                      id="name"
                      name="name"
                      value={member.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-2 md:flex md:items-center">
                  <div className="md:w-1/4">
                    <label
                      className="block pr-4 mb-1 md:mb-0"
                      for="inline-full-name"
                    >
                      E-mail
                    </label>
                  </div>
                  <div className="mx-4">
                    <Input
                      id="email"
                      name="email"
                      variant="standard"
                      color="brown"
                      type="email"
                      placeholder=""
                      required
                      value={member.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-2 md:flex md:items-center">
                  <div className="md:w-1/4">
                    <label
                      className="block mb-1 md:mb-0 "
                      for="inline-full-name"
                    >
                      手機號碼
                    </label>
                  </div>
                  <div className="mx-4">
                    <Input
                      variant="standard"
                      color="brown"
                      type="tel"
                      placeholder=""
                      id="phone"
                      name="phone"
                      value={member.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center">
                  <div className="md:w-1/4">
                    <label
                      className="block mb-1 md:mb-0"
                      for="inline-full-name"
                    >
                      生日
                    </label>
                  </div>
                  <div className="mx-4">
                    <Input
                      variant="standard"
                      color="brown"
                      placeholder=""
                      id="birthday"
                      name="birthday"
                      type="date"
                      value={member.birthday}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <Button
                    className="flex mx-auto bg-dark"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    儲存設定
                  </Button>
                </div>
              </form>
              {/* 桌機板中間的桿桿 */}
              <div className="hidden border border-line md:block"></div>
              {/* 桌機版使用者圖片 */}
              <div className="hidden md:block">
                <div>
                  <img
                    className="mx-auto"
                    src={
                      process.env.PUBLIC_URL +
                      '/images/memberInformation/user_pic.png'
                    }
                    alt=""
                  />
                </div>
                <div className="mt-5 text-center">
                  <input
                    size="sm"
                    label="選擇圖片"
                    type="file"
                    id="photo"
                    className="border-2 rounded-sm "
                    nmae="photo"
                  />
                </div>
                <p className="mt-4 text-center note">檔案大小：最大3MB</p>
                <p className="text-center note">檔案格式：JPG, PNG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberInformation;
