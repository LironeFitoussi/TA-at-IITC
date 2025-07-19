const LoginForm = () => (
    <form id="login-form" className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-bold">
          Username:
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-bold">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          className="border p-2 w-full"
        />
      </div>
      <button
        type="submit"
        id="login-btn"
        className="bg-blue-500 text-white px-4 py-2"
      >
        Login
      </button>
    </form>
  );
  
  export default LoginForm;
  