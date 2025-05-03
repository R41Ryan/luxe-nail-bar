import { useEffect, useState } from "react";
import "./ServicesPage.css";

function ServicesPage() {
  const [serviceData, setServiceData] = useState([]);
  const [servicesHTML, setServicesHTML] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("JSON/services.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setServiceData(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const generateServicesHTML = () => {
      return serviceData.map((category, categoryIndex) => (
        <div className="category-content" key={categoryIndex}>
          {category.services.map((service, serviceIndex) => (
            <div key={serviceIndex} className="service-item">
              <div className="service-name-price">
                <h3 className="service-name">{service.name}</h3>
                <h3 className="service-price">${service.price}</h3>
              </div>
              {service.description && (
                <p className="service-description">{service.description}</p>
              )}
            </div>
          ))}
          {category.addons && (
            <div className="addons-content">
              <h3>Addons</h3>
              {category.addons.map((addon, addonIndex) => (
                <div key={addonIndex} className="addon-name-price">
                  <h4 className="addon-name">{addon.name}</h4>
                  <h4 className="addon-price">${addon.price}</h4>
                </div>
              ))}
            </div>
          )}
        </div>
      ));
    };

    setServicesHTML(generateServicesHTML());
  }, [serviceData]);

  return (
    <main>
      <section id="services-list-section">
        <h1>Our Services</h1>
        <div className="services-categories">
          {serviceData.map((category, categoryIndex) => (
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
        <div className="services-content">
          {servicesHTML[selectedCategoryIndex]}
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
