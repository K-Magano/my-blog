import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/KeoMagano.jpg"
          alt="Keo Magano"
          width={250}
          height={250}
        />
      </div>
      <h1>Hi, I'm Keo</h1>
      <p>I am a Software engineer with an interest in front-end development</p>
    </section>
  );
}

export default Hero;
