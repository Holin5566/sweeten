import React from "react";
import { Button } from "@material-tailwind/react";

const CourseContent = (props) => {
  const { lessons, swipe, toggle, lessonImage, WhileLoading } = props;
  let a = swipe;
  console.log(lessonImage);

  // console.log(image[0].image1);
  return (
    <>
      <div className="h-full mb-5 lg:flex">
        <div className="relative w-full lg:-translate-x-5 ">
          <div className="h-0 lg:w-4/6 lg:h-full lg:ml-auto lg:mr-4">
            {/* 第一張圖 */}
            <WhileLoading
              done={
                <img
                  src={lessonImage[a]?.image3}
                  className="object-cover h-full"
                  alt=""
                />
              }
              onLoad={
                <div class="relative border border-primary shadow w-full h-full mx-auto object-cover m-auto rounded-lg">
                  <div class="animate-load flex space-x-4 flex-col my-5 gap-10">
                    {/* 圓 */}
                    <div class="rounded-full bg-primary h-36 w-36 mx-auto"></div>
                    <div class="flex-1 space-y-6 py-1 pr-4">
                      <div class="h-2 bg-primary rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-primary rounded col-span-2"></div>
                          <div class="h-2 bg-primary rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-primary rounded"></div>
                      </div>
                      <div class="h-2 bg-primary rounded hidden lg:block"></div>
                      <div class="h-2 bg-primary rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-primary rounded col-span-2"></div>
                          <div class="h-2 bg-primary rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-primary rounded"></div>
                      </div>
                      <div class="h-2 bg-primary rounded hidden lg:block"></div>
                      <div class="h-2 bg-primary rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-primary rounded col-span-2"></div>
                          <div class="h-2 bg-primary rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-primary rounded"></div>
                      </div>
                      {/* <div class="h-2 bg-primary rounded hidden lg:block"></div>
                      <div class="h-2 bg-primary rounded"></div> */}
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          <div className="absolute h-0 lg:z-20 lg:w-1/2 lg:h-2/3 lg:top-1/2 lg:-translate-y-1/2 lg:left-12">
            <div className="absolute top-0 w-full h-full translate-x-3 translate-y-3 bg-white border border-line"></div>
            {/* 第二張圖 */}
            <WhileLoading
              done={
                <img
                  src={lessonImage[a]?.image2}
                  className="relative object-cover w-full h-full"
                  alt=""
                />
              }
              onLoad={
                <div class="relative border border-primary shadow w-full h-full mx-auto object-cover m-auto rounded-lg">
                  <div class="animate-load flex space-x-4 flex-col my-5 gap-10">
                    {/* 圓 */}
                    <div class="rounded-full bg-primary h-36 w-36 mx-auto"></div>
                    <div class="flex-1 space-y-6 py-1 pr-4">
                      <div class="h-2 bg-primary rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-primary rounded col-span-2"></div>
                          <div class="h-2 bg-primary rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-primary rounded"></div>
                      </div>
                      <div class="h-2 bg-primary rounded hidden lg:block"></div>
                      <div class="h-2 bg-primary rounded"></div>
                      <div class="space-y-3">
                        {/* <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-primary rounded col-span-2"></div>
                          <div class="h-2 bg-primary rounded col-span-1"></div>
                        </div> */}
                        {/* <div class="h-2 bg-primary rounded"></div> */}
                      </div>
                    </div>
                  </div>
                </div>
              }
            />

            {/* 授課教師：XXX */}
            <WhileLoading
              done={
                <>
                  <div
                    style={{
                      transform: " translate(40px, -43px)",
                    }}
                    className=" lg:absolute sm:px-14 lg:py-5 lg:px-28 lg:z-3 lg:opacity-80 lg:bg-yellow-300"
                  ></div>
                  <div
                    style={{
                      transform: " translate(30px, -50px)",
                    }}
                    className=" lg:absolute sm:px-14 lg:py-5 lg:px-28 lg:z-4 lg:opacity-80 lg:bg-secondary"
                  ></div>

                  <div className="hidden text-black lg:flex lg:font-bold lg:absolute lg:translate-x-16 lg:-translate-y-11 lg:z-4 lg:h3 sm:p">
                    {lessonImage[a]?.teacher}
                  </div>
                </>
              }
              onLoad={<></>}
            />
          </div>
          {/* <div className=" absolute lg:z-10 bg-grey-50 sm:h-80 lg:w-1/2 lg:h-[410px] lg:top-1/2 lg:-translate-y-1/2 lg:left-12 lg:translate-x-4"></div> */}
        </div>
        <div className="w-full max-w-md min-w-0 mx-auto mt-16 break-words bg-white border border-black xl:max-w-xl">
          <div className="mx-4 -mt-6 -translate-y-16 ">
            {/* 第三張圖 */}
            <WhileLoading
              done={
                <div className="">
                  <img
                    className="object-cover w-full m-auto rounded-lg h-80 lg:h-96"
                    src={lessonImage[a].image1}
                    alt=""
                  />
                </div>
              }
              onLoad={
                <div class="border border-primary shadow w-full h-full lg:h-96 mx-auto object-cover m-auto rounded-lg">
                  <div class="animate-load flex space-x-4 flex-col my-5 gap-10">
                    {/* 圓 */}
                    <div class="rounded-full bg-primary h-36 w-36 mx-auto"></div>
                    <div class="flex-1 space-y-6 py-1 pr-4">
                      <div class="h-2 bg-primary rounded"></div>
                      <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                          <div class="h-2 bg-primary rounded col-span-2"></div>
                          <div class="h-2 bg-primary rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-primary rounded"></div>
                      </div>
                      <div class="h-2 bg-primary rounded hidden lg:block"></div>
                      <div class="h-2 bg-primary rounded"></div>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
          <div className="px-10 pb-10 -mt-5">
            <div className="h1">{lessons[a]?.name}</div>

            <p className="mt-4 mb-4 opcacity-60 p">{lessons[a]?.description}</p>
            <div className="inline-block mt-2 mr-2">
              <button
                type="button"
                className="w-20 ml-3 text-white h-14 bg-warning hover:"
                onClick={toggle}
              >
                預約課程
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContent;
