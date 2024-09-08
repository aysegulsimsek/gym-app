export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
}
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
declare module 'react-slick' {

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    // Add other properties here as needed
  }

}