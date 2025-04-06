import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa6";
import Swal from "sweetalert2";
import Image from "next/image";
import { useRouter } from "next/router";
function Login() {
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);
  const [loginStatus, setLoginStatus] = useState<string>("");
  const router = useRouter();
  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const getStrengthColor = (strength: number) => {
    switch (strength) {
      case 0:
      case 1:
        return "bg-red-600";
      case 2:
      case 3:
        return "bg-yellow-600";
      case 4:
        return "bg-green-600";
      default:
        return "bg-gray-200";
    }
  };
  const defaultUsername = "chan";
  const defaultPassword = "ChanChan@123!!";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === defaultUsername && password === defaultPassword) {
      setLoginStatus("Login successful");
      SuccessModal();
      router.push("/");
    } else {
      setLoginStatus("Invalid username or password");
    }
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const SuccessModal = () => {
    Swal.fire({
      title: "Login Successfully!",
      icon: "success",
      draggable: true,
      theme: "dark",
    });
  };

  const changeTheme = () => {
    router.push("/login5");
  };

  return (
    <div className="flex w-full min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 items-center poppins-light">
      <div className="flex w-full h-full items-centers justify-center items-center">
        <Image alt="Image" src="/images/falls.gif" fill />
        <div className="bg-blue-600/60 w-[400px] h-[350px] flex flex-col gap-[10px] p-[10px] rounded-[10px] shadow-md z-10 items-center">
          <div className="w-full h-fit text-center">
            <h1 className="poppins-bold text-[20px]">Login</h1>
          </div>
          <div className="w-full h-full gap-[10px] p-[10px]">
            <form
              onSubmit={handleLogin}
              className="w-full h-full flex flex-col gap-[10px] p-[10px]"
            >
              <div className="gap-[10px] items-center flex">
                <FaUserCircle className="text-[30px]" />
                <input
                  placeholder="username"
                  className="w-full h-full p-[10px] border-b outline-0"
                  type="text"
                  onChange={handleUsernameChange}
                  value={username}
                />
              </div>

              <div className="relative gap-[10px] items-center flex">
                <FaUnlock className="text-[23px]" />
                <input
                  placeholder="password"
                  className="w-full h-full p-[10px] pr-[40px] border-b outline-0"
                  type={showPass ? "text" : "password"}
                  onChange={handlePasswordChange}
                  value={password}
                />
                <div
                  className="absolute right-[10px] top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? (
                    <IoMdEyeOff
                      className="text-gray-400 cursor-pointer"
                      size={20}
                    />
                  ) : (
                    <IoMdEye
                      className="text-gray-400 cursor-pointer"
                      size={20}
                    />
                  )}
                </div>
              </div>

              <div className="w-full h-[10px] rounded">
                <div
                  className={`h-full transition-all rounded-[10px] shadow-md duration-500 ${getStrengthColor(
                    checkPasswordStrength(password)
                  )}`}
                  style={{
                    width: `${(checkPasswordStrength(password) / 4) * 100}%`,
                  }}
                ></div>
              </div>

              <div className="gap-[10px]">
                <button className="w-full h-fit p-[10px] gap-[10px] border rounded-[10px] cursor-pointer hover:bg-blue-600/70 poppins-bold text-[16px] outline-0 ">
                  Login
                </button>
              </div>
              <div className="gap-[10px]">
                <button
                  className="w-full h-fit p-[10px] gap-[10px] border rounded-[10px] cursor-pointer hover:bg-blue-600/70 poppins-bold text-[16px] outline-0 "
                  onClick={changeTheme}
                >
                  Change Theme
                </button>
              </div>
              {loginStatus && (
                <p
                  className={`text-sm ${
                    loginStatus === "Login successful"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {loginStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
