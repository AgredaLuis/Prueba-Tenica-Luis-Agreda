import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useGlobalContext } from "../../../context/global.context";
import { loginUser } from "../../../services";
import { Link, useNavigate } from "react-router-dom";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<LoginFormInputs>({
    mode: "onChange", // Valida en tiempo real
  });

  const [loginError, setLoginError] = useState<string | null>(null);
  const { setValue } = useGlobalContext();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoginError(null); 

    try {
      
      const { token } = await loginUser(data.email, data.password);
      setValue(token); 
      alert("Inicio de sesión exitoso. Token guardado en contexto.");
      reset();
      navigate("/home");

    } catch (error) {
      setLoginError("Hubo un error al iniciar sesión. Inténtalo nuevamente.");
    }
  };

  return (
    <>
      <h2 className="border-l-8 border-[#FE6845] pl-4 uppercase font-bold text-[#4D4F5C] text-2xl">
        BIENVENIDO
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-2">
        <div className="mb-2 input-shadow">
          <label
            htmlFor="UserEmail"
            className="relative block overflow-hidden rounded-md px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="email"
              id="UserEmail"
              placeholder="Email"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              {...register("email", {
                required: "El correo electrónico es obligatorio.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Introduce un correo válido.",
                },
              })}
            />

            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs uppercase text-[#A4AFB7] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Email
            </span>
          </label>
        </div>
        <div className="mb-2 input-shadow">
          <label
            htmlFor="UserPassword"
            className="relative block overflow-hidden rounded-md px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="password"
              id="UserPassword"
              placeholder="Password"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              {...register("password", {
                required: "La contraseña es obligatoria.",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres.",
                },
              })}
            />

            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs uppercase text-[#A4AFB7] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              contraseña
            </span>
          </label>
        </div>
        <a
          href="#"
          className=" ml-auto hover:text-primary/70 mb-8 text-sm text-[#A4AFB7]"
        >
          ¿Olvidaste tu contraseña?
        </a>
        <button
          type="submit"
          className={`uppercase mx-auto main-button font-bold ${
            !isValid || isSubmitting ? "opacity-50" : ""
          }`}
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? "Cargando..." : "Iniciar Sesión"}
        </button>
        {loginError && (
          <p className="text-red-600 text-sm mt-4 text-center">{loginError}</p>
        )}
      </form>

      <p className="text-center text-sm text-muted-foreground uppercase text-[#A4AFB7]">
        AUN NO TIENGO CUENTA{" "}
        <a href="#" className="hover:text-primary/70 uppercase text-[#015F91]">
          REGISTRARSE
        </a>
      </p>
    </>
  );
};
export default LoginForm;
