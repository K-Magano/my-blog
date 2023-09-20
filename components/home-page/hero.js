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
      <p>I think about the future of tech a lot!</p>
    </section>
  );
}

export default Hero;
