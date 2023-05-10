import { useEffect, useState } from "react";
import axios from "axios";

export default function TweetFeed() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios
      .get("https://wit-courses-api2.onrender.com/entries")
      .then((res) => setEntries(res.data))
      .catch((err) => console.log(err));
  }, [entries]);

  function sil(id) {
    axios
      .delete("https://wit-courses-api2.onrender.com/pub/entries/" + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="text-[#791ece] feed flex flex-col-reverse gap-2 p-1">
      {entries.map((e) => (
        <div
          className="p-3 bg-[#9bebd0] rounded-md flex gap-2 items-center"
          key={e.id}
        >
          <span className="flex-1">{e.body}</span>
          <span
            className="bg-[#f7e61c] text-black p-2  cursor-pointer rounded-md"
            onClick={() => sil(e.id)}
          >
            Sil
          </span>
        </div>
      ))}
    </div>
  );
}
