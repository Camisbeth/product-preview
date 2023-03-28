import "./styles/global.scss";
import "./styles/variables.scss";

function App() {
  return (
    <section className="section">
      <figure className="figure">
        <img className="img" src="/images/image-product-desktop.jpg" />
      </figure>

      <section className="information">
        <p className="perfume">PERFUME</p>

        <h1 className="title">Gabrielle Essence Eau De Parfum</h1>

        <p className="parrafo">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <section className="prices">
          <p className="price">$149.99</p>
          <p className="second-price">$169.99</p>
        </section>

        <button className="button">
          <img src="/images/icon-cart.svg" />
          Add to Cart
        </button>
      </section>
    </section>
  );
}

export default App;
