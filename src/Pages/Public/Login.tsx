import LoginForm from "./components/LoginForm";

export const Login = () => {
  return (
    <div className="flex items-center justify-center md:h-[95vh] md:px-10 lg:px-28">
      <div className="container h-[80vh] flex-col justify-center items-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* columna de Image */}

        <div className="relative bg-auth hidden h-full flex-col p-10 lg:flex lg:justify-center ">
          <figure className="bg-white w-[300px] h-[300px] rounded-full flex justify-center z-20">
            <img src="/pet.svg" alt="Logo" />
          </figure>
        </div>

        {/* columna de form */}

        <div className="pt-10 lg:p-0 flex items-center md:h-[75vh]">
          <div className="mx-auto w-full flex-col justify-center space-y-8 sm:w-[450px]">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};
