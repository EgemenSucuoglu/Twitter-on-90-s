import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Login() {
  const { handleSubmit, register } = useForm({});

  const history = useHistory();

  function gonder(data) {
    axios
      .post("https://wit-courses-api2.onrender.com/login", data)
      .then((res) => {
        localStorage.setItem("twitter90s", res.data.token);
        //  toast.success("kayıt olundu");
        setTimeout(() => {
          history.push("/homepage");
        }, 1000);
      });
  }

  return (
    <div className="login-main">
      <form onSubmit={handleSubmit(gonder)}>
        <div>
          <h2>Login</h2>

          <div className="login-inputs">
            <input
              {...register("email")}
              type="email"
              placeholder="Email Adresinizi Giriniz"
            ></input>

            <input
              {...register("password")}
              type="password"
              placeholder="Şifrenizi Giriniz"
            ></input>
          </div>
          <div className="login-buttons">
            <button onClick={() => history.push("/signup")}> Kayıt Ol </button>
            <button> Gonder </button>
          </div>
        </div>
      </form>
    </div>
  );
}
