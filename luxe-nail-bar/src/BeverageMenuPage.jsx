import Collapsible from "./components/collapsible";

function BeverageMenuPage() {
  return (
    <main>
      <section id="beverage-menu-section">
        <h2>Our Complimentary Beverages</h2>
        <div className="beverage-menu-container">
          <Collapsible buttonText={"Mocktails"}>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
          </Collapsible>
          <Collapsible buttonText={"Soft Drinks"}>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
          </Collapsible>
          <Collapsible buttonText={"Hot Drinks"}>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
          </Collapsible>
          <Collapsible buttonText={"Coffee"}>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
          </Collapsible>
          <Collapsible buttonText={"Smoothies"}>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
            <div className="beverage">
              <img src="https://placehold.co/100x100" />
              <h3>Beverage Name</h3>
              <p>Beverage description</p>
            </div>
          </Collapsible>
        </div>
      </section>
    </main>
  );
}

export default BeverageMenuPage;
