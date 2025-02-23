interface Image {
  title: string;
  description: string;
  url: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  images: Image[];
}
