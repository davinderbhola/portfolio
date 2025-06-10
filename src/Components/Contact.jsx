import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    setTimeout(() => {
      setName("");
      setEmail("");
      setNumber("");
      setSubject("");
      setMessage("");
    }, 3500);
  };
  return (
    <section id="section-res" className="pt-20 h-screen ">
      <div className="w-full mb-5 flex flex-col justify-center items-center mt-5 p-4 sm:p-6">
        <h1 className="text-4xl sm:text-5xl font-semibold uppercase mt-5 mb-2 text-white">
          Contact
        </h1>

        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/dsbmoviez@gmail.com"
          method="POST"
          className="w-full sm:w-[90%] md:w-[75%] lg:w-[50%] mt-10 flex flex-col items-center justify-center gap-6 p-6 rounded-xl"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            autoComplete="off"
            className="w-full px-4 py-2 border border-zinc-300 outline-none rounded-lg text-zinc-100 placeholder-zinc-600"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="off"
            className="w-full px-4 py-2 border border-zinc-300 outline-none rounded-lg text-zinc-100 placeholder-zinc-600"
          />
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="tel"
            name="mobile"
            required
            placeholder="Your Mobile No"
            className="input-no-spinner w-full px-4 py-2  border border-zinc-300 outline-none rounded-lg text-zinc-100 placeholder-zinc-600"
          />
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            name="subject"
            placeholder="Your Subject"
            autoComplete="off"
            className="w-full px-4 py-2 border border-zinc-300 outline-none rounded-lg text-zinc-100 placeholder-zinc-600"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            placeholder="Your Message"
            required
            className="w-full h-32 px-4 py-2 border border-zinc-300 outline-none rounded-lg text-zinc-100 placeholder-zinc-600 resize-none"
          ></textarea>

          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_template" value="table"></input>
          <input type="hidden" name="_subject" value="Send our Resume" />
          <input
            type="hidden"
            name="_next"
            value="https://portfolio-tau-gilt-46.vercel.app/"
          ></input>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-zinc-200 outline-none rounded-lg text-black font-semibold text-xl transition duration-200 cursor-pointer hover:bg-zinc-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
