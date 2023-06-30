const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form className="flex flex-col gap-y-4" action="">
        <input
          className="px-6 py-2 border-[1px] border-gray-600 focus-within:outline-none rounded-md"
          type="text"
          name="username"
          placeholder="Enter username"
        />
        <input
          className="px-6 py-2 border-[1px] border-gray-600 focus-within:outline-none rounded-md"
          type="passwrod"
          name="password"
          placeholder="Enter password"
        />
        <input
          className="px-6 py-2 text-2xl font-semibold bg-blue-400 text-white rounded"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default LoginPage;
