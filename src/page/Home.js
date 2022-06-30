import React, { useState } from "react";
import {
  GiFlour,
  GiTeacher,
  GiCardboardBoxClosed,
  GiHealing,
} from "react-icons/gi";
import Card from "../components/home/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../components/home/styles.css";
import { Autoplay } from "swiper";

const s1Post = {
  title: "我們的堅持",
  content:
    "Whether article spirits new her covered hastily sitting her. Money witty books nor son add",
};
const s1Feature = [
  {
    title: "有機食材",
    content: "Whether article spirits new her covered.",
    Icon: GiHealing,
  },
  {
    title: "天然酵母",
    content: "Whether article spirits new her covered.",
    Icon: GiFlour,
  },
  {
    title: "客製化包裝",
    content: "Whether article spirits new her covered.",
    Icon: GiCardboardBoxClosed,
  },
  {
    title: "獨創課程",
    content: "Whether article spirits new her covered.",
    Icon: GiTeacher,
  },
];

const s3Cards = [
  {
    img: "../../images/home/session3/hp-express.png",
    title: "宅配專區",
    context: "可全台宅配商品",
    btnText: "前往宅配商品 ＞",
  },
  {
    img: "../../images/hp-className.png",
    title: "課程預約",
    context: "不容錯過的優質師資與精彩課程",
    btnText: "前往查看課程 ＞",
  },
  {
    img: "../../images/hp-order.png",
    title: "訂購流程",
    context: "我們不得不面對一",
    btnText: "前往訂購須知 ＞",
  },
];

const Home = (props) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <>
      <div className="py-32 bg-light">
        {/* 輪播 */}
        <div className="h-[75vh]">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/images/home/banner1.jpeg`}
                alt="..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/images/home/banner2.jpeg`}
                alt="..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/images/home/banner3.jpeg`}
                alt="..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/images/home/banner4.jpeg`}
                alt="..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/images/home/banner5.jpeg`}
                alt="..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/images/home/banner6.jpeg`}
                alt="..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/images/home/banner7.jpeg`}
                alt="..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/images/home/banner8.jpeg`}
                alt="..."
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`${process.env.PUBLIC_URL}/images/home/banner9.jpeg`}
                alt="..."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* 特色 */}
      <div className="mt-20 ">
        <img
          src="./images/home/cake007.png"
          className="absolute left-0 h-[30vw] -translate-x-1/2 "
          alt=""
        />
        <img
          src="./images/home/cake007.png"
          className="absolute right-0 h-[30vw] translate-x-1/2"
          alt=""
        />
        <div className="px-6 py-12 xl:mx-auto xl:container xl:px-20 ">
          <div className="relative items-center justify-center lg:flex lg:space-x-12 2xl:space-x-6">
            <div className="text-center ">
              <p className="relative text-3xl font-bold leading-9 lg:text-4xl">
                <p className="absolute px-5 text-2xl font-bold -translate-x-1/2 -translate-y-full left-1/2 opacity-30 ">
                  SWEETEN
                </p>
                <span>{s1Post.title}</span>
              </p>
              <p className="w-full mx-auto mt-4 text-lg leading-7 xl:w-7/12">
                <span>{s1Post.content}</span>
                <hr className="mt-4 border-b-2  border-line" />
              </p>

              <div className="grid gap-6 mt-6 md:mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:mt-6 2xl:mt-12">
                {s1Feature.map((Feature) => (
                  <div className="flex items-center">
                    <div className="relative w-16 h-16">
                      <div className="z-20 flex items-center justify-center flex-shrink-0 w-16 h-16 mt-2 mr-3 ">
                        {
                          <Feature.Icon className="p-1 text-6xl border rounded-full  border-line" />
                        }
                      </div>
                    </div>
                    <div className="flex flex-col items-start pt-8 ml-6">
                      <h2 className="text-lg font-semibold leading-4">
                        {Feature.title}
                      </h2>
                      <p className="mt-2 text-base leading-6 lg:w-40 2xl:w-52">
                        {Feature.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 hidden max-w-[20rem] shadow h-[50vh] mt-6 lg:block lg:w-3/5 xl:w-3/5 lg:mt-0">
              <p className="absolute top-0 text-4xl font-bold opacity-50 -translate-y-3/4 -z-10 ">
                SWEETEN食甜
              </p>
              <img
                src={`./images/home/lesson.jpg`}
                alt="..."
                className="object-cover object-center w-full h-full "
              />
            </div>
          </div>
        </div>
      </div>
      {/* section1 */}
      <section className="px-4 py-8 lg:px-20 md:px-6 md:py-12">
        <div className="items-center justify-around lg:flex">
          <div className="mt-8 lg:w-7/12 lg:mt-0">
            <div className="w-full h-full bg-red-200">
              <img
                src="./images/home/section1-1.jpg"
                alt="apartment design"
                className="hidden w-full sm:block "
              />

              <img
                src="./images/home/section1-1.jpg"
                alt="apartment design"
                className="block w-full sm:hidden"
              />
            </div>
            <div className="grid gap-6 mt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 lg:mt-8 md:mt-6">
              <img
                src="./images/home/section1-2.jpg"
                className="w-full "
                alt="kitchen"
              />
              <img
                src="./images/home/section1-3.jpg"
                className="w-full"
                alt="sitting room"
              />
            </div>
          </div>
          <div className="relative py-10 lg:w-1/3 lg:p-3">
            <div className=" lg:border-2 border-line absolute -translate-x-1/4 -translate-y-[20%] w-[150%] h-[150%]"></div>
            <h1 className="relative text-4xl font-semibold leading-9 ">
              <p className="absolute text-2xl font-bold -translate-y-full opacity-30 ">
                SWEETEN
              </p>
              Indoor Interiors
              <hr className="border-b-2  border-line" />
            </h1>
            <p className="mt-4 text-base leading-6 ">
              Get inspired by our curated selection of luxiwood interiors. We
              hope get inspired to have luxiwood interior yourself. You’ll find
              tips here where you can buy a lot of cool furniture.
            </p>
            <button
              aria-label="view catalogue"
              className="flex items-center mt-6 text-base font-semibold leading-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none md:mt-8 hover:underline"
            >
              View Catalogue
              <svg
                className="mt-1 ml-2"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33325 4H10.6666"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 6.66667L10.6667 4"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 1.33398L10.6667 4.00065"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="px-4 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9">
        <h2 className="text-3xl font-semibold leading-9 lg:text-4xl lg:leading-9 md:leading-7">
          Q & A
        </h2>
        <div className="flex flex-col items-start justify-start mt-4 md:justify-between md:items-start md:flex-row">
          <div>
            <p className="text-base font-normal leading-6 lg:w-8/12 md:w-9/12">
              任何有關 SWEETEN 相關的問題，可以先到這裡看看
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-8 md:flex-row md:space-x-8 md:mt-16">
          <div className="w-full mt-10 md:w-7/12 lg:w-8/12 md:mt-0 sm:mt-14">
            {/* <!-- Shipping Section --> */}
            <div>
              <div className="flex items-center justify-between cursor-pointer ">
                <h3 className="text-xl font-semibold leading-5 ">宅配問題</h3>
                <button
                  aria-label="too"
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setShow(!show)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={show ? "hidden" : "block"}
                      d="M10 4.1665V15.8332"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "font-normal text-base leading-6 mt-4 w-11/12 " +
                  (show ? "block" : "hidden")
                }
              >
                <p className="mb-3">
                  Q: 請問有宅配嗎?
                  <br />
                  A: 我們與黑貓宅急便配合，全台灣(本島)都有提供宅配服務
                  (離島因配送的穩定度不佳，故不提供宅配服務)
                </p>
                <hr />
                <p className="my-3">
                  Q: 請問訂了多久會到?
                  <br />
                  A:
                  結帳頁面可以選您想要收到的日期；週一至週六都有配送，週日休息。
                </p>
                <hr />
                <p className="my-3">
                  Q: 請問需幾天前預訂?
                  <br />
                  A:
                  一般時期約3~4天前預訂；熱門日期會提前開放預購，約14~60天前預訂。
                </p>
                <hr />
                <p className="my-3">
                  Q: 請問配送當天幾點會到?
                  <br />
                  A: 結帳頁面可以指定時段：13點前 /
                  14-18點，如果當日包裹太多有時會小小遲到一下，還請大家體諒
                </p>
                <hr />
                <p className="my-3">
                  Q: 請問可以送到飯店 / 餐廳嗎?
                  <br />
                  A: 可以，收件資料請幫我們填寫飯店 /
                  餐廳的地址&電話，及留下您的聯絡資料；另外請先通知飯店/餐廳人員幫忙代收包裹；若飯店
                  / 餐廳有休息時段，請先確認該時段有人收件，包裹才會順利送達
                </p>
                <hr />
                <p className="my-3">
                  Q: 請問可以送到超商嗎?
                  <br />
                  A: 可以的!，請來電洽詢:03-1234567
                </p>
                <hr />
                <p className="my-3">
                  Q: 請問宅配甜點會不會撞壞呢?
                  <br />
                  A: 甜點本身:
                  從研發開始，就有把宅配穩定度考量進去，避免使用容易在運送中受傷的元素；外包裝:包裝盒、宅配紙箱都有經過特殊尺寸卡榫設計，減低運送時的晃動程度；商品販售前，都會經過無數次宅配穩定度的測試。若收到後，真的發生受傷情形，請立即拍照跟我們聯絡，SWEETEN
                  將火速幫您處理
                </p>
              </div>
            </div>

            <hr className="bg-gray-200 my-7" />

            {/* <!-- Returns Section --> */}
            <div>
              <div className="flex items-center justify-between cursor-pointer ">
                <h3 className="text-xl font-semibold leading-5 ">
                  甜點食用及保存問題
                </h3>
                <button
                  aria-label="too"
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setShow2(!show2)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={show2 ? "hidden" : "block"}
                      d="M10 4.1665V15.8332"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "font-normal text-base leading-6 mt-4 w-11/12 " +
                  (show2 ? "block" : "hidden")
                }
              >
                <p className="mb-3">
                  Q: 甜點收到後可以放多久?
                  <br />
                  A: 低溫蛋糕: 冷凍7天/ 冷藏3天。；常溫蛋糕: 10天；餅乾:
                  30天。甜點開封後，建議盡速食用完畢
                </p>
                <hr />
                <p className="my-3">
                  Q: 蛋糕要怎麼保存?
                  <br />
                  A: 蛋糕收到後請放置冷藏或冷凍保存，冷凍保存:7天 /
                  蛋糕食用前需冷藏退冰，6吋蛋糕冷藏6~48小時內為最佳品嘗時機!
                  食用前請先預留退冰時間
                </p>
                <hr />
                <p className="my-3">
                  Q: 蛋糕要怎麼切才會美美的?
                  <br />
                  A: 請拿金屬的刀子，於爐子 /
                  打火機等火源上輕微加溫後，切下去的蛋糕剖面會非常俐落
                </p>
              </div>
            </div>

            <hr className="bg-gray-200 my-7" />

            {/* <!-- Exchange Section --> */}

            <div>
              <div className="flex items-center justify-between cursor-pointer ">
                <h3 className="text-xl font-semibold leading-5 ">
                  門市自取問題
                </h3>
                <button
                  aria-label="too"
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setShow3(!show3)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={show3 ? "hidden" : "block"}
                      d="M10 4.1665V15.8332"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "font-normal text-base leading-6 mt-4 w-11/12 " +
                  (show3 ? "block" : "hidden")
                }
              >
                <p className="mb-3">
                  Q: 請問有實體門市嗎?
                  <br />
                  A: 有的，和手作 DIY 課程的地址相同，位於中華路二段 55 號
                </p>
                <hr />
                <p className="my-3">
                  Q: 請問自取時間?
                  <br />
                  A:
                  週一至週五，上午11點~下午6點；若時間不剛好或希望假日自取，歡迎來電洽詢另約時間(03-1234567)
                </p>
              </div>
            </div>

            <hr className="bg-gray-200 my-7" />

            {/* Tracking Section */}

            <div>
              <div className="flex items-center justify-between cursor-pointer ">
                <h3 className="text-xl font-semibold leading-5 ">其他</h3>
                <button
                  aria-label="too"
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                  onClick={() => setShow4(!show4)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={show4 ? "hidden" : "block"}
                      d="M10 4.1665V15.8332"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.16602 10H15.8327"
                      stroke="#1F2937"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "font-normal text-base leading-6 mt-4 w-11/12 " +
                  (show4 ? "blcok" : "hidden")
                }
              >
                <p className="mb-3">
                  Q: 請問可以客製化嗎?寫字?
                  <br />
                  A: 較不建議! 因蛋糕食材質地關係，寫字上去後，配送途中容易糊掉!
                  我們有小卡片，若有需要的話，可以在訂購時留言備註，到時候會附上卡片寫上您的祝福。
                </p>
                <hr />
                <p className="my-3">
                  Q: 請問蛋糕、塔、派等商品有附盤叉 / 蠟燭嗎?
                  <br />
                  A: 蛋糕、塔、派等商品 1 顆都會附上 1 組餐具(蛋糕刀X1+盤叉X6)；
                  蠟燭有的，請於訂購時，在留言備註欄位幫我們填寫您要的蠟燭 (問號
                  / 數字)。(有留言才會附上)
                </p>
              </div>
            </div>

            <hr className="bg-gray-200 my-7" />
          </div>
          <div className="relative w-0 -translate-y-1/4 md:w-1/3">
            <div className="absolute w-full h-full border-2  -top-2 -right-2 border-line"></div>
            <div className="absolute w-full h-full border-2  -bottom-2 -left-2 border-line"></div>
            <img
              src="./images/try/bg/277250497_1704009473283446_8648863106187982788_n.jpg"
              alt="Img of Glass bottle"
              className="object-cover w-full h-full shadow"
            />
            {/* <img
              src="https://i.ibb.co/gZMfQJq/pexels-ron-lach-8128069-1-1.png"
              alt="Img of Glass bottle"
              className="block w-full md:hidden "
            /> */}
          </div>
        </div>
      </section>
      {/* section 03 */}
      {/* <section className="flex justify-center py-20 bg-white md:py-44">
        <div className="flex justify-center" style={{ width: "75%" }}>
          <div className="mx-5 md:flex">
            {s3Cards.map((card, i) => {
              return <Card key={i} card={card} />;
            })}
          </div>
        </div>
      </section> */}
      {/* 產品 */}
      <div className="px-4 2xl:mx-auto 2xl:container lg:py-16 lg:px-24 xl:px-20 md:py-12 md:px-6 py-9">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9">服務項目</h1>
          <p className="mt-4 text-base leading-6 text-center sm:w-96 md:w-9/12 lg:w-7/12">
            SWEETEN
            除了提供美味的經典商品外，秉持環保的原則推出即期品特賣專區供客人選擇。
            <br />
            我們也推出一系列的甜點手作 DIY
            課程，提供舒適且完善的設備及新鮮的材料，讓來店體驗的大朋友小朋友可以玩得開心，也吃得開心
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 lg:gap-x-8 md:gap-6 lg:mt-12 md:mt-9">
          <div className="relative flex items-center justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/toProduct.jpg`}
              className="object-cover w-full h-full max-w-lg max-h-96"
              alt=""
            />
            <div className="absolute w-full h-full bg-dark opacity-60"></div>
            <div className="absolute top-0 flex flex-col items-center justify-between w-11/12 h-full py-10">
              <div className="flex flex-col items-center w-4/5 h-full pt-12">
                <h2 className="text-2xl font-semibold leading-normal text-center text-white xl:px-10 md:px-2 px-7">
                  經典商品
                </h2>
                <p className="mt-4 text-base leading-normal text-center text-white xl:px-10 md:px-2 px-7">
                  各式經典甜品一應俱全
                </p>
              </div>
              <div className="w-2/3 px-4 md:w-auto whitespace-nowrap">
                <button className="w-full py-4 text-base font-medium leading-none text-center transition duration-150 bg-white px-11 hover:bg-gray-300 focus:outline-none">
                  前往查看商品
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/expire.jpg`}
              className="object-cover w-full h-full max-w-lg max-h-96"
              alt=""
            />
            <div className="absolute w-full h-full bg-dark opacity-60"></div>
            <div className="absolute top-0 flex flex-col items-center justify-between w-11/12 h-full py-10">
              <div className="flex flex-col items-center w-4/5 h-full pt-12">
                <h2 className="text-2xl font-semibold leading-7 text-center text-white xl:px-10 md:px-2 px-7 lg:leading-7">
                  即期良品
                </h2>
                <p className="mt-4 text-base leading-normal text-center text-white xl:px-10 md:px-2 px-7">
                  環保愛地球，希望減少糧食浪費的情況發生
                </p>
              </div>
              <div className="w-2/3 px-4 md:w-auto whitespace-nowrap">
                <button className="w-full px-8 py-4 text-base font-medium leading-none text-center transition duration-150 bg-white hover:bg-gray-300 focus:outline-none">
                  前往即期品專區
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/home/makeCake.jpg`}
              className="object-cover w-full h-full max-w-lg max-h-96"
              alt=""
            />
            <div className="absolute w-full h-full bg-dark opacity-60"></div>
            <div className="absolute top-0 flex flex-col items-center justify-between w-11/12 h-full py-10">
              <div className="flex flex-col items-center w-4/5 h-full pt-12">
                <h2 className="text-2xl font-semibold leading-normal text-center text-white xl:px-10 md:px-2 px-7 sm:w-auto">
                  手作烘焙課程
                </h2>
                <p className="mt-4 text-base leading-normal text-center text-white xl:px-10 md:px-2 px-7">
                  ​沒有嚴肅的課程，只有提供舒適的環境、專業的設備讓您沈浸在充滿樂趣的甜點
                  DIY 活動！
                </p>
              </div>
              <div className="w-2/3 px-4 md:w-auto whitespace-nowrap">
                <button className="w-full py-4 text-base font-medium leading-none text-center transition duration-150 bg-white px-11 hover:bg-gray-300 focus:outline-none">
                  前往查看課程
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 訂閱 */}
      <div className="pt-20 lg:py-32">
        <div className="relative flex items-center justify-center w-full">
          <img
            src={`${process.env.PUBLIC_URL}/images/home/subscribe.jpg`}
            alt=""
            className="absolute z-0 object-cover w-full h-full xl:block"
          />
          <div className="relative z-40 flex flex-col items-center justify-center w-full px-4 py-10 bg-dark bg-opacity-70 md:my-16 lg:py-16 md:mx-24 md:px-12">
            <h1 className="text-4xl font-semibold leading-9 text-center text-white">
              訂閱我們
            </h1>
            <p className="mt-6 text-base leading-normal text-center text-white">
              訂閱電子報獲取最新產品及優惠資訊
            </p>
            <div className="flex flex-col items-center w-full mt-12 space-y-4 border-white sm:border sm:flex-row lg:w-5/12 sm:space-y-0">
              <input
                className="w-full p-3 text-base font-medium leading-none text-white placeholder-white bg-transparent border border-white sm:border-transparent focus:outline-none"
                placeholder="Email"
              />
              <button className="w-full py-3 bg-white border border-white px-9 focus:outline-none focus:ring-offset-2 focus:ring sm:border-transparent sm:w-auto hover:bg-opacity-75 whitespace-nowrap">
                訂閱
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 照片牆 */}
      <div className="flex flex-col items-center justify-center py-20 bg-gray-50">
        <div className="w-11/12 xl:w-1/2">
          <h1
            tabIndex={0}
            className="text-5xl font-bold text-center 2xl:leading-10 leading-0"
          >
            共同創造美好回憶
          </h1>
          <h2
            role="contentinfo"
            tabIndex={0}
            className="mt-8 text-base leading-normal text-center"
          >
            SWEETEN
            希望除了甜點的美味之外，也能在每個重要的時刻陪伴大家留下最有溫度的記憶。
          </h2>
        </div>

        <div className="flex flex-wrap items-start justify-center px-4 mt-4 2xl:px-20 lg:px-12">
          {/* 左上 */}
          <div className="mt-24">
            <div className="flex items-end ">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/cookie.jpg`}
                alt=""
                className="object-cover w-20 h-20 mr-6 rounded-lg"
              />
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/mango.jpg`}
                alt=""
                className="object-cover w-48 rounded-lg h-36"
              />
            </div>
            <div className="flex items-center justify-end my-6">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/lemon.jpg`}
                alt=""
                className="w-64 rounded-lg"
              />
            </div>
            <div className="flex items-start">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/handMake.jpg`}
                alt=""
                className="object-cover w-48 h-48 rounded-lg"
              />
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/flower.jpg`}
                alt=""
                className="flex-shrink-0 object-cover w-20 h-20 ml-6 rounded-lg object-fit"
              />
            </div>
          </div>

          {/* 右上 */}
          <div className="ml-6 mt-7 md:mt-32">
            <img
              tabIndex={0}
              src={`${process.env.PUBLIC_URL}/images/home/strawberry.jpg`}
              className="object-cover rounded-lg w-72 h-80"
              alt=""
            />
            <div className="flex items-start mt-6">
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/macha.jpg`}
                alt=""
                className="object-cover w-48 h-48 rounded-lg"
              />
              <img
                tabIndex={0}
                src={`${process.env.PUBLIC_URL}/images/home/strCakeRoll.jpg`}
                alt=""
                className="object-cover w-20 h-20 mt-8 ml-6 rounded-lg"
              />
            </div>
          </div>

          {/* 下 */}
          <div className="hidden lg:block lg:ml-6 lg:mt-14">
            <div className="lg:flex ">
              <div>
                <img
                  tabIndex={0}
                  src={`${process.env.PUBLIC_URL}/images/home/store.jpg`}
                  alt=""
                  className="object-cover rounded-lg w-96 h-72 object-fit"
                />
              </div>
              <div>
                <div className="flex ml-6">
                  <img
                    tabIndex={0}
                    src={`${process.env.PUBLIC_URL}/images/home/taro.jpg`}
                    className="object-cover w-20 h-20 rounded-lg mt-14"
                    alt=""
                  />
                  <img
                    tabIndex={0}
                    src={`${process.env.PUBLIC_URL}/images/home/chocoMarka.jpg`}
                    className="object-cover w-20 h-24 ml-6 rounded-lg"
                    alt=""
                  />
                </div>
                <img
                  tabIndex={0}
                  src={`${process.env.PUBLIC_URL}/images/home/make.jpg`}
                  alt=""
                  className="object-cover w-48 h-32 mt-6 ml-6 rounded-lg"
                />
              </div>
            </div>
            <div className="flex mt-6">
              <img
                tabIndex={0}
                className="object-cover w-48 h-48 rounded-lg"
                src={`${process.env.PUBLIC_URL}/images/home/ingredient.jpg`}
                alt=""
              />
              <img
                tabIndex={0}
                className="object-cover h-56 ml-6 rounded-lg w-72"
                src={`${process.env.PUBLIC_URL}/images/home/lesson.jpg`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
