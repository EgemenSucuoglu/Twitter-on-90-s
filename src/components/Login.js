import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Login() {
  const { handleSubmit, register } = useForm({});

  let history = useHistory();

  function gonder(data) {
    axios
      .post("https://wit-courses-api2.onrender.com/login", data)
      .then(history.push("/homepage"))
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit(gonder)}>
      <div className="container mt-5 col-6 mx-auto">
        <div className="card">
          <div className="card-header bg-info">
            <h2>Login</h2>
          </div>
          <div className="card-body">
            <form method="post">
              <div className="form-group">
                <label for="Email"></label>
                <input
                  {...register("email")}
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email Adresinizi Giriniz"
                ></input>
              </div>
              <div className="form-group">
                <label for="Şifre"></label>
                <input
                  {...register("password")}
                  type="password"
                  className="form-control"
                  name="sifre"
                  placeholder="Şifrenizi Giriniz"
                ></input>
              </div>
            </form>
          </div>
          <div>
            <button> Gonder </button>
          </div>
        </div>
      </div>
    </form>
  );
}
