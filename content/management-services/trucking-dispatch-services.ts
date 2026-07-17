import type { ServiceContent } from "@/content/services/types";

export const truckingDispatchServices: ServiceContent = {
  slug: "trucking-dispatch-services",
  name: "Trucking & Dispatch Services",
  seoTitle: "Trucking Dispatch Services for Carriers & Owner-Operators",
  metaDescription:
    "Outsourced trucking dispatch — load sourcing, booking, driver coordination, and paperwork handled so carriers and owner-operators spend more time driving and less time on the phone.",
  h1: "Dispatch support that keeps trucks moving and paperwork off the driver's plate",
  overview:
    "Between load sourcing, rate negotiation, driver coordination, and the paperwork that follows every haul, dispatch work competes directly with time that should go toward driving and maintaining the fleet. We handle dispatch operations for carriers and owner-operators — finding and booking loads, coordinating with drivers, and managing the documentation trail — so trucks spend more time moving and less time waiting on a phone call.",
  problems: [
    "Time spent sourcing and negotiating loads cuts into actual driving hours",
    "Drivers are fielding dispatch calls and paperwork instead of focusing on the road",
    "Deadhead miles add up without a dedicated person planning routes and backhauls",
    "Rate confirmations, PODs, and paperwork get delayed or lost, slowing down invoicing",
  ],
  deliverables: [
    "Load sourcing and rate negotiation across load boards and broker relationships",
    "Booking confirmation and driver coordination for pickup and delivery",
    "Route and backhaul planning to reduce deadhead miles",
    "Documentation tracking (rate confirmations, PODs, paperwork) to keep invoicing on schedule",
  ],
  features: [
    "Load sourcing and negotiation on your behalf",
    "Driver-facing coordination so drivers focus on driving, not phone calls",
    "Backhaul and route planning aimed at reducing empty miles",
    "Paperwork tracking that feeds directly into invoicing",
  ],
  technologies: ["Load board platforms", "Dispatch & fleet management software", "Document tracking tools"],
  process: [
    { title: "Understand your lanes and equipment", description: "We learn your typical lanes, equipment type, and rate expectations before sourcing loads." },
    { title: "Set communication expectations with drivers", description: "A clear process for driver coordination is agreed so drivers know exactly how and when they'll hear from dispatch." },
    { title: "Run dispatch operations", description: "Loads are sourced, booked, and coordinated on an ongoing basis, with backhaul planning built in." },
    { title: "Track paperwork through to invoicing", description: "Rate confirmations and PODs are tracked so nothing delays getting paid." },
  ],
  industries: ["Logistics & Field Services"],
  benefits: [
    "More driving hours, less time spent sourcing loads and negotiating rates",
    "Drivers freed from fielding dispatch calls and chasing paperwork",
    "Fewer deadhead miles through deliberate backhaul planning",
    "Paperwork tracked consistently so invoicing isn't delayed",
  ],
  faqs: [
    {
      question: "Do you work with owner-operators or only larger fleets?",
      answer:
        "Both — dispatch support scales from a single owner-operator to a multi-truck fleet, with the process adjusted to the size of the operation.",
    },
    {
      question: "How do you communicate with drivers?",
      answer:
        "Communication expectations (channel, frequency, escalation) are agreed upfront so drivers always know how dispatch will reach them and what's expected in return.",
    },
    {
      question: "Can this reduce deadhead miles?",
      answer:
        "Backhaul and route planning is part of the service specifically to reduce empty miles, not just to fill the next outbound load.",
    },
  ],
  relatedServiceSlugs: ["back-office-data-entry-services", "call-center-services"],
};
