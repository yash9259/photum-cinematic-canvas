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
        "group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.08)]",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute top-3 right-3">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-md">
            <Star className="w-3 h-3 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground">{rating}</span>
          </div>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-display font-bold text-foreground text-lg leading-tight">{name}</h3>
          <p className="text-sm text-primary font-medium">{specialty}</p>
        </div>
      </div>
      <div className="p-3.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
          <MapPin className="w-3 h-3" />
          <span>{location}</span>
        </div>
        <span className="text-sm font-bold text-foreground">{price}</span>
      </div>
    </Link>
  );
};

export default PhotographerCard;
