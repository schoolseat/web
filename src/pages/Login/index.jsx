const App = () => {
  return (
    <>
      <div className="bg-slateblue w-2/5 h-full float-left fixed grid place-items-center">
        <img src="https://i.imgur.com/6LJVlRf.png" alt="help icon" />
      </div>
      <div className="w-3/5 h-full float-right">
        <div className="ml-72 grid">
          <h1 className="text-4xl text-gray-900 font-bold font-roboto mt-56 leading-9">Login</h1>

          <p className="text-gray-700 mt-6 text-base font-normal mb-2.5">Email</p>
          <input className="rounded-md w-80 placeholder-gray-800::placeholder border-lavander border h-12" type="text" placeholder="john.doe@email.com" />

          <p className="text-gray-700 mt-6 text-base font-normal mb-2.5">Password</p>
          <input className="rounded-md w-80 placeholder-gray-800::placeholder border-lavander border h-12" type="password" placeholder="*********" />

          <br /><br />
          <div className="flex justify-center w-80">
            <button type="subimit" className="bg-mediumseagreen w-72 rounded-md pt-4 pb-4 text-white text-lg">Login</button>
          </div>
          <br />
          <div className="flex justify-center w-80">
            <span className="block leading-8 text-lg">Or</span>
          </div>
          <br />
          <div className="flex justify-center w-80">
            <button type="subimit" className="bg-gray-800 w-72 rounded-md pt-4 pb-4 text-white text-lg flex items-center justify-center">
              <img src="https://i.imgur.com/NFFAn76.png" alt="google logo" width="20" height="20" className="mr-60" />
              <span className="absolute">Login with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
