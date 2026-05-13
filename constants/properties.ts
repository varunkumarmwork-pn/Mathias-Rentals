import { Property } from "@/types";
import { PROPERTY_IMAGES } from "./images";

export const PROPERTIES: Property[] = [
  {
    id: 1,
    name: "Oakwood Residence",
    beds: 3,
    baths: 2,
    status: "available",
    description: "Modern family home with updated finishes",
    image: PROPERTY_IMAGES.oakwood,
  },
  {
    id: 2,
    name: "Maple Avenue Unit",
    beds: 2,
    baths: 1.5,
    status: "coming",
    description: "Contemporary urban living with premium amenities",
    image: PROPERTY_IMAGES.maple,
  },
  {
    id: 3,
    name: "Riverside Manor",
    beds: 4,
    baths: 2.5,
    status: "available",
    description: "Spacious home in established neighborhood",
    image: PROPERTY_IMAGES.riverside,
  },
  {
    id: 4,
    name: "Cedar Lane Cottage",
    beds: 2,
    baths: 1,
    status: "available",
    description: "Cozy home with charming details",
    image: PROPERTY_IMAGES.cedar,
  },
  {
    id: 5,
    name: "Pine Street Apartment",
    beds: 1,
    baths: 1,
    status: "coming",
    description: "Compact efficiency with modern amenities",
    image: PROPERTY_IMAGES.pine,
  },
];
