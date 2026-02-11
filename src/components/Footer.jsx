import { useState } from "react";
import "./Footer.css";
import playStore from "../assets/play-store.png";
import appStore from "../assets/apple-store.png";
import return14Days from "../assets/return14days.avif";
import original from "../assets/original.png"; 

const FooterSection = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer-column">
      <h4 onClick={() => setOpen(!open)} className="footer-title">
        {title}
        <span className={`arrow ${open ? "open" : ""}`}>⌄</span>
      </h4>

      <div className={`footer-links ${open ? "show" : ""}`}>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

       <div className="footer-column">

  <FooterSection
    title="ONLINE SHOPPING"
    items={[
      "Men",
      "Women",
      "Kids",
      "Home & Living",
      "Beauty",
      "Gift Cards",
      "Myntra Insider",
    ]}
  />

  <FooterSection
    title="USEFUL LINKS"
    items={[
      <a href="https://blog.myntra.com/">Blog</a>,
      <a href="https://careers.myntra.com/">Careers</a>,
      <a href="https://www.myntra.com/sitemap">Site Map</a>,
      <a href="https://www.myntra.com/corp-info">Corporate Information</a>,
      <a href="https://www.myntra.com/security/whitehat">Whitehat</a>,
      <a href="https://www.cleartrip.com/">Cleartrip</a>,
      <a href="https://www.myntraglobal.com/">Myntra Global</a>,
    ]}
  />

</div>


        <FooterSection
          title="CUSTOMER POLICIES"
          items={[
            "Contact Us",
            "FAQ",
            "T&C",
            "Terms Of Use",
            "Track Orders",
            "Shipping",
            "Cancellation",
            "Returns",
            "Privacy Policy",
          ]}
        />

        <div className="footer-column">
          <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>

          <div className="app-buttons">
            <a href="https://play.google.com/store/apps/details?id=com.myntra.android">
              <img
                src={playStore}
                alt="Google Play"
              />
            </a>

            <a href="https://apps.apple.com/in/app/myntra-shopping-fashion/id907394059">
              <img
                src={appStore}
                alt="App Store"
              />
            </a>
          </div>

          <h4 className="social-title">KEEP IN TOUCH</h4>

          <div className="social-icons">
            <a href="https://www.facebook.com/myntra" target="_self">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/myntra" target="_self">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/myntra" target="_self">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/myntra" target="_self">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-column promise-column">
          <div className="promise-item">
            <img
              src={original}
              alt="100% Original"
            />
            <p>
              <strong>100% ORIGINAL</strong> guarantee for all products at myntra.com
            </p>
          </div>

          <div className="promise-item">
            <img
              src={return14Days}
              alt="14 Days Return"
            />
            <p>
              <strong>Return within 14 days</strong> of receiving your order
            </p>
          </div>
        </div>

      </div>

      <div className="popular-searches">
  <h4>POPULAR SEARCHES</h4>

  <p className="search-links">
    Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls |
    Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes |
    Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings |
    Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches |
    Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 |
    Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show |
    Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles |
    Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes |
    Jewellery | Designers Sarees
  </p>

  
</div>
<div className="footer-bottom">
  <p>
    In case of any concern,
      <span className="contact-link">
      <a href="https://blog.myntra.com/">Contact Us</a>
      </span>
  </p>

  <p>© 2026 www.myntraclone.com. All rights reserved.</p>

  <p className="flipkart">A Flipkart company</p>
</div>
<div className="registered-office">
  <h4>REGISTERED OFFICE ADDRESS</h4>

  <div className="office-row">
    <div className="office-left">
      <p>
        Buildings Alyssa,<br />
        Begonia and Clover situated in Embassy Tech Village,<br />
        Outer Ring Road,<br />
        Devarabeesanahalli Village,<br />
        Varthur Hobli,<br />
        Bengaluru – 560103, India
      </p>
    </div>

    <div className="office-right">
      <p><strong>CIN:</strong> U72300KA2007PTC041799</p>
      <p><strong>Telephone:</strong> <span className="telephone">+91-80-61561999</span></p>
    </div>
  </div>
</div>

<div className="footer-info">
  <h4>ONLINE SHOPPING MADE EASY AT MYNTRA</h4>
  <p>
    If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place.
    Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including <strong><a href="https://www.myntra.com/clothing">clothing,</a></strong>
    footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our
    treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses.
    You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.
  </p>

  <h4>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h4>
  <p>
    Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men,
    women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase
    for different occasions.
  </p>

<ol className="orderd-list-product">
  <li>
  <p>
    <strong>Smart men’s clothing</strong> – At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.
  </p>
  </li>

  <li>
  <p>
    <strong>Trendy women’s clothing</strong> – <strong><a href="https://www.myntra.com/shop/women"> Online shopping for women </a></strong> Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand <strong><a href="https://www.myntra.com/saree">saree</a></strong> and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.
  </p>
  </li>

 <li>
  <p>
    <strong>Fashionable footwear</strong> –  While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.
  </p>
  </li>

 <li>
  <p>
    <strong>Stylish accessories</strong> –  Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.
  </p>
 </li>

 <li>
  <p>
    <strong>Fun and frolic</strong> – Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish.
  </p>
  </li>

  <li>
  <p>
    <strong>Beauty begins here</strong> – You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty.
  </p>
  </li>
  </ol>

  <p>
   Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photos <strong><a href="https://www.myntra.com/photo-frames">photo frames</a></strong> and artificial plants are sure to breathe life into any corner of your home.
  </p>

  <h4>AFFORDABLE FASHION AT YOUR FINGERTIPS</h4>
  <p>
    Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.
   </p>
  
 <h4>MYNTRA INSIDER</h4>
<p>
  Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty
  program called <strong><a href="https://www.myntra.com/myntrainsider">Myntra Insider</a></strong> was introduced to enhance your online experience.
  The program is applicable to every registered customer and measures rewards in the form of
  Insider Points.
</p>

<p>
  There are four levels to achieve in the program, as the Insider Points accumulate. They are –
  Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform
  coupons, each tier comes with its own special perks.
</p>

<ul className="footer-list">
  
    <strong className="insider-elite-icon">Insider</strong> 
    <div className="insider-elite-icon-list">
    <li>
    <p> Opportunity to master any domain in fashion with tips from celebrity
    stylists at Myntra Masterclass sessions.</p>
     </li>
     <li><p> Curated collections from celebrity stylists.</p>
    </li>
    </div>
  
  
    <strong className="insider-elite-icon">Elite</strong>
    <div className="insider-elite-icon-list">
    <li>
     <p> VIP access to special sale events such as the End of Reason Sale (EORS)
    and product launches.</p>
    </li>
    <li>
      <p> Exclusive early access to Limited Edition products.</p>
  </li>
  </div>


    <strong className="insider-elite-icon">Icon</strong>
    <div className="insider-elite-icon-list">
    <li>
    <p> Chance to get on guest lists for special events.</p>
  </li>
  </div>
</ul>

<h4>MYNTRA STUDIO – THE PERSONALISED FASHION FEED YOU WOULDN’T WANT TO MISS OUT ON</h4>
<p>
  The world wide web is evolving at a relentless pace, and with an accelerated growth each passing
  year, there is bound to be an overwhelming surge of online content. Personalisation of search
  feeds was proposed as a solution to combat the overload of irrelevant information.
</p>

<p>
Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content, increasing user engagement, retention and customer loyalty.
</p>

<p>
  Myntra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named the<a href="https://www.myntra.com/studio/home">Myntra Studio,</a>this personalised search feed brings you the latest men and women’s fashion trends, celebrity styles, branded content and daily updates from your favourite fashion labels.
</p>

<p>If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life.</p>

<ol className="footer-list">
  <li>
    <strong>Keep Up With What Your Favourite Fashion Icons Are Upto</strong> 
    <p>The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear</p>
    <p>Imagine if you could keep up with every piece of clothing and accessory worn by the fashion icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help track celebrity fashion trends, exploring details such as their outfit of the day. This way, you would not ever miss out on the latest celebrity fashion trends, from all around the world.</p>
  </li>
  <li>
    <strong>Quick Fashion Tip And Tricks</strong> 
    <p>Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe.</p>
  </li>
  <li>
    <strong>Updates on What Is Trending and New Product Launches</strong> 
    <p>Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Myntra Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.</p>
    <p>Your feed keeps you updated with stories of what the brands are creating including clothing, footwear and jewellery, along with their new seasonal collections.</p>
  </li>
  <li>
    <strong>Explicit Step-By-Step Beauty Routines From Experts</strong> 
    <p>Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here for you.

</p>
  </li>
  <li>
    <strong>Celebrity Confessions And A Look Into Their Lives</strong> 
    <p>A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a matter of clicks.</p>
    <p>If you are very particular when it comes to the content you wish to view and engage with on social media, the ability to intricately filter content helps achieve that. Applying the same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily fashion fix incorporating everything that you love, all at one place. Sign up on Myntra today and start organising your fashion feed, just the way you want to.</p>
  </li>
</ol>

<h4>MYNTRA APP</h4>
<p>
Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your <strong><a href="https://play.google.com/store/apps/details?id=com.myntra.android">Android</a></strong> or <strong><a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059">IOS</a></strong> device today and experience shopping like never before!
</p>

<h4>HISTORY OF MYNTRA</h4>
<p>
Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized <strong><a href="https://www.myntra.com/gifts">gifts</a></strong> was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.
</p>
<p>
  The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before
</p>

<p>
  The Myntra shopping app was launched in 2015, further strengthening its position as India’s
  leading fashion marketplace.
</p>

<h4>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h4>
<p>
 Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery.The 14-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.


</p>
<p>
  Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.
</p>


</div>


    </footer>
  );
};

export default Footer;







