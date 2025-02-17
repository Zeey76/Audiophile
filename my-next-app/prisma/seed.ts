import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    console.log('Starting seed...');

    // Clean existing data
    await prisma.relatedProduct.deleteMany();
    await prisma.includedItem.deleteMany();
    await prisma.product.deleteMany();

    // Hardcoded product data
    const products = [
        {
            slug: "yx1-earphones",
            name: "YX1 Wireless Earphones",
            category: "earphones",
            isNew: true,
            price: 599,
            description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
            features: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
            imageMobile: "./assets/product-yx1-earphones/mobile/image-product.jpg",
            imageTablet: "./assets/product-yx1-earphones/tablet/image-product.jpg",
            imageDesktop: "./assets/product-yx1-earphones/desktop/image-product.jpg",
            categoryImageMobile: "./assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
            categoryImageTablet: "./assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
            categoryImageDesktop: "./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
            galleryFirstMobile: "./assets/product-yx1-earphones/mobile/image-gallery-1.jpg",
            galleryFirstTablet: "./assets/product-yx1-earphones/tablet/image-gallery-1.jpg",
            galleryFirstDesktop: "./assets/product-yx1-earphones/desktop/image-gallery-1.jpg",
            gallerySecondMobile: "./assets/product-yx1-earphones/mobile/image-gallery-2.jpg",
            gallerySecondTablet: "./assets/product-yx1-earphones/tablet/image-gallery-2.jpg",
            gallerySecondDesktop: "./assets/product-yx1-earphones/desktop/image-gallery-2.jpg",
            galleryThirdMobile: "./assets/product-yx1-earphones/mobile/image-gallery-3.jpg",
            galleryThirdTablet: "./assets/product-yx1-earphones/tablet/image-gallery-3.jpg",
            galleryThirdDesktop: "./assets/product-yx1-earphones/desktop/image-gallery-3.jpg",
            includedItems: [
              { quantity: 2, item: "Earphone unit" },
              { quantity: 6, item: "Multi-size earplugs" },
              { quantity: 1, item: "User manual" },
              { quantity: 1, item: "USB-C charging cable" },
              { quantity: 1, item: "Travel pouch" }
            ],
            relatedProducts: [
              {
                slug: "xx99-mark-one-headphones",
                name: "XX99 Mark I",
                imageMobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
                imageTablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
                imageDesktop: "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
              },
              {
                slug: "xx59-headphones",
                name: "XX59",
                imageMobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
                imageTablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
                imageDesktop: "./assets/shared/desktop/image-xx59-headphones.jpg"
              },
              {
                slug: "zx9-speaker",
                name: "ZX9 Speaker",
                imageMobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
                imageTablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
                imageDesktop: "./assets/shared/desktop/image-zx9-speaker.jpg"
              }
            ]
          },
          {
            slug: "xx59-headphones",
            name: "XX59 Headphones",
            category: "headphones",
            isNew: false,
            price: 899,
            description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
            features: "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
            imageMobile: "./assets/product-xx59-headphones/mobile/image-product.jpg",
            imageTablet: "./assets/product-xx59-headphones/tablet/image-product.jpg",
            imageDesktop: "./assets/product-xx59-headphones/desktop/image-product.jpg",
            categoryImageMobile: "./assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
            categoryImageTablet: "./assets/product-xx59-headphones/tablet/image-category-page-preview.jpg",
            categoryImageDesktop: "./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
            galleryFirstMobile: "./assets/product-xx59-headphones/mobile/image-gallery-1.jpg",
            galleryFirstTablet: "./assets/product-xx59-headphones/tablet/image-gallery-1.jpg",
            galleryFirstDesktop: "./assets/product-xx59-headphones/desktop/image-gallery-1.jpg",
            gallerySecondMobile: "./assets/product-xx59-headphones/mobile/image-gallery-2.jpg",
            gallerySecondTablet: "./assets/product-xx59-headphones/tablet/image-gallery-2.jpg",
            gallerySecondDesktop: "./assets/product-xx59-headphones/desktop/image-gallery-2.jpg",
            galleryThirdMobile: "./assets/product-xx59-headphones/mobile/image-gallery-3.jpg",
            galleryThirdTablet: "./assets/product-xx59-headphones/tablet/image-gallery-3.jpg",
            galleryThirdDesktop: "./assets/product-xx59-headphones/desktop/image-gallery-3.jpg",
            includedItems: [
              { quantity: 1, item: "Headphone unit" },
              { quantity: 2, item: "Replacement earcups" },
              { quantity: 1, item: "User manual" },
              { quantity: 1, item: "3.5mm 5m audio cable" }
            ],
            relatedProducts: [
              {
                slug: "xx99-mark-two-headphones",
                name: "XX99 Mark II",
                imageMobile: "./assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
                imageTablet: "./assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
                imageDesktop: "./assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
              },
              {
                slug: "xx99-mark-one-headphones",
                name: "XX99 Mark I",
                imageMobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
                imageTablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
                imageDesktop: "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
              },
              {
                slug: "zx9-speaker",
                name: "ZX9 Speaker",
                imageMobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
                imageTablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
                imageDesktop: "./assets/shared/desktop/image-zx9-speaker.jpg"
              }
            ]
          },
          {
            slug: "xx99-mark-one-headphones",
            name: "XX99 Mark I Headphones",
            category: "headphones",
            isNew: false,
            price: 1750,
            description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
            features: "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
            imageMobile: "./assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
            imageTablet: "./assets/product-xx99-mark-one-headphones/tablet/image-product.jpg",
            imageDesktop: "./assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
            categoryImageMobile: "./assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
            categoryImageTablet: "./assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
            categoryImageDesktop: "./assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
            galleryFirstMobile: "./assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg",
            galleryFirstTablet: "./assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg",
            galleryFirstDesktop: "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg",
            gallerySecondMobile: "./assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg",
            gallerySecondTablet: "./assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg",
            gallerySecondDesktop: "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg",
            galleryThirdMobile: "./assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg",
            galleryThirdTablet: "./assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg",
            galleryThirdDesktop: "./assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg",
            includedItems: [
              { quantity: 1, item: "Headphone unit" },
              { quantity: 2, item: "Replacement earcups" },
              { quantity: 1, item: "User manual" },
              { quantity: 1, item: "3.5mm 5m audio cable" }
            ],
            relatedProducts: [
              {
                slug: "xx99-mark-two-headphones",
                name: "XX99 Mark II",
                imageMobile: "./assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
                imageTablet: "./assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
                imageDesktop: "./assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
              },
              {
                slug: "xx59-headphones",
                name: "XX59",
                imageMobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
                imageTablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
                imageDesktop: "./assets/shared/desktop/image-xx59-headphones.jpg"
              },
              {
                slug: "zx9-speaker",
                name: "ZX9 Speaker",
                imageMobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
                imageTablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
                imageDesktop: "./assets/shared/desktop/image-zx9-speaker.jpg"
              }
            ]
          },
          {
            slug: "xx99-mark-two-headphones",
            name: "XX99 Mark II Headphones",
            category: "headphones",
            isNew: true,
            price: 2999,
            description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
            features: "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
            imageMobile: "./assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
            imageTablet: "./assets/product-xx99-mark-two-headphones/tablet/image-product.jpg",
            imageDesktop: "./assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
            categoryImageMobile: "./assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
            categoryImageTablet: "./assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
            categoryImageDesktop: "./assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
            galleryFirstMobile: "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg",
            galleryFirstTablet: "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg",
            galleryFirstDesktop: "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg",
            gallerySecondMobile: "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg",
            gallerySecondTablet: "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg",
            gallerySecondDesktop: "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg",
            galleryThirdMobile: "./assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg",
            galleryThirdTablet: "./assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg",
            galleryThirdDesktop: "./assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg",
            includedItems: [
              { quantity: 1, item: "Headphone unit" },
              { quantity: 2, item: "Replacement earcups" },
              { quantity: 1, item: "User manual" },
              { quantity: 1, item: "3.5mm 5m audio cable" },
              { quantity: 1, item: "Travel bag" }
            ],
            relatedProducts: [
              {
                slug: "xx99-mark-one-headphones",
                name: "XX99 Mark I",
                imageMobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
                imageTablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
                imageDesktop: "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
              },
              {
                slug: "xx59-headphones",
                name: "XX59",
                imageMobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
                imageTablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
                imageDesktop: "./assets/shared/desktop/image-xx59-headphones.jpg"
              },
              {
                slug: "zx9-speaker",
                name: "ZX9 Speaker",
                imageMobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
                imageTablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
                imageDesktop: "./assets/shared/desktop/image-zx9-speaker.jpg"
              }
            ]
          },
          {
            slug: "zx7-speaker",
            name: "ZX7 Speaker",
            category: "speakers",
            isNew: false,
            price: 3500,
            description: "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
            features: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
            imageMobile: "./assets/product-zx7-speaker/mobile/image-product.jpg",
            imageTablet: "./assets/product-zx7-speaker/tablet/image-product.jpg",
            imageDesktop: "./assets/product-zx7-speaker/desktop/image-product.jpg",
            categoryImageMobile: "./assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
            categoryImageTablet: "./assets/product-zx7-speaker/tablet/image-category-page-preview.jpg",
            categoryImageDesktop: "./assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
            galleryFirstMobile: "./assets/product-zx7-speaker/mobile/image-gallery-1.jpg",
            galleryFirstTablet: "./assets/product-zx7-speaker/tablet/image-gallery-1.jpg",
            galleryFirstDesktop: "./assets/product-zx7-speaker/desktop/image-gallery-1.jpg",
            gallerySecondMobile: "./assets/product-zx7-speaker/mobile/image-gallery-2.jpg",
            gallerySecondTablet: "./assets/product-zx7-speaker/tablet/image-gallery-2.jpg",
            gallerySecondDesktop: "./assets/product-zx7-speaker/desktop/image-gallery-2.jpg",
            galleryThirdMobile: "./assets/product-zx7-speaker/mobile/image-gallery-3.jpg",
            galleryThirdTablet: "./assets/product-zx7-speaker/tablet/image-gallery-3.jpg",
            galleryThirdDesktop: "./assets/product-zx7-speaker/desktop/image-gallery-3.jpg",
            includedItems: [
              { quantity: 2, item: "Speaker unit" },
              { quantity: 2, item: "Speaker cloth panel" },
              { quantity: 1, item: "User manual" },
              { quantity: 1, item: "3.5mm 7.5m audio cable" },
              { quantity: 1, item: "7.5m optical cable" }
            ],
            relatedProducts: [
              {
                slug: "zx9-speaker",
                name: "ZX9 Speaker",
                imageMobile: "./assets/shared/mobile/image-zx9-speaker.jpg",
                imageTablet: "./assets/shared/tablet/image-zx9-speaker.jpg",
                imageDesktop: "./assets/shared/desktop/image-zx9-speaker.jpg"
              },
              {
                slug: "xx99-mark-one-headphones",
                name: "XX99 Mark I",
                imageMobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
                imageTablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
                imageDesktop: "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
              },
              {
                slug: "xx59-headphones",
                name: "XX59",
                imageMobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
                imageTablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
                imageDesktop: "./assets/shared/desktop/image-xx59-headphones.jpg"
              }
            ]
          },
          {
            slug: "zx9-speaker",
            name: "ZX9 Speaker",
            category: "speakers",
            isNew: true,
            price: 4500,
            description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
            features: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
            imageMobile: "./assets/product-zx9-speaker/mobile/image-product.jpg",
            imageTablet: "./assets/product-zx9-speaker/tablet/image-product.jpg",
            imageDesktop: "./assets/product-zx9-speaker/desktop/image-product.jpg",
            categoryImageMobile: "./assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
            categoryImageTablet: "./assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
            categoryImageDesktop: "./assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
            galleryFirstMobile: "./assets/product-zx9-speaker/mobile/image-gallery-1.jpg",
            galleryFirstTablet: "./assets/product-zx9-speaker/tablet/image-gallery-1.jpg",
            galleryFirstDesktop: "./assets/product-zx9-speaker/desktop/image-gallery-1.jpg",
            gallerySecondMobile: "./assets/product-zx9-speaker/mobile/image-gallery-2.jpg",
            gallerySecondTablet: "./assets/product-zx9-speaker/tablet/image-gallery-2.jpg",
            gallerySecondDesktop: "./assets/product-zx9-speaker/desktop/image-gallery-2.jpg",
            galleryThirdMobile: "./assets/product-zx9-speaker/mobile/image-gallery-3.jpg",
            galleryThirdTablet: "./assets/product-zx9-speaker/tablet/image-gallery-3.jpg",
            galleryThirdDesktop: "./assets/product-zx9-speaker/desktop/image-gallery-3.jpg",
            includedItems: [
              { quantity: 2, item: "Speaker unit" },
              { quantity: 2, item: "Speaker cloth panel" },
              { quantity: 1, item: "User manual" },
              { quantity: 1, item: "3.5mm 10m audio cable" },
              { quantity: 1, item: "10m optical cable" }
            ],
            relatedProducts: [
              {
                slug: "zx7-speaker",
                name: "ZX7 Speaker",
                imageMobile: "./assets/shared/mobile/image-zx7-speaker.jpg",
                imageTablet: "./assets/shared/tablet/image-zx7-speaker.jpg",
                imageDesktop: "./assets/shared/desktop/image-zx7-speaker.jpg"
              },
              {
                slug: "xx99-mark-one-headphones",
                name: "XX99 Mark I",
                imageMobile: "./assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
                imageTablet: "./assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
                imageDesktop: "./assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
              },
              {
                slug: "xx59-headphones",
                name: "XX59",
                imageMobile: "./assets/shared/mobile/image-xx59-headphones.jpg",
                imageTablet: "./assets/shared/tablet/image-xx59-headphones.jpg",
                imageDesktop: "./assets/shared/desktop/image-xx59-headphones.jpg"
              }
            ]
          }
      // Add more products as needed
    ];

    // Seed the database with hardcoded products
    for (const item of products) {
      const product = await prisma.product.create({
        data: {
          slug: item.slug,
          name: item.name,
          category: item.category,
          isNew: item.isNew,
          price: item.price,
          description: item.description,
          features: item.features,
          imageMobile: item.imageMobile,
          imageTablet: item.imageTablet,
          imageDesktop: item.imageDesktop,
          categoryImageMobile: item.categoryImageMobile,
          categoryImageTablet: item.categoryImageTablet,
          categoryImageDesktop: item.categoryImageDesktop,
          galleryFirstMobile: item.galleryFirstMobile,
          galleryFirstTablet: item.galleryFirstTablet,
          galleryFirstDesktop: item.galleryFirstDesktop,
          gallerySecondMobile: item.gallerySecondMobile,
          gallerySecondTablet: item.gallerySecondTablet,
          gallerySecondDesktop: item.gallerySecondDesktop,
          galleryThirdMobile: item.galleryThirdMobile,
          galleryThirdTablet: item.galleryThirdTablet,
          galleryThirdDesktop: item.galleryThirdDesktop,
          includedItems: {
            create: item.includedItems,
          },
          relatedProducts: {
            create: item.relatedProducts,
          },
        },
      });
      console.log(`Created product: ${product.name}`);
    }

    const totalProducts = await prisma.product.count();
    console.log(`Seed completed successfully. Created ${totalProducts} products.`);
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}


// Helper functions for retrieving data
export async function getProductBySlug(slug: string) {
  return prisma.product.findUnique({
    where: { slug },
    include: {
      includedItems: true,
      relatedProducts: true
    }
  })
}

export async function getAllProducts() {
  return prisma.product.findMany({
    include: {
      includedItems: true,
      relatedProducts: true
    }
  })
}

export async function getProductsByCategory(category: string) {
  return prisma.product.findMany({
    where: { category },
    include: {
      includedItems: true,
      relatedProducts: true
    }
  })
}

seed()