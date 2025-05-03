import { useEffect, useState } from "react";

function ServicesPage() {
  const [serviceData, setServiceData] = useState([]);
  const [servicesHTML, setServicesHTML] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(-1);

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
      return serviceData.map((category, categoryIndex) => <div key={categoryIndex}>
        <h2>{category.category}</h2>
        <div className="services-list">
          {category.services.map((service, serviceIndex) => (
            <div key={serviceIndex} className="service-item">
              <div className="service-name-price">
                <h3>{service.name}</h3>
                <p>${service.price}</p>
              </div>
              {service.description && <p className="service-description">{service.description}</p>}
            </div>
          ))}
        </div>
      </div>);
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
              className={`category-button ${selectedCategoryIndex === categoryIndex ? "active" : ""}`}
              onClick={() => setSelectedCategoryIndex(selectedCategoryIndex === categoryIndex ? -1 : categoryIndex)}
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
