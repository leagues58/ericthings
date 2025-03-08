import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About
      </h1>
      <div className="my-8 flex flex-row">
        <div className={"px-10"}>
            This is where stuff about me will go!
            I'm difficult to get a hold of, but please try my pigeon service if email doesn't work.
        </div>
        <Image className={"px-10"} src={'/img/me.jpg'} alt="a picture of me" width={400} height={400}/>
      </div>
    </section>
  )
}
