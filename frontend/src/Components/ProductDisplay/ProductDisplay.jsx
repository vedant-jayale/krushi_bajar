import React, { useContext } from 'react';
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
   

    // Check if the product object exists before accessing its properties
    if (!product) {
        return null; // Return null if the product object is undefined
    }

    // Function to convert English category to Hindi
    const getCategoryInHindi = (category) => {
        switch (category) {
            case 'insecticides':
                return 'कीटकनाशक (Insecticides)';
            case 'fungicides':
                return 'कवकनाशक (Fungicides)';
            case 'tonics':
                return 'टॉनिक (Tonics)';
            case 'fertilizers':
                return 'रसायनिक खाद्य (Fertilizers)';
            default:
                return category; // Return the category as is if not found in the switch case
        }
    };

    // Function to get subcategory description based on product name
    const getSubcategoryDescription = (name) => {
        if (name.toLowerCase().includes('seed')) {
            return `यह ${name} एक बीज है जो फसलों की उच्च गुणवत्ता और उत्पादन सुनिश्चित करने के लिए प्रयोग किया जाता है। यह बीज विभिन्न प्रकार की जलवायु और मिट्टी के अनुकूल है, और इसे खेती के विभिन्न तरीकों से उगाया जा सकता है। उच्च अंकुरण दर और रोग प्रतिरोधकता के साथ, यह बीज फसलों की उच्च उत्पादकता और बेहतर पोषण मूल्य प्रदान करता है।`;
        } else if (name.toLowerCase().includes('torch')) {
            return `यह ${name} एक टॉर्च है जो अंधेरे में उजाला प्रदान करने के लिए उपयोग किया जाता है। यह टॉर्च मजबूत और टिकाऊ है, और इसकी बैटरी लंबे समय तक चलती है। यह विभिन्न प्रकार के वातावरण में काम करने के लिए डिज़ाइन की गई है, चाहे आप घर पर हों, बाहर यात्रा कर रहे हों, या किसी आपात स्थिति में हों।`;
        } else if (name.toLowerCase().includes('sprayer')) {
            return `यह ${name} एक स्प्रेयर है जो फसलों पर कीटनाशक, उर्वरक, और पानी छिड़कने के लिए उपयोग किया जाता है। इसकी उन्नत डिज़ाइन और समायोज्य नोजल आपको समान रूप से और कुशलतापूर्वक फसलों पर छिड़काव करने में मदद करती है। यह हल्का और उपयोग में आसान है, और इसे छोटे से बड़े खेतों में उपयोग किया जा सकता है।`;
        } else if (name.toLowerCase().includes('paddy shoes')) {
            return `यह ${name} धान के जूते हैं जो कीचड़ में चलने में मदद करते हैं। यह जूते विशेष रूप से धान की खेती के लिए डिज़ाइन किए गए हैं, और ये आपको कीचड़ भरे क्षेत्रों में बिना फिसलन के चलने में सहायता करते हैं। यह टिकाऊ सामग्री से बने होते हैं, जो लंबे समय तक चलने वाले और आरामदायक होते हैं।`;
        } else if (name.toLowerCase().includes('weighing machine')) {
            return `यह ${name} एक वजन मापने की मशीन है जो विभिन्न वस्तुओं का सटीक वजन मापने के लिए प्रयोग की जाती है। यह डिजिटल डिस्प्ले और उच्च सटीकता के साथ आता है, जिससे आप विभिन्न वस्तुओं का वजन आसानी से और तेज़ी से माप सकते हैं। यह मशीन टिकाऊ और उपयोग में आसान है, और इसे कृषि, व्यापार, और घर में उपयोग किया जा सकता है।`;
        } else if (name.toLowerCase().includes('electric starter')) {
            return `यह ${name} एक इलेक्ट्रिक स्टार्टर है जो मोटर को चालू करने के लिए उपयोग किया जाता है। यह स्टार्टर उच्च गुणवत्ता और प्रदर्शन के साथ डिज़ाइन किया गया है, और यह विभिन्न प्रकार के उपकरणों और वाहनों में उपयोग के लिए उपयुक्त है। यह टिकाऊ और उपयोग में आसान है, और यह विभिन्न वातावरणों में काम कर सकता है।`;
        } else if (name.toLowerCase().includes('pesticides')) {
            return `यह ${name} एक कीटनाशक है जो फसलों को कीटों से बचाने के लिए उपयोग किया जाता है। यह कीटनाशक फसलों की रक्षा करता है और उनकी वृद्धि को बढ़ावा देता है, जिससे उनकी उत्पादकता और गुणवत्ता में सुधार होता है। यह विभिन्न प्रकार के कीटों के खिलाफ प्रभावी है और इसे उपयोग करना सुरक्षित है।`;
        } 
        else if (name.toLowerCase().includes('viricide')) {
            return `यह ${name} एक विरिसाइड है जो फसलों को विषाणु रोगों से बचाने के लिए उपयोग किया जाता है। यह विरिसाइड विशेष रूप से पत्तियों के मुड़ने (Leaf Curl), टोबैको मोज़ेक वायरस (Tobacco Mosaic Virus), और अन्य विषाणु जनित रोगों के खिलाफ प्रभावी है। इसका उपयोग करने से फसलों की रोग प्रतिरोधक क्षमता बढ़ती है और उनकी उत्पादकता और गुणवत्ता में सुधार होता है।`;
        }
        else if (name.toLowerCase().includes('herbicide') ||  name.includes('हर्बिसाइड') ) {
            return `यह ${name} एक हर्बिसाइड है जो फसलों को खरपतवार से बचाने के लिए उपयोग किया जाता है। यह हर्बिसाइड विशेष रूप से विभिन्न प्रकार के खरपतवारों को नियंत्रित करने के लिए डिज़ाइन किया गया है, जिससे फसलों को विकास के लिए आवश्यक पोषक तत्व मिलते हैं और उनकी उत्पादकता बढ़ती है। यह उपयोग में सुरक्षित और प्रभावी है, और यह फसलों की गुणवत्ता और उपज को बढ़ाने में मदद करता है।`;
        }
            else {
            return `यह ${name} एक उत्पाद है जो कृषि में विभिन्न उद्देश्यों के लिए उपयोग किया जाता है।`; // Default description
        }
    };

    const commonDescriptionTonic = `यह ${product.name} एक ${product.category} है जो कृषि में विभिन्न उद्देश्यों के लिए व्यापक रूप से प्रयोग किया जाता है। यह फसल की वृद्धि में प्रभावी होने, मिट्टी की उर्वरता को बेहतर बनाने और समग्र पौधे के स्वास्थ्य को बढ़ावा देने के लिए जाना जाता है। चाहे आप पेशेवर किसान हों या एक बागवानी प्रेमी, यह ${product.category} आपके टूलकिट का अत्यंत महत्वपूर्ण अंश है। अब खरीदारी करें और इसके लाभों को स्वयं महसूस करें!`;
    const commonDescriptionInsecticides = `यह ${product.name} एक ${product.category} है जो कृषि में कीटों को नियंत्रित करने के लिए उपयोग किया जाता है। यह फसलों को कीटों जैसे कीटों से बचाने में मदद करता है, जिससे उत्पादन में वृद्धि होती है और फसल का स्वास्थ्य बना रहता है। इससे न केवल फसलें सुरक्षित रहती हैं, बल्कि यह फसल की गुणवत्ता भी बढ़ाता है। चाहे आप पेशेवर किसान हों या एक बागवानी प्रेमी, यह ${product.category} आपके लिए एक आवश्यक उपकरण है। अब खरीदारी करें और इसके लाभों का आनंद लें!`;
    const commonDescriptionFertilizers = `यह ${product.name} एक ${product.category} है जो कृषि में उर्वरक के रूप में प्रयोग किया जाता है। यह फसलों को आवश्यक पोषण प्रदान करता है और उनकी वृद्धि को बढ़ाता है। इससे फसलों की गुणवत्ता में सुधार होता है और उनकी उत्पादकता बढ़ती है। यह ${product.category} समर्थन और पोषण के संबंध में कृषि के क्षेत्र में महत्वपूर्ण भूमिका निभाता है। चाहे आप पेशेवर किसान हों या एक बागवानी प्रेमी, यह उर्वरक आपके लिए एक महत्वपूर्ण उपकरण है। अब खरीदारी करें और अच्छे उत्पादों का आनंद लें!`;
    const commonDescriptionFungicides = `यह ${product.name} एक ${product.category} है जो कृषि में कवकों को नियंत्रित करने के लिए उपयोग किया जाता है। यह फसलों को कवकों जैसे फंगल रोगों से बचाने में मदद करता है, जिससे उत्पादन में वृद्धि होती है और फसल का स्वास्थ्य बना रहता है। इससे न केवल फसलें सुरक्षित रहती हैं, बल्कि यह फसल की गुणवत्ता भी बढ़ाता है। चाहे आप पेशेवर किसान हों या एक बागवानी प्रेमी, यह ${product.category} आपके लिए एक आवश्यक उपकरण है। अब खरीदारी करें और इसके लाभों का आनंद लें!`;

  

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    {product.image && <img src={product.image} alt="" />}
                    {product.image && <img src={product.image} alt="" />}
                    {product.image && <img src={product.image} alt="" />}
                    {product.image && <img src={product.image} alt="" />}
                </div>
                <div className='productdisplay-img'>
                    {product.image && <img className='productdisplay-main-img' src={product.image} alt="" />}
                </div>
            </div>


           

            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-stars'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>

                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-prices-old'>₹{product.old_price}</div>
                    <div className='productdisplay-right-prices-new'>₹{product.new_price}</div>
                </div> 
                
                <div className='productdisplay-right-description'>
                    {product.category === 'tonics' && commonDescriptionTonic}
                    {product.category === 'insecticides' && commonDescriptionInsecticides}
                    {product.category === 'fertilizers' && commonDescriptionFertilizers}
                    {product.category === 'fungicides' && commonDescriptionFungicides}
                    {((product.category === 'others') || (product.category === 'new collections')) && getSubcategoryDescription(product.name)}
                    </div>

                <div className='productdisplay-right-sizes'>
                    <h1>Size/Volume</h1>
                    <div className='productdisplay-right-size-options'>
                      <div >
                        {product.quantity}
                      </div>
                    </div>
                </div>

                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category: </span> {getCategoryInHindi(product.category)} </p>
                <p className='productdisplay-right-category'><span>Content(घटक):</span>{product.ingredients}</p>
            </div>
        
        </div>

    );
}

export default ProductDisplay;
