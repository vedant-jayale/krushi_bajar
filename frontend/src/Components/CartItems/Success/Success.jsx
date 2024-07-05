import React from 'react';
import { Link } from 'react-router-dom';
import './Success.css';

const SuccessPage = () => {
  return (
    <div className="success-container">
      <h1>भुगतान सफल!</h1>
      <p>आपका विश्वास और सहयोग के लिए हम आपको धन्यवाद कहते हैं।</p>
      <p>हमने आपकी भुगतान सफलतापूर्वक प्राप्त की है।</p>
      <p>आपका ऑर्डर हमें सफलतापूर्वक मिल गया है।</p>
      <p>हम आपसे संपर्क करेंगे और आपकी पुष्टि के बाद हम आपसे संपर्क करेंगे।</p>
      <p>अधिक जानकारी के लिए हमारे संपर्क और हमारे बारे में पेज देखें।</p>
      <Link to="/" className="see-more-link">
        और अधिक उत्पाद देखें
      </Link>
    </div>
  );
};

export default SuccessPage;
