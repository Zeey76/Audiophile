export interface Product {
    slug: string;
    name: string;
    category: string;
    isNew: boolean;
    price: number;
    description: string;
    features: string;
    imageMobile: string;
    imageTablet: string;
    imageDesktop: string;
    categoryImageMobile: string;
    categoryImageTablet: string;
    categoryImageDesktop: string;
    galleryFirstMobile: string;
    galleryFirstTablet: string;
    galleryFirstDesktop: string;
    gallerySecondMobile: string;
    gallerySecondTablet: string;
    gallerySecondDesktop: string;
    galleryThirdMobile: string;
    galleryThirdTablet: string;
    galleryThirdDesktop: string;
    includedItems: IncludedItem[];
    relatedProducts: RelatedProduct[];
  }
  
  interface IncludedItem {
    quantity: number;
    item: string;
  }
  
  interface RelatedProduct {
    slug: string;
    name: string;
    imageMobile: string;
    imageTablet: string;
    imageDesktop: string;
  }
  