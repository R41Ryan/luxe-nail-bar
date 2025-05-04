import { useState, useEffect } from "react";
import "./BeverageMenuPage.css"

function BeverageMenuPage() {
  const [beverageData, setBeverageData] = useState([]);
  const [beverageHTML, setBeverageHTML] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  useEffect(() => {
    const fetchBeverages = async () => {
      try {
        const response = await fetch("JSON/beverages.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBeverageData(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchBeverages();
  }, []);

  useEffect(() => {
    const generateBeveragesHTML = () => {
      return beverageData.map((category, categoryIndex) => (
        <div className="beverage-category-content" key={categoryIndex}>
          {category.beverages.map((beverage, beverageIndex) => (
            <div key={beverageIndex} className="beverage-item">
              <h3 className="beverage-name">{beverage.name}</h3>
              {beverage.description && (
                <p className="beverage-description">{beverage.description}</p>
              )}
            </div>
          ))}
        </div>
      ));
    };

    setBeverageHTML(generateBeveragesHTML());
  }, [beverageData]);

  return (
    <main>
      <section id="beverage-menu-section">
        <h2>Our Complimentary Beverages</h2>
        <p>*1 beverage limit per customer*</p>
        <div className="beverage-menu-container">
          <div className="beverages-categories">
            {beverageData.map((category, categoryIndex) => (
              <button
                key={categoryIndex}
                className={`category-button ${
                  selectedCategoryIndex === categoryIndex ? "active" : ""
                }`}
                onClick={() => setSelectedCategoryIndex(categoryIndex)}
              >
                {category.category}
              </button>
            ))}
          </div>
          <div className="beverages-content">
            {beverageHTML[selectedCategoryIndex]}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BeverageMenuPage;
