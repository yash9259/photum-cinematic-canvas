import { cn } from "@/lib/utils";
import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface PhotographerCardProps {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  price: string;
  image: string;
  className?: string;
}

const PhotographerCard = ({
  id,
  name,
  specialty,
  location,
  rating,
  price,
  image,
  className,
}: PhotographerCardProps) => {
  return (
    <Link
      to={`/photographer/${id}`}
      className={cn(
        "group block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/20 transition-all duration-300",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-display font-semibold text-foreground text-lg leading-tight">{name}</h3>
          <p className="text-sm text-primary font-medium">{specialty}</p>
        </div>
      </div>
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-muted-foreground text-xs">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" /> {location}
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 text-primary fill-primary" /> {rating}
          </span>
        </div>
        <span className="text-sm font-semibold text-foreground">{price}</span>
      </div>
    </Link>
  );
};

export default PhotographerCard;
