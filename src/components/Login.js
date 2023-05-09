import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mx-auto">
          <div className="card">
            <div className="card-header bg-info">
              <h2>Login</h2>
            </div>
            <div className="card-body">
              <form method="post">
                <div className="form-group">
                  <label for="Email"></label>
                  <input
                    value={email}
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email Adresinizi Giriniz"
                  ></input>
                </div>
                <div className="form-group">
                  <label for="Şifre"></label>
                  <input
                    value={pass}
                    type="password"
                    className="form-control"
                    name="sifre"
                    placeholder="Şifrenizi Giriniz"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
