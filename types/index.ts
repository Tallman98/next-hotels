export interface InputProps {
  type: string;
  placeholder: string;
}

export interface ButtonProps {
  text: string;
}

export interface TextCardProps {
  city: string;
  hotels: string;
  id: number;
}
export interface HotelCardProps {
  hotel: string;
  name: string;
  address: string;
}

export interface CityCardProps {
  image: string;
  number: string;
  city: string;
}

export interface BookCardProps {
  hotels: string;
  state: string;
  reviews: string;
}

export interface PageProps {
  params: { city: string };
}
export interface FilterCardProps {
  icon: string;
  name: string;
  active: boolean;
  onClick: () => void;
}

export interface AreaProps {
  place: string;
}
