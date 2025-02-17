export type Product = {
    id: number;
    slug: string;
    name: string;
    category: string;
    isNew: boolean;
    price: number;
    description: string;
    features: string;
  
    // Related images
    imageMobile: string;
    imageTablet: string;
    imageDesktop: string;
  
    categoryImageMobile: string;
    categoryImageTablet: string;
    categoryImageDesktop: string;
  
    // Gallery images
    galleryFirstMobile: string;
    galleryFirstTablet: string;
    galleryFirstDesktop: string;
  
    gallerySecondMobile: string;
    gallerySecondTablet: string;
    gallerySecondDesktop: string;
  
    galleryThirdMobile: string;
    galleryThirdTablet: string;
    galleryThirdDesktop: string;
  
    // Relations
    includedItems: IncludedItem[];
    relatedProducts: RelatedProduct[];
  };
  
  type IncludedItem = {
    id: number;
    quantity: number;
    item: string;
    productId: number;
    product?: Product;
  };
  
  type RelatedProduct = {
    id: number;
    slug: string;
    name: string;
    imageMobile: string;
    imageTablet: string;
    imageDesktop: string;
    productId: number;
    product?: Product;
  };
  