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
    <div className="">
      <div className="flex flex-col-reverse gap-2">
        {entries.map((e) => (
          <div
            className="p-4 bg-neutral-100 rounded-md flex gap-2 items-center"
            key={e.id}
          >
            <span className="flex-1">{e.body}</span>
            <span
              className="text-sm cursor-pointer underline"
              onClick={() => sil(e.id)}
            >
              Sil
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
