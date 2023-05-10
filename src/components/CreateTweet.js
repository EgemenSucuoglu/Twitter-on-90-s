import { useForm } from "react-hook-form";
import axios from "axios";
import "./CreateTweet.css";

export default function CreateTweet() {
  const { handleSubmit, register } = useForm({});

  function gonder(data) {
    axios
      .post("https://wit-courses-api2.onrender.com/pub/entries", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit(gonder)}>
      <div className="tweet-main">
        <div className="tweet-box">
          <div>Tweet</div>
          <input type="text" {...register("body")} />
        </div>
        <div className="tweet-button">
          <button>Gonder</button>
        </div>
      </div>
    </form>
  );
}
