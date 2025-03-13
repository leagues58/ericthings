import { ArrowIcon } from "app/components/arrowIcon";
import Image from "next/image";
import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"


export default function Page() {
  return (
    <section className="text-neutral-300">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About
      </h1>
      <div className="flex p-2 flex-col md:flex-row">
        <div className={"flex flex-col mx-5"}>
            <p className="mb-6 tracking-tighter">
              My name is Eric Reeves. I'm a software developer, though I spend most of my time thinking about cars.
              <br/>I also like to think up ways to use software to improve my life, but I usually give up when I realize
              that the true ideal is to have no software at all.
              <br/><br/>Life would be better on a farm.
              <br/><br/>
                Feel free to reach out on any of the below platforms!
            </p>

          <span className="flex">
            <LinkedInLogoIcon className=" m-3"/>
            <a className="flex transition-all items-center hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank" href={'https://www.linkedin.com/in/eric-reeves-a984a192/'}>LinkedIn </a>
          </span>
          <hr/>
          <span className="flex">
            <GitHubLogoIcon className=" m-3" />
            <a className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank" href={'https://github.com/leagues58'}>Github </a>
          </span>
          <hr/> 
          <span className="flex">
            <EnvelopeClosedIcon className=" m-3"/> <span className="flex items-center">ericlreeves@gmail.com</span>
          </span>

        </div>
        <Image className={""} src={'/img/me.jpg'} alt="a picture of me" width={350} height={500}/>
      </div>
    </section>
  )
}
