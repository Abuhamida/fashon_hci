import React from "react";

function page() {
  return (
    <div className=" flex flex-col items-start w-full ">
      <div className="py-[7rem] bg-accent w-full px-2 md:px-20 font-black leading-none">
        <h1 className=" text-[42px] md:text-[62px] text-primary">Your favorite questions</h1>
        <h1 className=" text-[42px] md:text-[62px] ">and our answers to them</h1>
      </div>
      <div className="py-10 md:py-[7rem] px-3 md:px-20 items-start max-w-5xl">
        <div className=" flex flex-col gap-5">
          <h1 className=" text-4xl md:text-[42px] text-black font-bold mb-2">
            General Info.
          </h1>
          <div className=" flex flex-col gap-5">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-b shadow-none rounded-none  focus:text-[#0c63e4] "
            >
              <div className="collapse-title text-[24px] font-medium py-6 pr-5 pl-0 md:px-0">
                What is this Little Fashion?
              </div>
              <div className="collapse-content px-0 text-xl text-secondary">
                <p className="mb-4">
                  <span className=" font-bold"> Little Fashion </span>
                  is free Bootstrap 5 website template for everyone. There are 8
                  HTML pages included in this template and you can expand more
                  pages as you need.
                </p>
                <p className="mb-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div
              tabIndex={1}
              className="collapse collapse-arrow border-b shadow-none rounded-none  focus:text-[#0c63e4] "
            >
              <div className="collapse-title text-[24px] font-medium py-6 pr-5 pl-0 md:px-0">
                What is Tooplate website?
              </div>
              <div className="collapse-content px-0 text-xl text-secondary">
                <p>
                  Tooplate is a great website to download free HTML website
                  templates for your business or personal use. Tooplate website
                  has been online for almost 8 years now. Thank you for visiting
                  our website.
                </p>
              </div>
            </div>
          </div>
          <div
            tabIndex={2}
            className="collapse collapse-arrow border-b shadow-none rounded-none  focus:text-[#0c63e4] "
          >
            <div className="collapse-title text-[24px] font-medium py-6 pr-5 pl-0 md:px-0">
              How do I support your website?
            </div>
            <div className="collapse-content px-0 text-xl text-secondary">
              <p>
                You can support our Tooplate website by sharing it to your
                friends or colleagues on the web or social media.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl md:text-[42px] text-black font-bold mt-12 mb-2">
            About <span className=" text-primary">our products</span>
          </h1>
          <div className="flex flex-col gap-5 ">
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-b shadow-none rounded-none  focus:text-[#0c63e4] "
            >
              <div className="collapse-title text-[24px] font-medium py-6 pr-5 pl-0 md:px-0">
                What is Fashion Design?
              </div>
              <div className="collapse-content text-secondary px-0 ">
                <p className="mb-4">
                  <span className=" font-bold">Lorem ipsum</span>
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.
                </p>
                <p className="mb-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-b shadow-none rounded-none  focus:text-[#0c63e4] "
            >
              <div className="collapse-title text-[24px] font-medium py-6 pr-5 pl-0 md:px-0">
                How do I use the product?
              </div>
              <div className="collapse-content px-0 text-xl text-secondary">
                <p>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
