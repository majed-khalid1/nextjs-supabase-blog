import GoogleLogin from "@/components/googleLogin";

const LoginPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold">Login</h1>

        <GoogleLogin />
      </div>
    </div>
  );
};

export default LoginPage;
