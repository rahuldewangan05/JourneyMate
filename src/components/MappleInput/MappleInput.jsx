import React, { useEffect } from "react";

// Replace <Token> with your actual Mappls API token
const MAPPLS_API_TOKEN = import.meta.env.VITE_MAPPLE_BEARER_TOKEN;

const SearchBoxComponent = ({ onPlaceSelected }) => {
  useEffect(() => {
    // Function to dynamically load the Mappls SDK plugin script
    const loadMapplsScript = (src, callback) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = callback;
      document.head.appendChild(script);
    };

    // Initialize the Mappls search functionality
    const initSearch = () => {
      const optional_config = {
        region: "IND",
        height: 300,
      };

      // Initialize search box after the plugin is loaded
      new window.mappls.search(
        document.getElementById("auto"),
        optional_config,
        (data) => {
          console.log(data);
          if (data && data.length > 0) {
            const result = data[0];
            onPlaceSelected(result.placeName + ", " + result.placeAddress);
            // alert(
            //   `Place: ${result.placeName}, Address: ${result.placeAddress}, eLoc: ${result.eLoc}`
            // );
          }
        }
      );
    };

    // Load the Mappls search plugin
    loadMapplsScript(
      `https://apis.mappls.com/advancedmaps/api/${MAPPLS_API_TOKEN}/map_sdk_plugins?v=3.0`,
      initSearch
    );
  }, []);

  return (
    <div>
      {/* Search input box */}
      <input
        type="text"
        id="auto"
        name="auto"
        className="search-outer form-control as-input"
        placeholder="Search places or eLoc's..."
        required
        spellCheck="false"
        // style={{
        //   width: "300px",
        //   position: "absolute",
        //   zIndex: 999,
        //   fontSize: "15px",
        //   padding: "10px",
        //   border: "1px solid #ddd",
        //   top: "5px",
        //   borderRadius: "10px",
        //   margin: "4px",
        // }}
      />
    </div>
  );
};

export default SearchBoxComponent;
