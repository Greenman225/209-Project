// LangConfig.jsx
import { ManageAccounts, Reviews } from "@mui/icons-material";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize language
const savedLang = localStorage.getItem("lang");
const defaultLang = savedLang || "en";

// Define translations
const resources = {
  en: {
    translation: {
      font: "font-poppins",
      dir: "ltr",
      topHeader:
        "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
      shop: "ShopNow",
      welcome: "Welcome to the E-Commerce Website",

      home: "Home",
      contact: "Contact",
      about: "About",
      signUp: "Sign Up",
      account: "My Account",

      headerIcons: {
        1: "Manage My Account",
        2: "My Order",
        3: "My Cancellations",
        4: "My Reviews",
        5: "Logout",
      },
      search: "Search...",
      homeSections: {
        row1: {
          col1: [
            "Women's Fashion",
            "Men's Fashion",
            "Technology",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ],
          col2: ["iPhone 14 Series", "Up to 10% off Voucher", "Shop Now"],
        },
        row2: ["Today’s", "Flash Sales", "Days", "Hours", "Minutes", "Seconds"],
      },
      removeFromCart: "Remove from Cart",
      addToCart: "Add to Cart",
      new: "NEW",
      itemsArray: {
        0: {
          title: "Kids Electric Car",
          type: "Gaming",
          details:
            "An exciting electric car for kids to drive around in style, providing hours of entertainment and fun.",
        },
        1: {
          title: "CANON EOS DSLR Camera",
          type: "Technology",
          details:
            "Capture stunning photos and videos with this professional-grade Canon DSLR camera, perfect for photography enthusiasts.",
        },
        2: {
          title: "Breed Dry Dog Food",
          type: "General",
          details:
            "Nutritious dry dog food to keep your furry friend healthy and happy, made with high-quality ingredients.",
        },
        3: {
          title: "ASUS FHD Gaming Laptop",
          type: "Technology",
          details:
            "Experience high-performance gaming with this ASUS FHD gaming laptop, featuring advanced graphics and smooth gameplay.",
        },
        4: {
          title: "Curology Product Set",
          type: "General",
          details:
            "A complete skincare set by Curology to cleanse, moisturize, and protect your skin, leaving it soft and radiant.",
        },
        5: {
          title: "GP11 Shooter USB Gamepad",
          type: "Gaming",
          details:
            "Enhance your gaming experience with the GP11 Shooter USB gamepad, featuring high-quality construction and precise controls.",
        },
        6: {
          title: "Quilted Satin Jacket",
          type: "Clothes",
          details:
            "Stay stylish and warm with this quilted satin jacket, perfect for adding a trendy touch to your outfit.",
        },
        7: {
          title: "Small Bookshelf",
          type: "General",
          details:
            "Organize your books and decorative items neatly with this small bookshelf, designed to fit in compact spaces.",
        },
        8: {
          title: "RGB Liquid CPU Cooler",
          type: "Technology",
          details:
            "Keep your CPU cool and running smoothly with the RGB liquid CPU cooler, featuring a high-performance pump and customizable RGB lighting.",
        },
        9: {
          title: "Gucci Duffle Bag",
          type: "Clothes",
          details:
            "Travel in style with the Gucci duffle bag, crafted from premium materials and designed for durability and luxury.",
        },
        10: {
          title: "The North Coat",
          type: "Clothes",
          details:
            "Stay warm and fashionable with The North Coat, featuring a durable construction and timeless design.",
        },
        11: {
          title: "HAVIT HV-G92 Gamepad",
          type: "Gaming",
          details:
            "Enjoy responsive and precise gaming controls with the HAVIT HV-G92 gamepad, designed for hours of gaming fun.",
        },
        12: {
          title: "AK-900 Wired Keyboard",
          type: "Technology",
          details:
            "Type with speed and accuracy using the AK-900 wired keyboard, featuring a durable construction and ergonomic design.",
        },
        13: {
          title: "IPS LCD Gaming Monitor",
          type: "Technology",
          details:
            "Immerse yourself in gaming with the IPS LCD gaming monitor, delivering vibrant visuals and smooth gameplay.",
        },
        14: {
          title: "S-Series Comfort Chair",
          type: "Clothes",
          details:
            "Relax in comfort with the S-Series comfort chair, featuring ergonomic design and plush cushioning for long hours of sitting.",
        },
        15: {
          title: "JBL Boombox 2",
          type: "New Arrival",
          details:
            "Experience powerful sound with the JBL Boombox 2, featuring a rugged design and long battery life for all-day listening.",
        },
        16: {
          title: "perfume",
          type: "New Arrival",
          details:
            "This perfume is a blend of oud, rose, and incense, creating a rich and luxurious scent that lasts all day.",
        },
        17: {
          title: "Phone",
          type: "New Arrival",
          details:
            "This phone features a large display, powerful processor, and long battery life, perfect for work and play.",
        },
        18: {
          title: "PlayStation 5",
          type: "New Arrival",
          details:
            "The black and white version of the PS5 is coming out on sale.",
        },
        19: {
          title: "Speaker",
          type: "New Arrival",
          details: "Amazing sound quality with the Amazon wireless speaker.",
        },
        20: {
          title: "Women's Collections",
          type: "New Arrival",
          details:
            "Women's collections are featured that give you another vibe, and you can find the best collections here.",
        },
        21: {
          title: "Football Shoes",
          type: "New Arrival",
          details:
            "The best football shoes for your game, and you can find the best collections here.",
        },
      },
      categories: {
        general: "General",
        technology: "Technology",
        gaming: "Gaming",
        clothes: "Clothes",
        newArrival: "New Arrival",
      },
      services: {
        0: {
          value: "FREE AND FAST DELIVERY",
          description: "Free delivery for all orders over $140 ",
        },

        1: {
          value: "24/7 CUSTOMER SERVICE",
          description: "Friendly 24/7 customer support",
        },
        2: {
          value: "MONEY BACK GUARANTEE",
          description: "We reurn money within 30 days",
        },
      },
      redButtons: {
        viewAllProducts: "View All Products",
        viewAll: "View All",
        exploreByCategory: "Explore By Category",
        buyNow: "Buy Now",
        sendMassage: "Send Massage",
        createAccount: "Create Account",
        login: "Log In",
        applyCoupon: "Apply Coupon",
        processToCheckout: "Process to checkout",
        placeOrder: "Place Order",
        backToHomePage: "Back to home page",
        chooseByCategory: "Choose By Category",
      },
      whiteButtons: {
        backToHomePage: "Back to Home Page",
        loadMore: "Load More..",
        moveAllToBag: "Move All to Bag",
        seeAll: "See All",
        returnToShop: "Return to Shop",
        updateCart: "Update Cart",
      },

      wishlist: {
        title: "Wishlist",
        justForYou: "Just for you",
      },
      cart: {
        header: {
          product: "Product",
          price: "Price",
          quantity: "Quantity",
          subtotal: "Subtotal",
        },
        cartTotal: "Cart Total",
        total: "Total",
        subtotal: "Subtotal",
        shipping: "Shipping",
        free: "Free",
      },
      checkOut: {
        title: "Checkout",
        billingDetails: "Billing Details",
        firstName: "First Name",
        company: "Company Name",
        Country: "Country",
        address: "Street Address",
        city: "Town / City",
        phone: "Phone",
        email: "Email Address",
        apartment: "Apartment, floor, etc. (optional)",
        methods: "Payment Methods",
        bank: "Bank (Visa)",
        cash: "Cash on Delivery",
        couponCode: "Coupon Code",
      },
      payment: {
        payment: "Payment Details",
        number: "Card Number",
        enter: "Enter your card number",
        expirationDate: "Expiration Date",
      },
      productPage: {
        relatedItems: "Related Items",
        colors: "Colors",
        size: "Size",
        inStock: "In Stock",
        reviews: "Reviews",
        review: "Review",
        1: "Free Delivery",
        1.1: "Enter your postal code for Delivery Availability",
        2: "Return Delivery",
        2.1: "Free 30 Days Delivery Returns.Details",
      },
      contactPage: {
        call: "Call To Us",
        available: "We are available 24/7, 7 days a week.",
        phone: "Phone",
        write: "Write To US",
        fillForm: "Fill out our form and we will contact you within 24 hours.",
        emails: "Emails",
        yourName: "Your Name",
        yourEmail: "Your Email",
        yourPhone: "Your Phone Number",
        yourMessage: "Your Message",
      },
      aboutPage: {
        title: "About",
        story: "Our Story",
        paragraph1:
        "This Website was launched this by DedSec and his group members as a semester project. We are currently in University of Ghana offering Information Technology as a programme. We are all in level 200. If there's any problem, do not hesitate to let us know thank you😊",
        paragraph2:
          "DedSec has more than 1 Million products to offer, growing at a very fast. DedSec offers a diverse assotment in categories ranging from consumer.",
        card1: "Sellers active on our site",
        card2: "Monthly Product Sales",
        card3: "Customers active on our site",
        card4: "Annual gross sale on our site",
        k1: "10.5k",
        k2: "33k",
        k3: "45.5k",
        k4: "25k",
        name1: "Michael Anarfo",
        name2: "Nunoo Mensah",
        name3: "Kelvin Tetteh",
        name4: "Joseph Gyimah",
        name5: "Samuel Dagbo",
        name6:"Ella Gonelesio",
        name7: "Ewura Abena",
        name8: "Mattew Cecil",
        job1: "Full Stack Developer",
        job2: "Frontend Developer",
        job3: "UI/UX Developer",
        job4: "Product Manager",
        job5: "Backend Developer",
        job6: "UX Tester",
        job7: "Backend developer",
        job8: "Product Manager"
      },
      accountPage: {
        setMassage: "Account details updated successfully!",
        welcome: "Welcome! ",
        home: "Home",
        myAccount: "My Account",
        ManageMyAccount: "Manage My Account",
        myProfile: "My Profile",
        addressBook: "Address Book",
        myPaymentOptions: "My Payment Options",
        myOrders: "My Orders",
        myReturns: "My Returns",
        myCancelations: "My Cancelations",
        myWishlist: "My Wishlist",
        editYourProfile: "Edit Your Profile",
        firstName: "First Name",
        yourFirstName: "your first name",
        lastName: "Last Name",
        yourLastName: "your last name",
        email: "Email",
        yourEmail: "your email",
        address: "Address",
        yourAddress: "your address",
        passwordChanges: "Password Changes",
        currentPassword: "Current Password",
        newPassword: "New Password",
        confirmPassword: "Confirm Password",
        cancel: "Cancel",
        saveChanges: "Save Changes",
      },

      signUpPage: {
        title: "Create an account",
        enter: "Enter your details below:",
        email: "Email",
        password: "Password",
        createAccount: "Create Account",
        withGoogle: "Sign up with Google",
        haveAccount: "Already have an account?",
        login: "Log in",
      },
      loginPage: {
        title: "Log in to DedSec",
        enter: "Enter your details below:",
        emailOrPhone: "Email or Phone Number",
        password: "Password",
        forgot: "Forgot Password?",
        notHaveAccount: "Don't have an account?",
        login: "Log In",
      },
      Snackbar: {
        inCart: "Items already in the cart!",
        movedToCart: "Items moved to the cart successfully!",
        noItems: "No items to move to the cart!",
      },
      category: {
        redTitle: "Categories",
        title: "Browse By Category",
        categories: {
          0: "Phones",
          1: "Computers",
          2: "SmartWatch",
          3: "Camera",
          4: "HeadPhones",
          5: "Gaming",
        },
      },
      bestSelling: {
        redTitle: "This Month",
        title: "Best Selling Products",
      },
      deal: {
        greenTitle: "Categories",
        title: "Enhance Your Listening Experience",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        buyNow: "Buy Now!",
      },
      allProducts: {
        redTitle: "Our Products",
        title: "Explore Our Products",
        byCategory: "Explore By Category",
      },
      featured: {
        redTitle: "Featured",
        title: "New Arrival",
        shopNow: "Shop Now",
        playStation: {
          title: "PlayStation 5",
          description: "Black and White version of the PS5 coming out on sale.",
        },
        WomenCollections: {
          title: "Women’s Collections",
          description: "Featured woman collections that give you another vibe.",
        },
        speakers: {
          title: "Speakers",
          description: "Amazon wireless speakers",
        },
        perfume: {
          title: "Perfume",
          description: "GUCCI INTENSE OUD EDP",
        },
      },
      footer: {
        subscribe: "Subscribe",
        offer: "Get 10% off your first order",
        enterEmail: "Enter your email",
        enterPassword: "Enter your password",
        account: "Account",
        myAccount: "My Account",
        sign: "Login / Register",
        cart: "Cart",
        wishlist: "Wishlist",
        shop: "Shop",
        downloadApp: "Download App",
        save: "Save $3 with App New User Only",
        support: "Support",
        address: "University of Ghana, P.O.Box LG 25 Legon, Ghana, Greater-Accra",
        quickLinks: "Quick Links",
        privacy: "Privacy Policy",
        usage: "Terms Of Use",
        FAQ: "FAQ",
        Contact: "Contact",
        copyrights: "© Copyright Rimel 2022. All rights reserved",
        allRightsReserved: "© All rights reserved",
      },
    },
  },
  gr: {
    translation: {
      font: "font-poppins",
      dir: "ltr",
      topHeader: "Sommerschlussverkauf - 50 % RABATT!",
      shop: "Jetzt einkaufen",
      welcome: "Willkommen auf der E-Commerce-Website",

      home: "Zuhause",
      contact: "Kontakt",
      about: "Über",
      signUp: "Anmelden",
      account: "Mein Konto",
      headerIcons: {
        1: "Mein Konto",
        2: "Meine Bestellung",
        3: "Meine Stornierungen",
        4: "Meine Bewertungen",
        5: "Ausloggen",
      },
      search: "Suche...",
      homeSections: {
        row1: {
          col1: [
            "Damenmode",
            "Herrenmode",
            "Elektronik",
            "Zuhause & Lifestyle",
            "Medizin",
            "Sport & Outdoor",
            "Baby & Spielzeug",
            "Lebensmittel & Haustiere",
            "Gesundheit & Schönheit",
          ],
          col2: [
            "iPhone 14 Serie",
            "Bis zu 10% Rabatt Gutschein",
            "Jetzt einkaufen",
          ],
        },
        row2: [
          "Heute’s",
          "Blitzangebote",
          "Tage",
          "Stunden",
          "Minuten",
          "Sekunden",
        ],
      },
      removeFromCart: "Vom Warenkorb entfernen",
      addToCart: "In den Warenkorb legen",
      new: "NEU",
      itemsArray: {
        0: {
          title: "Kinder-Elektroauto",
          type: "Gaming",
          details:
            "Ein aufregendes Elektroauto für Kinder, um stilvoll herumzufahren und stundenlangen Spaß zu bieten.",
        },
        1: {
          title: "CANON EOS DSLR Kamera",
          type: "Technologie",
          details:
            "Machen Sie atemberaubende Fotos und Videos mit dieser professionellen Canon DSLR-Kamera, perfekt für Fotoliebhaber.",
        },
        2: {
          title: "Rasse Trockenfutter für Hunde",
          type: "Allgemein",
          details:
            "Nahrhaftes Trockenfutter für Hunde, um Ihren pelzigen Freund gesund und glücklich zu halten, hergestellt aus hochwertigen Zutaten.",
        },
        3: {
          title: "ASUS FHD Gaming Laptop",
          type: "Technologie",
          details:
            "Erleben Sie High-Performance-Gaming mit diesem ASUS FHD Gaming-Laptop, der fortschrittliche Grafiken und reibungsloses Gameplay bietet.",
        },
        4: {
          title: "Curology Produktset",
          type: "Allgemein",
          details:
            "Ein komplettes Hautpflegeset von Curology zum Reinigen, Befeuchten und Schützen Ihrer Haut, damit sie weich und strahlend bleibt.",
        },
        5: {
          title: "GP11 Shooter USB Gamepad",
          type: "Gaming",
          details:
            "Verbessern Sie Ihr Spielerlebnis mit dem GP11 Shooter USB Gamepad, das eine hochwertige Konstruktion und präzise Steuerungen bietet.",
        },
        6: {
          title: "Gesteppte Satinjacke",
          type: "Kleidung",
          details:
            "Bleiben Sie mit dieser gesteppten Satinjacke stilvoll und warm, perfekt, um Ihrem Outfit einen trendigen Touch zu verleihen.",
        },
        7: {
          title: "Kleines Bücherregal",
          type: "Allgemein",
          details:
            "Organisieren Sie Ihre Bücher und Dekorationsgegenstände ordentlich mit diesem kleinen Bücherregal, das für kompakte Räume geeignet ist.",
        },
        8: {
          title: "RGB Flüssigkeits-CPU-Kühler",
          type: "Technologie",
          details:
            "Halten Sie Ihre CPU kühl und reibungslos mit dem RGB Flüssigkeits-CPU-Kühler, der eine Hochleistungspumpe und anpassbare RGB-Beleuchtung bietet.",
        },
        9: {
          title: "Gucci Reisetasche",
          type: "Kleidung",
          details:
            "Reisen Sie mit Stil mit der Gucci Reisetasche, die aus hochwertigen Materialien gefertigt und für Langlebigkeit und Luxus konzipiert ist.",
        },
        10: {
          title: "Der Nordmantel",
          type: "Kleidung",
          details:
            "Bleiben Sie warm und modisch mit dem Nordmantel, der eine robuste Konstruktion und ein zeitloses Design bietet.",
        },
        11: {
          title: "HAVIT HV-G92 Gamepad",
          type: "Gaming",
          details:
            "Genießen Sie reaktionsschnelle und präzise Spielsteuerungen mit dem HAVIT HV-G92 Gamepad, das für stundenlangen Spielspaß entwickelt wurde.",
        },
        12: {
          title: "AK-900 Kabeltastatur",
          type: "Technologie",
          details:
            "Tippen Sie schnell und genau mit der AK-900 Kabeltastatur, die eine robuste Konstruktion und ein ergonomisches Design bietet.",
        },
        13: {
          title: "IPS LCD Gaming Monitor",
          type: "Technologie",
          details:
            "Tauchen Sie ein in das Gaming mit dem IPS LCD Gaming Monitor, der lebendige Visuals und reibungsloses Gameplay bietet.",
        },
        14: {
          title: "S-Serie Komfortstuhl",
          type: "Kleidung",
          details:
            "Entspannen Sie sich in Komfort mit dem S-Serie Komfortstuhl, der ein ergonomisches Design und weiche Polsterung für stundenlanges Sitzen bietet.",
        },
        15: {
          title: "JBL Boombox 2",
          type: "Neuankömmling",
          details:
            "Erleben Sie kraftvollen Sound mit dem JBL Boombox 2, der ein robustes Design und eine lange Akkulaufzeit für ganztägiges Hören bietet.",
        },
        16: {
          title: "Parfüm",
          type: "Neuankömmling",
          details:
            "Dieses Parfüm ist eine Mischung aus Oud, Rose und Weihrauch und kreiert einen reichen und luxuriösen Duft, der den ganzen Tag hält.",
        },
        17: {
          title: "Telefon",
          type: "Neuankömmling",
          details:
            "Dieses Telefon verfügt über ein großes Display, einen leistungsstarken Prozessor und eine lange Akkulaufzeit, ideal für Arbeit und Spiel.",
        },
        18: {
          title: "PlayStation 5",
          type: "Neuankömmling",
          details: "Die schwarz-weiße Version der PS5 kommt in den Verkauf.",
        },
        19: {
          title: "Lautsprecher",
          type: "Neuankömmling",
          details:
            "Erstaunliche Klangqualität mit dem Amazon Wireless-Lautsprecher.",
        },
        20: {
          title: "Frauenkollektionen",
          type: "Neuankömmling",
          details:
            "Frauenkollektionen sind vorgestellt, die Ihnen eine andere Stimmung verleihen, und Sie finden die besten Kollektionen hier.",
        },
        21: {
          title: "Fußballschuhe",
          type: "Neuankömmling",
          details:
            "Die besten Fußballschuhe für Ihr Spiel, und Sie finden die besten Kollektionen hier.",
        },
      },
      categories: {
        general: "Allgemein",
        technology: "Technologie",
        gaming: "Gaming",
        clothes: "Kleidung",
        newArrival: "Neuankömmling",
      },
      services: {
        0: {
          value: "KOSTENLOSE UND SCHNELLE LIEFERUNG",
          description: "Kostenlose Lieferung für alle Bestellungen über 140 $",
        },
        1: {
          value: "24/7 KUNDENSERVICE",
          description: "Freundlicher 24/7-Kundensupport",
        },
        2: {
          value: "GELD-ZURÜCK-GARANTIE",
          description: "Wir erstatten das Geld innerhalb von 30 Tagen",
        },
      },
      redButtons: {
        viewAllProducts: "Alle Produkte anzeigen",
        viewAll: "Alle anzeigen",
        exploreByCategory: "Nach Kategorie erkunden",
        buyNow: "Jetzt kaufen",
        sendMassage: "Nachricht senden",
        createAccount: "Konto erstellen",
        login: "Einloggen",
        applyCoupon: "Gutschein anwenden",
        processToCheckout: "Zur Kasse gehen",
        placeOrder: "Bestellung aufgeben",
        backToHomePage: "Zurück zur Startseite",
        chooseByCategory: "Nach Kategorie wählen",
      },
      whiteButtons: {
        backToHomePage: "Zurück zur Startseite",
        loadMore: "Mehr laden..",
        moveAllToBag: "Alle in den Warenkorb legen",
        seeAll: "Alle anzeigen",
        returnToShop: "Zurück zum Shop",
        updateCart: "Warenkorb aktualisieren",
      },
      wishlist: {
        title: "Wunschliste",
        justForYou: "Nur für dich",
      },
      cart: {
        header: {
          product: "Produkt",
          price: "Preis",
          quantity: "Menge",
          subtotal: "Zwischensumme",
        },
        cartTotal: "Warenkorb Gesamt",
        total: "Gesamt",
        subtotal: "Zwischensumme",
        shipping: "Versand",
        free: "Kostenlos",
      },
      checkOut: {
        title: "Kasse",
        billingDetails: "Rechnungsdetails",
        firstName: "Vorname",
        company: "Firmenname",
        Country: "Land",
        address: "Straßenadresse",
        city: "Stadt",
        phone: "Telefon",
        email: "E-Mail-Adresse",
        apartment: "Wohnung, Etage usw. (optional)",
        methods: "Zahlungsmethoden",
        bank: "Bank (Visa)",
        cash: "Nachnahme",
        couponCode: "Gutscheincode",
      },
      payment: {
        payment: "Zahlungsdetails",
        number: "Kartennummer",
        enter: "Geben Sie Ihre Kartennummer ein",
        expirationDate: "Ablaufdatum",
      },
      productPage: {
        relatedItems: "Ähnliche Artikel",
        colors: "Farben",
        size: "Größe",
        inStock: "Auf Lager",
        reviews: "Bewertungen",
        review: "Bewertung",
        1: "Kostenlose Lieferung",
        1.1: "Geben Sie Ihre Postleitzahl für die Lieferverfügbarkeit ein",
        2: "Rücksendung",
        2.1: "Kostenlose 30-tägige Lieferdetails",
      },

      contactPage: {
        call: "Rufen Sie uns an",
        available: "Wir sind 24/7, 7 Tage die Woche erreichbar.",
        phone: "Telefon",
        write: "Schreiben Sie uns",
        fillForm:
          "Füllen Sie unser Formular aus, und wir werden uns innerhalb von 24 Stunden bei Ihnen melden.",
        emails: "E-Mails",
        yourName: "Ihr Name",
        yourEmail: "Ihre E-Mail",
        yourPhone: "Ihre Telefonnummer",
        yourMessage: "Ihre Nachricht",
      },
      aboutPage: {
        title: "Über",
        story: "Unsere Geschichte",
        paragraph1:
          "Diese Website wurde von DedSec und seinen Gruppenmitgliedern als Semesterprojekt gestartet. Wir sind derzeit an der Universität von Ghana und bieten Informationstechnologie als Studiengang an. Wir sind alle auf Level 200. Wenn es ein Problem gibt, zögern Sie nicht, uns Bescheid zu geben, danke 😊",
        paragraph2:
          "DedSec hat mehr als 1 Million Produkte im Angebot, die sehr schnell wachsen. DedSec bietet eine vielfältige Auswahl in Kategorien, die von Verbraucher.",
        card1: "Verkäufer aktiv auf unserer Website",
        card2: "Monatlicher Produktverkauf",
        card3: "Kunden aktiv auf unserer Website",
        card4: "Jährlicher Bruttoumsatz auf unserer Website",
        k1: "10,5k",
        k2: "33k",
        k3: "45,5k",
        k4: "25k",
        name1: "Michael Anarfo",
        name2: "Nunoo Mensah",
        name3: "Kelvin Tetteh",
        name4: "Joseph Gyimah",
        job1: "Gründer & Vorsitzender",
        job2: "Backend & Vorsitzender",
        job3: "UI/UX tester",
        job4: "Produktdesigner",
      },
      accountPage: {
        setMassage: "Kontodetails erfolgreich aktualisiert!",
        welcome: "Willkommen! ",
        home: "Zuhause",
        myAccount: "Mein Konto",
        ManageMyAccount: "Mein Konto verwalten",
        myProfile: "Mein Profil",
        addressBook: "Adressbuch",
        myPaymentOptions: "Meine Zahlungsoptionen",
        myOrders: "Meine Bestellungen",
        myReturns: "Meine Rücksendungen",
        myCancelations: "Meine Stornierungen",
        myWishlist: "Meine Wunschliste",
        editYourProfile: "Bearbeiten Sie Ihr Profil",
        firstName: "Vorname",
        yourFirstName: "Ihr Vorname",
        lastName: "Nachname",
        yourLastName: "Ihr Nachname",
        email: "E-Mail",
        yourEmail: "Ihre E-Mail",
        address: "Adresse",
        yourAddress: "Ihre Adresse",
        passwordChanges: "Passwortänderungen",
        currentPassword: "Aktuelles Passwort",
        newPassword: "Neues Passwort",
        confirmPassword: "Passwort bestätigen",
        cancel: "Abbrechen",
        saveChanges: "Änderungen speichern",
      },

      signUpPage: {
        title: "Ein Konto erstellen",
        enter: "Geben Sie Ihre Daten unten ein:",
        email: "E-Mail",
        password: "Passwort",
        createAccount: "Konto erstellen",
        withGoogle: "Mit Google anmelden",
        haveAccount: "Sie haben bereits ein Konto?",
        login: "Einloggen",
      },
      loginPage: {
        title: "Bei DedSec anmelden",
        enter: "Geben Sie Ihre Daten unten ein:",
        emailOrPhone: "E-Mail oder Telefonnummer",
        password: "Passwort",
        forgot: "Passwort vergessen?",
        notHaveAccount: "Sie haben noch kein Konto?",
        login: "Einloggen",
      },

      Snackbar: {
        inCart: "Artikel bereits im Warenkorb!",
        movedToCart: "Artikel erfolgreich in den Warenkorb verschoben!",
        noItems: "Keine Artikel zum Verschieben in den Warenkorb!",
      },
      category: {
        redTitle: "Kategorien",
        title: "Nach Kategorie durchsuchen",
        categories: {
          0: "Telefone",
          1: "Computer",
          2: "SmartWatch",
          3: "Kamera",
          4: "Kopfhörer",
          5: "Gaming",
        },
      },
      bestSelling: {
        redTitle: "Diesen Monat",
        title: "Bestseller-Produkte",
      },
      deal: {
        greenTitle: "Kategorien",
        title: "Verbessern Sie Ihr Hörerlebnis",
        days: "Tage",
        hours: "Stunden",
        minutes: "Minuten",
        seconds: "Sekunden",
        buyNow: "Jetzt kaufen!",
      },
      allProducts: {
        redTitle: "Unsere Produkte",
        title: "Entdecken Sie unsere Produkte",
        byCategory: "Nach Kategorie erkunden",
      },
      featured: {
        redTitle: "Vorgestellt",
        title: "Neue Ankunft",
        shopNow: "Jetzt einkaufen",
        playStation: {
          title: "PlayStation 5",
          description: "Schwarz-weiße Version der PS5 kommt in den Verkauf.",
        },
        WomenCollections: {
          title: "Frauenkollektionen",
          description:
            "Vorgestellte Frauensammlungen, die Ihnen eine andere Stimmung verleihen.",
        },
        speakers: {
          title: "Lautsprecher",
          description: "Amazon kabellose Lautsprecher",
        },
        perfume: {
          title: "Parfüm",
          description: "GUCCI INTENSE OUD EDP",
        },
      },
      footer: {
        subscribe: "Abonnieren",
        offer: "Erhalten Sie 10% Rabatt auf Ihre erste Bestellung",
        enterEmail: "Geben Sie Ihre E-Mail-Adresse ein",
        enterPassword: "Geben Sie Ihr Passwort ein",
        account: "Konto",
        myAccount: "Mein Konto",
        sign: "Anmelden / Registrieren",
        cart: "Warenkorb",
        wishlist: "Wunschliste",
        shop: "Geschäft",
        downloadApp: "App herunterladen",
        save: "Sparen Sie 3 $ mit App Nur für neue Benutzer",
        support: "Unterstützung",
        address: "University of Ghana, P.O.Box LG 25 Legon, Ghana, Greater-Accra",
        quickLinks: "Schnelle Links",
        privacy: "Datenschutz-Bestimmungen",
        usage: "Nutzungsbedingungen",
        FAQ: "FAQ",
        Contact: "Kontakt",
        copyrights: "© Urheberrecht Rimel 2022. Alle Rechte vorbehalten",
        allRightsReserved: "© Alle Rechte vorbehalten",
      },
    },
  },

  ar: {
    translation: {
      font: "font-noto",
      dir: "rtl",
      topHeader:
        "تخفيضات الصيف على جميع بدلات السباحة والتوصيل السريع المجاني - خصم 50%!",
      shop: "تسوق الآن",
      welcome: "مرحبًا بك في موقع التجارة الإلكترونية",
      home: "الصفحة الرئيسية",
      contact: "اتصل بنا",
      about: "من نحن",
      signUp: "إنشاء حساب",
      account: "حسابي",
      headerIcons: {
        1: "إدارة حسابي",
        2: "طلبي",
        3: "إلغاءاتي",
        4: "تقييماتي",
        5: "تسجيل الخروج",
      },
      search: "...بحث",
      homeSections: {
        row1: {
          col1: [
            "أزياء النساء",
            "أزياء الرجال",
            "إلكترونيات",
            "المنزل ونمط الحياة",
            "الطب",
            "الرياضة والهواء الطلق",
            "ألعاب الأطفال",
            "البقالة والحيوانات الأليفة",
            "الصحة والجمال",
          ],
          col2: ["سلسلة iPhone 14", "حتى 10% خصم القسيمة", "تسوق الآن"],
        },
        row2: ["اليوم", "عروض الفلاش", "أيام", "ساعات", "دقائق", "ثواني"],
      },
      removeFromCart: "إزالة من السلة",
      addToCart: "أضف إلى السلة",
      new: "جديد",
      itemsArray: {
        0: {
          title: "سيارة كهربائية للأطفال",
          type: "ألعاب",
          details:
            "سيارة كهربائية مثيرة للأطفال للقيادة بأناقة، توفر ساعات من الترفيه والمرح.",
        },
        1: {
          title: "كاميرا CANON EOS DSLR",
          type: "تكنولوجيا",
          details:
            "التقاط صور وفيديوهات مذهلة بهذه الكاميرا الاحترافية من كانون DSLR، مثالية لهواة التصوير.",
        },
        2: {
          title: "طعام كلب جاف للسلالة",
          type: "عام",
          details:
            "طعام كلب جاف غذائي للحفاظ على صحة وسعادة صديقك الفروي، مصنوع من مكونات عالية الجودة.",
        },
        3: {
          title: "لابتوب ASUS FHD للألعاب",
          type: "تكنولوجيا",
          details:
            "تجربة ألعاب عالية الأداء مع لابتوب ASUS FHD للألعاب، الذي يتميز برسومات متقدمة ولعب سلس.",
        },
        4: {
          title: "مجموعة منتجات Curology",
          type: "عام",
          details:
            "مجموعة كاملة للعناية بالبشرة من Curology لتنظيفها وترطيبها وحمايتها، مما يجعلها ناعمة ومشعة.",
        },
        5: {
          title: "جيمباد USB GP11 Shooter",
          type: "ألعاب",
          details:
            "تعزيز تجربة الألعاب الخاصة بك مع جيمباد USB GP11 Shooter، الذي يتميز ببناء عالي الجودة وتحكم دقيق.",
        },
        6: {
          title: "جاكيت ساتان مبطن",
          type: "ملابس",
          details:
            "ابقَ أنيقًا ودافئًا مع جاكيت ساتان مبطن، مثالية لإضافة لمسة عصرية إلى ملابسك.",
        },
        7: {
          title: "رف كتب صغير",
          type: "عام",
          details:
            "نظم كتبك والأشياء الزخرفية بشكل منظم مع هذا الرف الصغير للكتب، مصمم ليناسب المساحات المدمجة.",
        },
        8: {
          title: "مبرد سائل لوحدة المعالجة المركزية RGB",
          type: "تكنولوجيا",
          details:
            "احتفظ بوحدة المعالجة المركزية باردة وتعمل بسلاسة مع مبرد سائل وحدة المعالجة المركزية RGB، الذي يتميز بمضخة عالية الأداء وإضاءة RGB قابلة للتخصيص.",
        },
        9: {
          title: "حقيبة سفر Gucci",
          type: "ملابس",
          details:
            "سافر بأناقة مع حقيبة سفر Gucci، المصنوعة من مواد فاخرة ومصممة للمتانة والفخامة.",
        },
        10: {
          title: "معطف The North",
          type: "ملابس",
          details:
            "ابقَ دافئًا وعصريًا مع معطف The North، الذي يتميز ببناء متين وتصميم خالد.",
        },
        11: {
          title: "جيمباد HAVIT HV-G92",
          type: "ألعاب",
          details:
            "استمتع بتحكم ألعاب سريع ودقيق مع جيمباد HAVIT HV-G92، المصمم لساعات من المرح في الألعاب.",
        },
        12: {
          title: "لوحة مفاتيح سلكية AK-900",
          type: "تكنولوجيا",
          details:
            "اكتب بسرعة ودقة باستخدام لوحة المفاتيح السلكية AK-900، التي تتميز ببناء متين وتصميم مريح.",
        },
        13: {
          title: "شاشة ألعاب IPS LCD",
          type: "تكنولوجيا",
          details:
            "غمر نفسك في الألعاب مع شاشة ألعاب IPS LCD، التي تقدم صورًا حية ولعبًا سلسًا.",
        },
        14: {
          title: "كرسي راحة من السلسلة S",
          type: "ملابس",
          details:
            "استرخ في راحة مع كرسي الراحة من السلسلة S، الذي يتميز بتصميم مريح ووسادة ناعمة لساعات طويلة من الجلوس.",
        },
        15: {
          title: "JBL Boombox 2",
          type: "جديد",
          details:
            "استمع إلى صوت قوي مع JBL Boombox 2، الذي يتميز بتصميم قوي وعمر بطارية طويل للاستماع طوال اليوم.",
        },
        16: {
          title: "عطر",
          type: "جديد",
          details:
            "هذا العطر هو مزيج من العود والورد واللبان، مما يخلق رائحة غنية وفاخرة تدوم طوال اليوم.",
        },
        17: {
          title: "هاتف",
          type: "جديد",
          details:
            "يتميز هذا الهاتف بشاشة كبيرة ومعالج قوي وعمر بطارية طويل، مثالي للعمل واللعب.",
        },
        18: {
          title: "بلاي ستيشن 5",
          type: "جديد",
          details: "النسخة السوداء والبيضاء من PS5 تصدر للبيع.",
        },
        19: {
          title: "سماعات",
          type: "جديد",
          details: "جودة صوت مذهلة مع سماعة Amazon اللاسلكية.",
        },
        20: {
          title: "مجموعات النساء",
          type: "جديد",
          details:
            "مجموعات نسائية مميزة تمنحك جوًا آخر، ويمكنك العثور على أفضل المجموعات هنا.",
        },
        21: {
          title: "أحذية كرة القدم",
          type: "جديد",
          details:
            "أفضل أحذية كرة القدم للعبتك، ويمكنك العثور على أفضل المجموعات هنا.",
        },
      },
      categories: {
        general: "عام",
        technology: "تكنولوجيا",
        gaming: "ألعاب",
        clothes: "ملابس",
        newArrival: "جديد",
      },

      services: {
        0: {
          value: "توصيل مجاني وسريع",
          description: "توصيل مجاني لجميع الطلبات التي تزيد عن 140 دولارًا",
        },
        1: {
          value: "خدمة عملاء على مدار الساعة",
          description: "دعم عملاء ودود على مدار الساعة",
        },
        2: {
          value: "ضمان استعادة الأموال",
          description: "نعيد الأموال خلال 30 يومًا",
        },
      },
      redButtons: {
        viewAllProducts: "عرض جميع المنتجات",
        viewAll: "عرض الكل",
        exploreByCategory: "استكشاف حسب الفئة",
        buyNow: "اشتر الآن",
        sendMassage: "إرسال رسالة",
        createAccount: "إنشاء حساب",
        login: "تسجيل الدخول",
        applyCoupon: "تطبيق القسيمة",
        processToCheckout: "الانتقال إلى الخروج",
        placeOrder: "تقديم الطلب",
        backToHomePage: "العودة إلى الصفحة الرئيسية",
        chooseByCategory: "اختيار حسب الفئة",
      },
      whiteButtons: {
        backToHomePage: "العودة إلى الصفحة الرئيسية",
        loadMore: "تحميل المزيد..",
        moveAllToBag: "وضع الكل في السلة",
        seeAll: "عرض الكل",
        returnToShop: "العودة للتسوق",
        updateCart: "تحديث السلة",
      },
      wishlist: {
        title: "قائمة الرغبات",
        justForYou: "فقط لك",
      },
      cart: {
        header: {
          product: "المنتج",
          price: "السعر",
          quantity: "الكمية",
          subtotal: "المجموع الفرعي",
        },
        cartTotal: "المجموع الكلي للسلة",
        total: "الإجمالي",
        subtotal: "المجموع الفرعي",
        shipping: "الشحن",
        free: "مجانًا",
      },
      checkOut: {
        title: "الدفع",
        billingDetails: "تفاصيل الفواتير",
        firstName: "الاسم الأول",
        company: "الشركة",
        Country: "البلد",
        address: "العنوان",
        city: "المدينة",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        apartment: "الشقة، الطابق الخ (اختياري)",
        methods: "طرق الدفع",
        bank: "بنك (فيزا)",
        cash: "الدفع عند الاستلام",
        couponCode: "رمز القسيمة",
      },
      payment: {
        payment: "تفاصيل الدفع",
        number: "رقم البطاقة",
        enter: "أدخل رقم بطاقتك",
        expirationDate: "تاريخ انتهاء الصلاحية",
      },
      productPage: {
        relatedItems: "العناصر ذات الصلة",
        colors: "الألوان",
        size: "الحجم",
        inStock: "متوفر",
        reviews: "تقييم",
        review: "تقييم",
        1: "التوصيل المجاني",
        1.1: "أدخل الرمز البريدي الخاص بك للتحقق من توفر التسليم",
        2: "الإرجاع",
        2.1: "تفاصيل الإرجاع المجاني لمدة 30 يومًا",
      },
      contactPage: {
        call: "اتصل بنا",
        available: "نحن متاحون على مدار الساعة طوال أيام الأسبوع.",
        phone: "الهاتف",
        write: "اكتب لنا",
        fillForm: "املأ نموذجنا وسنتصل بك في غضون 24 ساعة.",
        emails: "البريد الإلكتروني",
        yourName: "اسمك",
        yourEmail: "بريدك الإلكتروني",
        yourPhone: "رقم هاتفك",
        yourMessage: "رسالتك",
      },
      aboutPage: {
        title: "من نحن",
        story: "قصتنا",
        paragraph1:
          "تم إطلاق هذا الموقع بواسطة DedSec وأعضاء مجموعته كمشروع فصل دراسي. نحن حاليًا في جامعة غانا ونقدم تكنولوجيا المعلومات كبرنامج. نحن جميعًا في المستوى 200. إذا كانت هناك أي مشكلة، فلا تتردد في إخبارنا شكرًا لك😊",
        paragraph2:
          "يقدم DedSec أكثر من مليون منتج، وهو ينمو بسرعة كبيرة. يقدم DedSec مجموعة متنوعة من الفئات التي تتراوح من المستهلك.",
        card1: "البائعين نشطون على موقعنا",
        card2: "مبيعات المنتجات الشهرية",
        card3: "العملاء نشطون على موقعنا",
        card4: "الإيرادات الإجمالية السنوية على موقعنا",
        k1: "10.5k",
        k2: "33k",
        k3: "45.5k",
        k4: "25k",
        name1: "توم كروز",
        name2: "توم هانكس",
        name3: "ويل سميث",
        name4: "توم هاردي",
        job1: "مؤسس ورئيس",
        job2: "المدير التنفيذي للتكنولوجيا",
        job3: "الرئيس التنفيذي",
        job4: "مصمم المنتج",
      },
      accountPage: {
        setMassage: "تم تحديث تفاصيل الحساب بنجاح!",
        welcome: "مرحبًا! ",
        home: "الصفحة الرئيسية",
        myAccount: "حسابي",
        ManageMyAccount: "إدارة حسابي",
        myProfile: "ملفي",
        addressBook: "دليل العناوين",
        myPaymentOptions: "خيارات الدفع الخاصة بي",
        myOrders: "طلباتي",
        myReturns: "إرجاعاتي",
        myCancelations: "إلغاءاتي",
        myWishlist: "قائمة الرغبات",
        editYourProfile: "تحرير ملفك الشخصي",
        firstName: "الاسم الأول",
        yourFirstName: "اسمك الأول",
        lastName: "الاسم الأخير",
        yourLastName: "اسمك الأخير",
        email: "البريد الإلكتروني",
        yourEmail: "بريدك الإلكتروني",
        address: "العنوان",
        yourAddress: "عنوانك",
        passwordChanges: "تغيير كلمة المرور",
        currentPassword: "كلمة المرور الحالية",
        newPassword: "كلمة المرور الجديدة",
        confirmPassword: "تأكيد كلمة المرور",
        cancel: "إلغاء",
        saveChanges: "حفظ التغييرات",
      },

      signUpPage: {
        title: "إنشاء حساب",
        enter: "أدخل بياناتك أدناه:",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        createAccount: "إنشاء حساب",
        withGoogle: "تسجيل الدخول بواسطة جوجل",
        haveAccount: "هل لديك حساب بالفعل؟",
        login: "تسجيل الدخول",
      },
      loginPage: {
        title: "تسجيل الدخول إلى DedSec",
        enter: "أدخل بياناتك أدناه:",
        emailOrPhone: "البريد الإلكتروني أو رقم الهاتف",
        password: "كلمة المرور",
        forgot: "نسيت كلمة المرور؟",
        notHaveAccount: "ليس لديك حساب بعد؟",
        login: "تسجيل الدخول",
      },

      Snackbar: {
        inCart: "العناصر موجود بالفعل في السلة!",
        movedToCart: "تم نقل العناصر بنجاح إلى السلة!",
        noItems: "لا توجد عناصر لنقلها إلى السلة!",
      },

      category: {
        redTitle: "الفئات",
        title: "تصفح حسب الفئة",
        categories: {
          0: "الهواتف",
          1: "الكمبيوتر",
          2: "الساعات الذكية",
          3: "الكاميرا",
          4: "سماعات الرأس",
          5: "ألعاب",
        },
      },
      bestSelling: {
        redTitle: "هذا الشهر",
        title: "أفضل المنتجات المباعة",
      },
      deal: {
        greenTitle: "الفئات",
        title: "تعزيز تجربة الاستماع الخاصة بك",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني",
        buyNow: "اشتر الآن!",
      },
      allProducts: {
        redTitle: "منتجاتنا",
        title: "استكشف منتجاتنا",
        byCategory: "استكشف حسب الفئة",
      },
      featured: {
        redTitle: "متميز",
        title: "وصول جديد",
        shopNow: "تسوق الآن",
        playStation: {
          title: "بلاي ستيشن 5",
          description: "النسخة السوداء والبيضاء من PS5 تصدر للبيع.",
        },
        WomenCollections: {
          title: "مجموعات النساء",
          description: "مجموعات نسائية مميزة تمنحك جوًا آخر.",
        },
        speakers: {
          title: "مكبرات الصوت",
          description: "مكبرات صوت لاسلكية من Amazon",
        },
        perfume: {
          title: "عطر",
          description: "GUCCI INTENSE OUD EDP",
        },
      },
      footer: {
        subscribe: "اشترك",
        offer: "احصل على خصم 10% على طلبك الأول",
        enterEmail: "أدخل بريدك الإلكتروني",
        enterPassword: "أدخل كلمة المرور",
        account: "الحساب",
        myAccount: "حسابي",
        sign: "تسجيل الدخول / التسجيل",
        cart: "عربة التسوق",
        wishlist: "قائمة الرغبات",
        shop: "متجر",
        downloadApp: "تحميل التطبيق",
        save: "وفر 3 دولارات مع تطبيق جديد للمستخدمين فقط",
        support: "الدعم",
        address: "University of Ghana, P.O.Box LG 25 Legon, Ghana, Greater-Accra",
        quickLinks: "روابط سريعة",
        privacy: "سياسة الخصوصية",
        usage: "شروط الاستخدام",
        FAQ: "الأسئلة الشائعة",
        Contact: "اتصل بنا",
        copyrights: "© حقوق الطبع والنشر Rimel 2022. كل الحقوق محفوظة",
        allRightsReserved: "© كل الحقوق محفوظة",
      },
    },
  },

  es: {
    translation: {
      font: "font-noto",
      dir: "ltr",
      topHeader: "¡Descuentos y envío rápido gratis - 50% de descuento!",
      shop: "Compra ahora",
      welcome: "Bienvenido a la tienda en línea",
      home: "Inicio",
      contact: "Contáctenos",
      about: "Acerca de",
      signUp: "Crear cuenta",
      account: "Mi cuenta",
      headerIcons: {
        1: "Administrar mi cuenta",
        2: "Mis pedidos",
        3: "Mis cancelaciones",
        4: "Mis reseñas",
        5: "Cerrar sesión",
      },
      search: "Buscar...",
      homeSections: {
        row1: {
          col1: [
            "Moda para mujer",
            "Moda para hombre",
            "Electrónica",
            "Hogar y estilo de vida",
            "Salud",
            "Deportes y aire libre",
            "Juguetes para niños",
            "Comestibles y mascotas",
            "Salud y belleza",
          ],
          col2: [
            "Serie iPhone 14",
            "Hasta 10% de descuento en cupones",
            "Compra ahora",
          ],
        },
        row2: [
          "Hoy",
          "Ofertas de flash",
          "Días",
          "Horas",
          "Minutos",
          "Segundos",
        ],
      },
      removeFromCart: "Eliminar del carrito",
      addToCart: "Agregar al carrito",
      new: "Nuevo",
      itemsArray: {
        0: {
          title: "Coche eléctrico para niños",
          type: "Juguetes",
          details:
            "Un emocionante coche eléctrico para niños para conducir con estilo, que proporciona horas de entretenimiento y diversión.",
        },
        1: {
          title: "Cámara CANON EOS DSLR",
          type: "Tecnología",
          details:
            "Capture fotos y videos asombrosos con esta cámara profesional Canon DSLR, ideal para aficionados a la fotografía.",
        },
        2: {
          title: "Comida seca para perros de raza",
          type: "General",
          details:
            "Alimento seco para perros nutritivo para mantener la salud y la felicidad de su amigo peludo, hecho con ingredientes de alta calidad.",
        },
        3: {
          title: "Laptop ASUS FHD para juegos",
          type: "Tecnología",
          details:
            "Experimente un rendimiento de juego de alta calidad con la laptop ASUS FHD para juegos, que cuenta con gráficos avanzados y un juego fluido.",
        },
        4: {
          title: "Conjunto de productos Curology",
          type: "General",
          details:
            "Un conjunto completo de cuidado de la piel de Curology para limpiar, hidratar y proteger, dejando la piel suave y radiante.",
        },
        5: {
          title: "Gamepad USB GP11 Shooter",
          type: "Juguetes",
          details:
            "Mejore su experiencia de juego con el gamepad USB GP11 Shooter, que cuenta con una construcción de alta calidad y un control preciso.",
        },
        6: {
          title: "Chaqueta acolchada de satén",
          type: "Ropa",
          details:
            "Manténgase elegante y cálido con una chaqueta acolchada de satén, perfecta para agregar un toque moderno a su atuendo.",
        },
        7: {
          title: "Estante de libros pequeño",
          type: "General",
          details:
            "Organice sus libros y decoraciones de manera ordenada con este pequeño estante de libros, diseñado para adaptarse a espacios compactos.",
        },
        8: {
          title: "Refrigeración líquida de CPU RGB",
          type: "Tecnología",
          details:
            "Mantenga su CPU fresca y funcionando sin problemas con la refrigeración líquida de CPU RGB, que cuenta con una bomba de alto rendimiento y una iluminación RGB personalizable.",
        },
        9: {
          title: "Bolso de viaje Gucci",
          type: "Ropa",
          details:
            "Viaje con estilo con el bolso de viaje Gucci, hecho de materiales de lujo y diseñado para durabilidad y lujo.",
        },
        10: {
          title: "Abrigo The North",
          type: "Ropa",
          details:
            "Manténgase cálido y elegante con el abrigo The North, que cuenta con una construcción resistente y un diseño atemporal.",
        },
        11: {
          title: "Gamepad HAVIT HV-G92",
          type: "Juguetes",
          details:
            "Disfrute de un control de juego rápido y preciso con el gamepad HAVIT HV-G92, diseñado para horas de diversión en los juegos.",
        },
        12: {
          title: "Teclado con cable AK-900",
          type: "Tecnología",
          details:
            "Escriba rápido y con precisión con el teclado con cable AK-900, que cuenta con una construcción resistente y un diseño cómodo.",
        },
        13: {
          title: "Pantalla de juegos IPS LCD",
          type: "Tecnología",
          details:
            "Sumérjase en los juegos con la pantalla de juegos IPS LCD, que ofrece imágenes vibrantes y un juego fluido.",
        },
        14: {
          title: "Silla reclinable de la serie S",
          type: "Ropa",
          details:
            "Relájese en la comodidad con la silla reclinable de la serie S, que cuenta con un diseño cómodo y un cojín suave para horas de asiento.",
        },
        15: {
          title: "JBL Boombox 2",
          type: "Nuevo",
          details:
            "Escuche un sonido potente con JBL Boombox 2, que cuenta con un diseño resistente y una larga duración de la batería para escuchar todo el día.",
        },
        16: {
          title: "Perfume",
          type: "Nuevo",
          details:
            "Esta fragancia es una mezcla de oud, rosa e incienso, creando un aroma rico y lujoso que dura todo el día.",
        },
        17: {
          title: "Teléfono",
          type: "Nuevo",
          details:
            "Este teléfono cuenta con una pantalla grande, un procesador potente y una larga duración de la batería, perfecto para trabajar y jugar.",
        },
        18: {
          title: "PlayStation 5`",
          type: "Nuevo",
          details: "La versión en blanco",
        },
        19: {
          title: "Altavoces",
          type: "Nuevo",
          details:
            "Calidad de sonido asombrosa con altavoz inalámbrico Amazon.",
        },
        20: {
          title: "Colecciones de mujeres",
          type: "Nuevo",
          details:
            "Colecciones de mujeres exclusivas que te dan un ambiente diferente.",
        },
        21: {
          title: "Zapatos de fútbol",
          type: "Nuevo",
          details:
            "Los mejores zapatos de fútbol para tu juego, puedes encontrar las mejores colecciones aquí.",
        },
      },
      categories: {
        general: "General",
        technology: "Tecnología",
        gaming: "Juguetes",
        clothes: "Ropa",
        newArrival: "Nuevo",
      },
      services: {
        0: {
          value: "Envío rápido y gratuito",
          description:
            "Envío gratuito para todos los pedidos superiores a 140 dólares",
        },
        1: {
          value: "Servicio al cliente las 24 horas",
          description:
            "Soporte amigable al cliente las 24 horas del día, los 7 días de la semana",
        },
        2: {
          value: "Garantía de devolución de dinero",
          description: "Reembolsamos el dinero en 30 días",
        },
      },
      redButtons: {
        viewAllProducts: "Ver todos los productos",
        viewAll: "Ver todo",
        exploreByCategory: "Explorar por categoría",
        buyNow: "Comprar ahora",
        sendMassage: "Enviar mensaje",
        createAccount: "Crear cuenta",
        login: "Iniciar sesión",
        applyCoupon: "Aplicar cupón",
        processToCheckout: "Procesar al pago",
        placeOrder: "Realizar pedido",
        backToHomePage: "Volver a la página de inicio",
        chooseByCategory: "Elegir por categoría",
      },
      whiteButtons: {
        backToHomePage: "Volver a la página de inicio",
        loadMore: "Cargar más..",
        moveAllToBag: "Mover todo a la bolsa",
        seeAll: "Ver todo",
        returnToShop: "Volver a comprar",
        updateCart: "Actualizar carrito",
      },
      wishlist: {
        title: "Lista de deseos",
        justForYou: "Solo para ti",
      },
      cart: {
        header: {
          product: "Producto",
          price: "Precio",
          quantity: "Cantidad",
          subtotal: "Subtotal",
        },
        cartTotal: "Total del carrito",
        total: "Total",
        subtotal: "Subtotal",
        shipping: "Envío",
        free: "Gratis",
      },
      checkOut: {
        title: "Pago",
        billingDetails: "Detalles de facturación",
        firstName: "Nombre de pila",
        company: "Empresa",
        Country: "País",
        address: "Dirección",
        city: "Ciudad",
        phone: "Teléfono",
        email: "Correo electrónico",
        apartment: "Apartamento, piso, etc. (opcional)",
        methods: "Métodos de pago",
        bank: "Banco (Visa)",
        cash: "Pago contra reembolso",
        couponCode: "Código de cupón",
      },
      payment: {
        payment: "Detalles de pago",
        number: "Número de tarjeta",
        enter: "Ingrese su número de tarjeta",
        expirationDate: "Fecha de vencimiento",
      },
      productPage: {
        relatedItems: "Artículos relacionados",
        colors: "Colores",
        size: "Talla",
        inStock: "En stock",
        reviews: "Reseñas",
        review: "Reseña",
        1: "Envío gratis",
        1.1: "Ingrese su código postal para verificar la disponibilidad de entrega",
        2: "Devolución",
        2.1: "Detalles de devolución gratuitos durante 30 días",
      },
      contactPage: {
        call: "Llámanos",
        available:
          "Estamos disponibles las 24 horas del día, los 7 días de la semana.",
        phone: "Teléfono",
        write: "Escríbenos",
        fillForm:
          "Complete nuestro formulario y nos comunicaremos con usted en 24 horas.",
        emails: "Correos electrónicos",
        yourName: "Tu nombre",
        yourEmail: "Tu correo electrónico",
        yourPhone: "Tu teléfono",
        yourMessage: "Tu mensaje",
      },
      aboutPage: {
        title: "Sobre nosotros",
        story: "Nuestra historia",
        paragraph1:
          "Este sitio web fue lanzado por DedSec y los miembros de su grupo como un proyecto semestral. Actualmente estamos en la Universidad de Ghana y ofrecemos Tecnología de la información como programa. Todos estamos en el nivel 200. Si hay algún problema, no dude en informarnos. ¡Gracias!",
        paragraph2:
          "DedSec ofrece más de un millón de productos y está creciendo rápidamente. DedSec ofrece una variedad de categorías que van desde el consumidor.",
        card1: "Vendedores activos en nuestro sitio",
        card2: "Ventas mensuales de productos",
        card3: "Clientes activos en nuestro sitio",
        card4: "Ingresos totales anuales en nuestro sitio",
        k1: "10.5k",
        k2: "33k",
        k3: "45.5k",
        k4: "25k",
        name1: "Michael Anarfo",
        name2: "Nunoo Mensah",
        name3: "Kelvin Tetteh",
        name4: "Joseph Gyimah",
        job1: "Fundador y CEO",
        job2: "Backend y CEO",
        job3: "UI/UX tester",
        job4: "Diseñador de productos",
      },
      accountPage: {
        setMassage: "¡Se han actualizado los detalles de la cuenta con éxito!",
        welcome: "¡Hola! ",
        home: "Inicio",
        myAccount: "Mi cuenta",
        ManageMyAccount: "Administrar mi cuenta",
        myProfile: "Mi perfil",
        addressBook: "Libreta de direcciones",
        myPaymentOptions: "Mis opciones de pago",
        myOrders: "Mis pedidos",
        myReturns: "Mis devoluciones",
        myCancelations: "Mis cancelaciones",
        myWishlist: "Mi lista de deseos",
        editYourProfile: "Editar tu perfil",
        firstName: "Nombre de pila",
        yourFirstName: "Tu nombre de pila",
        lastName: "Apellido",
        yourLastName: "Tu apellido",
        email: "Correo electrónico",
        yourEmail: "Tu correo electrónico",
        address: "Dirección",
        yourAddress: "Tu dirección",
        passwordChanges: "Cambiar contraseña",
        currentPassword: "Contraseña actual",
        newPassword: "Nueva contraseña",
        confirmPassword: "Confirmar contraseña",
        cancel: "Cancelar",
        saveChanges: "Guardar cambios",
      },

      signUpPage: {
        title: "Crear cuenta",
        enter: "Ingrese sus datos a continuación:",
        email: "Correo electrónico",
        password: "Contraseña",
        createAccount: "Crear cuenta",
        withGoogle: "Iniciar sesión con Google",
        haveAccount: "¿Ya tienes una cuenta?",
        login: "Iniciar sesión",
      },
      loginPage: {
        title: "Iniciar sesión en DedSec",
        enter: "Ingrese sus datos a continuación:",
        emailOrPhone: "Correo electrónico o número de teléfono",
        password: "Contraseña",
        forgot: "¿Olvidaste tu contraseña?",
        notHaveAccount: "¿No tienes una cuenta?",
        login: "Iniciar sesión",
      },
      Snackbar: {
        inCart: "¡Los artículos ya están en el carrito!",
        movedToCart: "¡Los artículos se han movido con éxito al carrito!",
        noItems: "¡No hay artículos para mover al carrito!",
      },
      category: {
        redTitle: "Categorías",
        title: "Explorar por categoría",
        categories: {
          0: "Teléfonos",
          1: "Computadoras",
          2: "Relojes inteligentes",
          3: "Cámaras",
          4: "Audífonos",
          5: "Juegos",
        },
      },
      bestSelling: {
        redTitle: "Este mes",
        title: "Mejores productos vendidos",
      },
      deal: {
        greenTitle: "Ofertas",
        title: "Mejora tu experiencia auditiva",
        days: "Días",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos",
        buyNow: "¡Compra ahora!",
      },
      allProducts: {
        redTitle: "Productos",
        title: "Explora nuestros productos",
        byCategory: "Explora por categoría",
      },
      featured: {
        redTitle: "Destacado",
        title: "Nueva llegada",
        shopNow: "Compra ahora",
        playStation: {
          title: "PlayStation 5",
          description: "La versión en blanco",
        },
        WomenCollections: {
          title: "Colecciones de mujeres",
          description:
            "Colecciones de mujeres exclusivas que te dan un ambiente diferente.",
        },
        speakers: {
          title: "Altavoces",
          description:
            "Calidad de sonido asombrosa con altavoz inalámbrico Amazon.",
        },
        perfume: {
          title: "Perfume",
          description: "GUCCI INTENSE OUD EDP",
        },
      },
      footer: {
        subscribe: "Suscribirse",
        offer: "Obtenga un 10% de descuento en su primer pedido",
        enterEmail: "Ingrese su correo electrónico",
        enterPassword: "Ingrese su contraseña",
        account: "Cuenta",
        myAccount: "Mi cuenta",
        sign: "Iniciar sesión / Registrarse",
        cart: "Carrito",
        wishlist: "Lista de deseos",
        shop: "Tienda",
        downloadApp: "Descargar la aplicación",
        save: "Ahorre 3 dólares con la nueva aplicación solo para usuarios nuevos",
        support: "Soporte",
        address: "University of Ghana, P.O.Box LG 25 Legon, Ghana, Greater-Accra",
        quickLinks: "Enlaces rápidos",
        privacy: "Política de privacidad",
        usage: "Términos de uso",
        FAQ: "Preguntas frecuentes",
        Contact: "Contáctenos",
        copyrights:
          "© Derechos de autor Rimel 2022. Todos los derechos reservados",
        allRightsReserved: "© Todos los derechos reservados",
      },
    },
  },
};

// Initialize i18n
i18n.use(initReactI18next).init({
  lng: defaultLang,
  resources,
  keySeparator: ".",
  interpolation: { escapeValue: false },
});

export default i18n;
