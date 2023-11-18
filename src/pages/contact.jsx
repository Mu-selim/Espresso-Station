import bg from "../assets/images/10.jpg";

export const Contact = () => {
  return (
    <main
      className="flex w-full items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh)",
      }}
    >
      <div className="mx-auto mt-4 rounded-xl bg-coffee-light p-12 md:w-2/3 lg:w-1/2">
        <div className="-m-2 flex flex-col flex-wrap sm:flex-row">
          <div className="w-full p-2 sm:w-1/2">
            <div className="relative">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                الاسم
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-coffee-dark"
              />
            </div>
          </div>
          <div className="p-2 sm:w-1/2">
            <div className="relative">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                الايميل
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-coffee-dark"
              />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="relative">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                رسالتك
              </label>
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-coffee-dark"
              ></textarea>
            </div>
          </div>
          <div className="w-full p-2">
            <button className="mx-auto flex rounded border-0 bg-coffee px-8 py-2 text-lg text-white hover:bg-coffee-dark focus:outline-none">
              ارسال
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
