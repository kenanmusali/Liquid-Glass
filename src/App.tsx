import { GlassElement } from "./GlassElement/GlassElement";
import "./styles.css";

/**
 * /!\ You need a chromium-based browser to see the effect /!\
 */
export default function App() {
  return (
    <>
      <div className="overlay">
        {/* Glass elements in fixed position + animated translation for better visualization */}
        <GlassElement
          width={200}
          height={500}
          radius={25}
          depth={8}
          blur={0.8}
          chromaticAberration={0}
          debug={false}
        >
          {/* your text/JSX inside */}
          <div className="tag">
            <div className="title">Moon</div>
            <div className="subtitle">Apollo 11</div>
          </div>
        </GlassElement>

     
      </div>

      <img src="/images/AS11-40-5865HR.webp" alt="" />
      <img src="/images/AS11-40-5872HR.webp" alt="" />
      <img src="/images/AS11-40-5877HR.webp" alt="" />
      <img src="/images/AS11-40-5899HR.webp" alt="" />
      <img src="/images/AS11-40-5902HR.webp" alt="" />
      <img src="/images/AS11-40-6642HR.webp" alt="" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        ullam, saepe eos maiores, et recusandae quis incidunt, corrupti atque
        eum ab fugiat? Recusandae illum iure, voluptate accusamus minus maxime
        rem? Doloremque sint repudiandae unde quos ipsa alias, repellat nulla
        recusandae quisquam commodi aliquid iusto, suscipit quidem et ratione
        deleniti nisi nemo deserunt! Fuga dignissimos ea aspernatur, excepturi
        voluptatem rerum quas. Consectetur consequuntur reprehenderit illum quod
        alias commodi aliquam temporibus adipisci, atque sequi ducimus dolor
        laboriosam expedita debitis nulla maxime nesciunt praesentium. Illum
        labore molestiae necessitatibus quae voluptates illo a magnam. Dolorum
        eveniet pariatur, ipsam veritatis libero sed consectetur reiciendis
        laudantium aut quo maxime accusamus natus unde culpa architecto
        repellendus, rem, iure ducimus! Corrupti corporis recusandae commodi
        earum. Laudantium, nihil harum. Sequi ab, voluptate officiis quam et
        accusantium fugiat laudantium odio ad! Perspiciatis voluptatum, illum
        aut aliquid, tempore animi harum laboriosam sapiente commodi doloribus
        rem laborum sequi, temporibus ab dolorum repellat!
      </p>
    </>
  );
}
