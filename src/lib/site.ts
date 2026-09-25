import { CircleDot, Cog, Cpu, Disc3, Flame, Thermometer, type LucideIcon } from "lucide-react";

export const siteUrl = "https://daytontruckrepairs.com";
export const googleBusinessUrl = "https://maps.app.goo.gl/p344iVU7Mk7Krrtx7";
export const phoneNumber = "(904) 240-7895";
export const phoneHref = "tel:+19042407895";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  intro: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "tire-change",
    title: "Tire Change",
    icon: CircleDot,
    short: "Truck and trailer tire changes to get you rolling again safely.",
    intro:
      "A flat or worn tire can stop a load cold. We handle truck and trailer tire changes so you can get back on the road with confidence.",
    points: ["Truck tire changes", "Trailer tire changes", "Flat and damaged tire replacement", "Tire condition checks"],
  },
  {
    slug: "brakes-suspension",
    title: "Brakes & Suspension",
    icon: Disc3,
    short: "Brake and suspension repair for safer stops and a steadier ride.",
    intro:
      "Your brakes and suspension carry the weight of every haul. We inspect, repair, and replace the parts that keep your truck and trailer stopping and riding right.",
    points: ["Brake inspection and repair", "Brake component replacement", "Suspension repair", "Ride and handling issues"],
  },
  {
    slug: "engine-bay",
    title: "Engine Bay",
    icon: Cog,
    short: "Engine bay repairs for trucks that aren't running the way they should.",
    intro:
      "Leaks, noises, or a truck that just isn't running right — we work on the engine bay components that keep your rig pulling.",
    points: ["Engine bay inspection", "Belts, hoses, and components", "Leak troubleshooting", "Running and performance issues"],
  },
  {
    slug: "coolant-radiator",
    title: "Coolant & Radiator",
    icon: Thermometer,
    short: "Cooling system and radiator repair to prevent overheating.",
    intro:
      "Overheating can turn a small issue into a big one fast. We service coolant systems and radiators to keep your engine running at the right temperature.",
    points: ["Radiator repair and replacement", "Coolant leaks", "Hose and cooling system repair", "Overheating diagnosis"],
  },
  {
    slug: "computer-diagnostics",
    title: "Computer Diagnostics",
    icon: Cpu,
    short: "Computer diagnostics to find the real problem fast.",
    intro:
      "Warning lights and fault codes don't have to be a guessing game. We use computer diagnostics to pinpoint the issue and plan the right fix.",
    points: ["Fault code reading", "Warning light diagnosis", "Troubleshooting electrical issues", "Clear repair recommendations"],
  },
  {
    slug: "welding",
    title: "Weld (Anything)",
    icon: Flame,
    short: "Welding for trucks, trailers, and just about anything else.",
    intro:
      "Cracked, broken, or needs to be built — if it can be welded, we'll weld it. Trucks, trailers, and equipment repairs included.",
    points: ["Trailer welding repairs", "Truck frame and bracket welding", "Custom fabrication", "Equipment and general welding"],
  },
];
