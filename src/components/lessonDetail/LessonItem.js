import React from "react";

const LessonItem = (props) => {
  const { courseCart } = props;
  console.log(courseCart);
  return (
    <>
      {/* items */}
      <div className="flex flex-col items-start justify-start w-full px-4 py-4 bg-gray-50 md:py-6 md:p-6 lg:p-8">
        {/* <p className="text-lg font-semibold leading-6 text-gray-800 md:text-xl xl:leading-5">
          Customer’s Cart
        </p> */}
        <div className="flex flex-col items-start justify-start w-full px-5 pb-5 mt-4 border-b border-gray-200 md:pb-0 md:flex-row md:space-x-6 xl:space-x-8">
          <div className="w-40 h-56 pb-5 mx-auto sm:w-1/2 md:w-3/5 lg-w-full">
            <img
              className="object-cover w-full h-full"
              src={courseCart[5].image1}
              alt=""
            />
          </div>
          <div className="flex flex-col items-start justify-between w-full h-56 space-y-4 md:flex-row md:space-y-0">
            <div className="flex flex-col items-start w-full space-y-10">
              <h3 className="text-xl font-semibold leading-6 text-gray-800 xl:text-2xl ">
                課程：{courseCart[3]}
              </h3>
              <div>
                <p>課程說明</p>
                <p>
                  1.產品為新鮮製做的蛋糕，如有不能吃的成分請事先告知。三歲前的小朋友請避開巧克力等含咖啡因或含酒精的成分
                </p>
              </div>

              <div className="w-full">
                <p className="text-base font-black text-right">
                  價格: {courseCart[4]}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 人數時段 */}
        <div className="flex flex-col items-start justify-between w-full p-5 border-b border-gray-200 md:flex-row sm:pr-0">
          {/* 人數 */}
          <div>
            <div className="leading-none text-gray-800 p">人數</div>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-0">
              <p className="p">大人： {courseCart[1]}</p>
              <p className="p">小孩：{courseCart[2]}</p>
            </div>
          </div>
          {/* 時段 */}
          <div>
            <div className="mt-2 text-sm leading-none text-gray-800 md:mt-0">
              時段
            </div>
            <p>{courseCart[0]}</p>
          </div>
          {/* 按鈕 */}
        </div>
        {/* 注意事項 */}
        <div className="flex flex-col items-start justify-start w-full p-5">
          <p className="text-warning">注意事項：</p>
          <p>• 費用為食材費，所以按人頭數計算</p>
          <p>• 因烘焙材料須提前準備，請先完成線上付款，以便確認材料數量</p>
          <p>• 預定日期 7 日前可免費取消</p>
          <p>• 預定日期前 3 ~ 6 日取消，扣除課程費用 30%</p>
          <p>• 預定日期前 2 日取消，扣除扣除課程費用 40%</p>
          <p>• 預定日期前 1 日取消，扣除扣除課程費用 50%</p>
          <p>
            •
            預定當天所有座位【保留10分鐘】，並需全員到齊，未出席者視為放棄，不退費。
          </p>
          <p>
            • 3次（含）以上訂位未到且未做取消者，半年內將無法再使用線上訂位。
          </p>
        </div>
      </div>
    </>
  );
};

export default LessonItem;
