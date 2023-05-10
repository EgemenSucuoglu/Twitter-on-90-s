import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function SignUp() {
  //   const [email, setEmail] = useState();
  //   const [pass, setPass] = useState();
  //   const [name, setName] = useState();
  //   const [avatar, setAvatar] = useState();

  const { handleSubmit, register } = useForm({});

  let history = useHistory();

  function gonder(data) {
    axios
      .post("https://wit-courses-api2.onrender.com/signup", data)
      .then((res) => {
        localStorage.setItem("twitter90s", res.data.token);
        // toast.success("kayıt olndu");
        console.log(res.data.token);
        setTimeout(() => {
          history.push("/");
        }, 1000);
      })
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit(gonder)}>
      <div className="signup-main">
        <div>
          <h2>Kayıt Ol</h2>

          <div className="sign-body">
            <input
              {...register("name")}
              type="text"
              placeholder="Isim Giriniz"
            ></input>

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

            <input
              {...register("avatar")}
              type="text"
              placeholder="Avatar Linki Giriniz"
            ></input>
          </div>
        </div>
        <button> Gonder </button>
      </div>
    </form>
  );
}
