const PROPERTY_LISTINGS = [
  {
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    title: "Luxury Villa in DHA Phase 6",
    address: "DHA Phase 6, Karachi",
    beds: 5,
    baths: 4,
    sqYards: 500,
    views: 1245,
    published: "12 Jun 2026",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    title: "Modern Family House",
    address: "Bahria Town, Karachi",
    beds: 4,
    baths: 3,
    sqYards: 250,
    views: 892,
    published: "08 Jun 2026",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    title: "Premium Corner Villa",
    address: "DHA Phase 8, Karachi",
    beds: 6,
    baths: 5,
    sqYards: 600,
    views: 1580,
    published: "05 Jun 2026",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    title: "Elegant Residential Home",
    address: "Gulshan-e-Iqbal, Karachi",
    beds: 3,
    baths: 3,
    sqYards: 180,
    views: 674,
    published: "01 Jun 2026",
  },
];

const PROPERTY_TYPE = ["house", "apartment", "villa", "Commercial"];
const LISTING_TYPE = ["rent", "sale"];
const STATUS = ["Published", "draft", "pending review"];
const LOCATION = [
  "Bahria Town, Karachi",
  "Gulshan-e-Iqbal, Karachi",
  "DHA Phase 8, Karachi",
  "DHA Phase 6, Karachi",
];
const BEDS = [2, 4, 6];
const BATHS = [2, 3];

export {
  PROPERTY_LISTINGS,
  LISTING_TYPE,
  BEDS,
  BATHS,
  LOCATION,
  STATUS,
  PROPERTY_TYPE,
};
